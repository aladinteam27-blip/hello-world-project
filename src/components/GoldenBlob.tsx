import { useEffect, useRef } from "react";

const GoldenBlob = () => {
  const blobRef = useRef<HTMLDivElement>(null);
  const mousePos = useRef({ x: 0, y: 0 });
  const currentPos = useRef({ x: 0, y: 0 });
  const rafId = useRef<number>(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
    };

    const animate = () => {
      const blob = blobRef.current;
      if (!blob) return;

      // Smooth lerp towards mouse position
      currentPos.current.x += (mousePos.current.x - currentPos.current.x) * 0.06;
      currentPos.current.y += (mousePos.current.y - currentPos.current.y) * 0.06;

      blob.style.transform = `translate(${currentPos.current.x - 200}px, ${currentPos.current.y - 200}px)`;

      rafId.current = requestAnimationFrame(animate);
    };

    // Initialize position to center
    mousePos.current = {
      x: window.innerWidth / 2,
      y: window.innerHeight / 2,
    };
    currentPos.current = { ...mousePos.current };

    window.addEventListener("mousemove", handleMouseMove);
    rafId.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(rafId.current);
    };
  }, []);

  return (
    <div
      ref={blobRef}
      className="fixed top-0 left-0 pointer-events-none z-[1]"
      style={{
        width: 400,
        height: 400,
        borderRadius: "50%",
        background:
          "radial-gradient(circle, rgba(218,192,127,0.15) 0%, rgba(196,161,72,0.08) 40%, rgba(171,146,67,0.03) 65%, transparent 80%)",
        filter: "blur(30px)",
        willChange: "transform",
        mixBlendMode: "screen",
      }}
    />
  );
};

export default GoldenBlob;
