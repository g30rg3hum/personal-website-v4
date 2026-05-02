import { CaretRightIcon } from "@phosphor-icons/react";
import Badge from "../../reusables/badge";
import Link from "../../reusables/link";

export default function Sip() {
  return (
    <div className="w-lg flex flex-col">
      <div className="mb-6">
        <h2 className="font-bold text-xl">Sip</h2>
        <p className="font-bold text-base text-black/30 ">
          January - February 2026
        </p>
      </div>

      <p className="mb-6">Minimalistic hydration tracker on iOS.</p>

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
        <div>
          <h3 className="text-base font-bold mb-3">Why?</h3>
          <p>
            I was not getting enough water daily and felt off, so I needed a way
            to track my intake. Existing apps had so much bloat - childish
            mascots, useless extra features ... all I wanted to do was simply
            track my water throughout the day and see how often I’m hitting the
            target amount.
          </p>
        </div>

        <div>
          <h3 className="text-base font-bold mb-4">How?</h3>
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

        <div>
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
        </div>
      </div>
    </div>
  );
}
