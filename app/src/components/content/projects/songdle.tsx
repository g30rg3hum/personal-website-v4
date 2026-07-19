// import { CaretRightIcon } from "@phosphor-icons/react";
import Badge from "../../reusables/badge";

export default function Songdle() {
  return (
    <div className="w-lg flex flex-col">
      <div className="mb-6">
        <div className="flex gap-4 mb-3.5 items-center">
          <img
            src="/images/icons/app/songdle.png"
            alt="Songdle icon"
            className="rounded-md w-4"
          />
          <h2 className="font-bold text-xl">Songdle</h2>
        </div>

        <p className="text-base text-black/50">December 2025 - February 2026</p>
      </div>

      <p className="mb-12">
        Web game that is a music-based version of the famous New York Times,
        word-guessing game, Wordle. Players have to guess the song based on a
        short audio clip.
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
        <div className="space-y-3">
          <h3 className="text-base font-bold">Why?</h3>
          <p>
            My friends and I were playing Wordle over Discord, and eventually
            that led to looking for other Wordle-spinoffs. Since we love music,
            we were looking for a music variant but couldn't find anything good.
            They were all either buggy, had bad UI, or just didn't have the
            features you'd expect from a song-based Worldle-spinoff.
          </p>
          <p>
            So all three of us came together to fill this gap. A dream team of
            developers and music fanatics.
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

        {/* <div>
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
        </div> */}
      </div>
    </div>
  );
}
