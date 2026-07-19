// import { CaretRightIcon } from "@phosphor-icons/react";
import Badge from "../../reusables/badge";
import Link from "../../reusables/link";

export default function Sip() {
  return (
    <div className="w-lg flex flex-col">
      <div className="mb-6">
        <div className="flex gap-4 mb-3 items-center">
          <img
            src="/images/icons/app/sip.png"
            alt="Sip icon"
            className="rounded-md w-10 h-10"
          />
          <h2 className="font-bold text-xl">Sip</h2>
        </div>
        <p className="text-base text-black/60">January - February 2026</p>
      </div>

      <p className="mb-6">Simple and minimalistic hydration tracker.</p>

      <div className="flex gap-3 mb-8">
        <Link href="https://www.ssip.live/">Website</Link>
        <span>|</span>
        <Link href="https://apps.apple.com/gb/app/sip-simple-hydration-tracker/id6759207215">
          App Store
        </Link>
      </div>

      <iframe
        width={560 * 0.9}
        height={315 * 0.9}
        src="https://www.youtube.com/embed/G426UTYY-yk?si=b1DBjjoYfiFGCbL9"
        title="Video explaining Sip"
        allow="autoplay; encrypted-media"
        allowFullScreen
        className="self-center mb-12"
      />

      <img
        src="/images/sip-app-store.png"
        alt="Sip on the App Store"
        className="mb-12 pointer-events-none"
      />

      <div className="space-y-8">
        <div className="space-y-3">
          <h3 className="text-base font-bold">Why?</h3>
          <p>
            I found myself feeling off whenever I didn't drink enough water
            throughout the day. My mouth would also always feel dry, and I have
            a big fear of stinky breath. The problem was that I didn't actually
            know how much I was drinking. I just felt like I wasn't drinking
            enough.
          </p>
          <p>
            I needed a simple way to track my water intake. I went into the app
            store and downloaded a few to test out. Honestly, I was pretty
            disappointed. They were all so bloated with features I didn't need,
            like challenges and childish mascots.
          </p>
          <p>
            I just wanted to know my target, record my water intake, get
            reminders throughout the day, and have simple analytics surrounding
            how often I was hitting the target.
          </p>
          <p>And so I made Sip.</p>
        </div>

        <div>
          <h3 className="text-base font-bold mb-4">Tech</h3>
          <div className="flex gap-4">
            <Badge>
              <img
                src="/images/icons/react.png"
                alt="React Native icon"
                className="w-4"
              />
              <span>React Native</span>
            </Badge>
            <Badge>
              <img
                src="/images/icons/expo.svg"
                alt="Expo icon"
                className="w-4"
              />
              <span>Expo</span>
            </Badge>
          </div>
        </div>

        {/* <div>
          <h3 className="text-base font-bold mb-3">Outcome</h3>
          <ul className="flex flex-col gap-4">
            <li className="flex gap-2 items-start">
              <CaretRightIcon className="mt-1" />
              <span>
                <b>Shipped in two weeks of focused work</b>, without previous
                mobile development experience.
              </span>
            </li>
            <li className="flex gap-2 items-start">
              <CaretRightIcon className="mt-1" />
              <span>
                Reached <b>60+ downloads.</b>
              </span>
            </li>
            <li className="flex gap-2 items-start">
              <CaretRightIcon className="mt-1" />
              <span>
                <b>12.9% product page conversion rate</b> (above ~3% industry
                benchmark).
              </span>
            </li>
          </ul>
        </div> */}
      </div>
    </div>
  );
}
