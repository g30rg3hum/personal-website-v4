import { CaretRightIcon } from "@phosphor-icons/react";
import Badge from "../../reusables/badge";

export default function Songdle() {
  return (
    <div className="w-lg flex flex-col">
      <div className="mb-6">
        <h2 className="font-bold text-xl">Songdle</h2>
        <p className="font-bold text-base text-black/30 ">
          December 2025 - February 2026
        </p>
      </div>

      <p className="mb-12">
        Web application of a song-based version of Wordle.
      </p>

      <iframe
        width={560 * 0.9}
        height={315 * 0.9}
        src="https://www.youtube.com/embed/c5CMv4YP400?si=WyZtykFoQ2YT2Cpi"
        title="Video explaining Songdle"
        allow="autoplay; encrypted-media"
        allowFullScreen
        className="self-center mb-12"
      />

      <div className="space-y-8">
        <div>
          <h3 className="text-base font-bold mb-3">Why?</h3>
          <p>
            My friends and I were playing Wordle, and eventually that led to
            looking for other Wordle-spinoffs. Since we loved music, we were
            looking for a music variant but couldn't find anything good. So we
            decided to create one ourselves - Songdle.
          </p>
        </div>

        <div>
          <h3 className="text-base font-bold mb-4">How?</h3>
          <div className="flex gap-4 mb-6 flex-wrap">
            <Badge>
              <img
                src="/images/icons/typescript.png"
                alt="Typescript icon"
                className="w-5"
              />
              <span>TypeScript</span>
            </Badge>
            <Badge>
              <img
                src="/images/icons/nextjs.svg"
                alt="Next.js icon"
                className="w-5"
              />
              <span>Next.js</span>
            </Badge>
            <Badge>
              <img
                src="/images/icons/supabase.png"
                alt="Supabase logo"
                className="w-4"
              />
              <span>Supabase</span>
            </Badge>
            <Badge>
              <img
                src="/images/icons/tailwind.png"
                alt="Tailwind logo"
                className="w-4"
              />
              <span>Tailwind</span>
            </Badge>
            <Badge>
              <img
                src="/images/icons/shadcn.png"
                alt="Shadcn logo"
                className="w-4"
              />
              <span>Shadcn</span>
            </Badge>
          </div>
        </div>

        <div>
          <h3 className="text-base font-bold mb-3">Outcome</h3>
          <ul className="flex flex-col gap-4">
            <li className="flex gap-2 items-start">
              <CaretRightIcon className="mt-1" />
              <span>
                <b>5000+ monthly players around the globe!</b>
              </span>
            </li>
            <li className="flex gap-2 items-start">
              <CaretRightIcon className="mt-1" />
              <span>
                SEO and organic traffic; <b>92%</b> of visitors come from
                Google, and ranked <b>#1 for "Songdle"</b> search term.
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
