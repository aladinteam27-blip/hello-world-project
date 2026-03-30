import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const TELEGRAM_BOT_TOKEN = Deno.env.get('TELEGRAM_BOT_TOKEN');
    if (!TELEGRAM_BOT_TOKEN) {
      throw new Error('TELEGRAM_BOT_TOKEN is not configured');
    }

    const TELEGRAM_CHAT_ID = Deno.env.get('TELEGRAM_CHAT_ID');
    if (!TELEGRAM_CHAT_ID) {
      throw new Error('TELEGRAM_CHAT_ID is not configured');
    }

    const { name, phone, services } = await req.json();

    if (!name || !phone) {
      return new Response(
        JSON.stringify({ error: 'Имя и телефон обязательны' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const servicesText = services && services.length > 0
      ? services.join(', ')
      : 'Не указаны';

    const message = `🔮 *Новая заявка!*\n\n👤 *Имя:* ${name}\n📞 *Телефон:* ${phone}\n📋 *Услуги:* ${servicesText}`;

    const response = await fetch(
      `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: TELEGRAM_CHAT_ID,
          text: message,
          parse_mode: 'Markdown',
        }),
      }
    );

    const data = await response.json();
    if (!response.ok) {
      throw new Error(`Telegram API error [${response.status}]: ${JSON.stringify(data)}`);
    }

    return new Response(
      JSON.stringify({ success: true }),
      { status: 200, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error('Error sending telegram message:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    return new Response(
      JSON.stringify({ error: errorMessage }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});
