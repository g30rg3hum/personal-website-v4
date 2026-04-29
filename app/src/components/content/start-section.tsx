import { useRef, useState } from "react";
import Section from "../canvas/section";

export default function StartSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const handleLoad = () => {
    if (ref.current) {
      setOffset({
        x: ref.current.offsetWidth / 2,
        y: ref.current.offsetHeight / 2,
      });
    }
  };

  return (
    <Section ref={ref} x={-offset.x} y={-offset.y} onLoad={handleLoad}>
      <div className="flex gap-12">
        <img
          src="/images/me-waving.png"
          alt="George waving"
          className="w-[150px] max-w-none"
        />
        <div className="w-max h-max translate-y-12">
          <h1 className="text-4xl font-bold mb-6">Hey!</h1>
          <div className="space-y-4">
            <p>I'm currently revamping the site right now.</p>
            <p>Feel free to check back later.</p>
          </div>
        </div>
      </div>
    </Section>
  );
}
