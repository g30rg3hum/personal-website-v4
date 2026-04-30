import { useEffect, useRef, useState } from "react";
import Section from "../canvas/section";
import {
  GithubLogoIcon,
  LinkedinLogoIcon,
  MailboxIcon,
} from "@phosphor-icons/react";

const contactInfo = [
  {
    icon: MailboxIcon,
    text: "george.hum@protonmail.com",
    url: null,
  },
  {
    icon: LinkedinLogoIcon,
    text: "linkedin.com/in/georgehum",
    url: "https://www.linkedin.com/in/georgehum/",
  },
  {
    icon: GithubLogoIcon,
    text: "github.com/g30rg3hum",
    url: "https://github.com/g30rg3hum",
  },
];

export default function StartSection() {
  const [time, setTime] = useState(new Date());

  const ref = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // update every minute
    const interval = setInterval(() => setTime(new Date()), 60000);
    return () => clearInterval(interval);
  }, []);

  const handleLoad = () => {
    if (ref.current) {
      setOffset({
        x: ref.current.offsetWidth / 2,
        y: ref.current.offsetHeight / 2,
      });
    }
  };

  const formattedTime = time.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
    timeZone: "Asia/Kuala_Lumpur",
  });

  return (
    <Section ref={ref} x={-offset.x} y={-offset.y} onLoad={handleLoad}>
      <div className="flex gap-12">
        <img
          src="/images/me-waving.png"
          alt="George waving"
          className="w-[150px] max-w-none pointer-events-none select-none self-start"
        />
        <div className="w-sm h-max translate-y-4">
          <div className="flex gap-4 items-center mb-6">
            <h1 className="text-3xl font-bold">George Hum</h1>
            <span className="text-black/30 font-bold">(or Hum Weng Wong)</span>
          </div>
          <div className="space-y-6">
            <p>
              Life is all about solving your next problem.
              <br /> I <b>build software</b> to do this.
            </p>
            <p>
              Whilst being <b>technical</b>, I am also <b>business-oriented</b>{" "}
              and have a good eye for <b>design.</b>
            </p>
            <ul className="flex flex-col gap-3">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon;
                return (
                  <li key={index} className="flex gap-3">
                    <IconComponent size={18} weight="bold" />
                    {info.url ? (
                      <a
                        href={info.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sky-500 hover:cursor-pointer"
                        onPointerDown={(e) => e.stopPropagation()}
                      >
                        {info.text}
                      </a>
                    ) : (
                      <span
                        onPointerMove={(e) => e.stopPropagation()}
                        onPointerDown={(e) => e.stopPropagation()}
                        className="select-all"
                      >
                        {info.text}
                      </span>
                    )}
                  </li>
                );
              })}
            </ul>
            <p>
              It is currently <b>{formattedTime}</b> where I'm at.
            </p>
            <p>
              At the moment, I am <b>job-hunting whilst building</b>
              <img
                src="/images/icons/detach.png"
                alt="Detach icon"
                className="inline-block h-5 mr-1"
              />
              .
            </p>
            <p className="text-xs font-bold text-black/30">
              Side note: this site is work in progress. <br />
              Rolling out updates incrementally.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}
