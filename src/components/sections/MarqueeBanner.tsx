interface MarqueeBannerProps {
  text: string;
}

const MarqueeBanner = ({ text }: MarqueeBannerProps) => {
  const repeated = Array(12).fill(text).join(" · ");
  
  return (
    <div className="py-6 overflow-hidden border-y border-gold/10">
      <div className="animate-marquee whitespace-nowrap">
        <span className="font-cormorant text-2xl md:text-3xl text-gold/20 tracking-[0.3em]">
          {repeated} · {repeated}
        </span>
      </div>
    </div>
  );
};

export default MarqueeBanner;
