import Badge from "../../reusables/badge";
import Link from "../../reusables/link";

export default function Detach() {
  return (
    <div className="w-lg flex flex-col">
      <div className="mb-6">
        <div className="flex gap-4 mb-3 items-center">
          <img
            src="/images/icons/app/detach.png"
            alt="Detach icon"
            className="rounded-md w-10 h-10"
          />
          <h2 className="font-bold text-xl">Detach</h2>
        </div>
        <p className="text-base text-black/60">March 2026 - Present</p>
      </div>

      <p className="mb-6">
        An app that goes with an NFC card, to help society move towards better
        screen time habits and be fully present in the real world.
      </p>

      <div className="flex gap-3 mb-8">
        <Link href="https://www.usedetach.com/">Website</Link>
        <span>|</span>
        <Link href="https://apps.apple.com/us/app/detach-less-screen-more-life/id6760619292">
          App Store
        </Link>
      </div>

      <iframe
        width={560 * 0.9}
        height={315 * 0.9}
        src="https://www.youtube.com/embed/BUnn3eLMjlE?si=suuuYzp-joaVwiqs"
        title="Video explaining Detach"
        allow="autoplay; encrypted-media"
        allowFullScreen
        className="self-center mb-12"
      />

      <div className="flex justify-center items-center gap-8 mb-14">
        <img
          src="/images/detach-blocked-screen.png"
          alt="Detach blocked screen"
          className="w-1/3 pointer-events-none select-none brightness-105"
        />
        <img
          src="/images/detach-card.png"
          alt="Detach cards"
          className="w-1/2 pointer-events-none select-none"
        />
      </div>

      <div className="space-y-8">
        <div className="space-y-3">
          <h3 className="text-base font-bold">Why?</h3>
          <p>
            For much of my life I struggled with excessive screen time (always
            either on the computer or phone) and I noticed the negative impact
            it was having on my day-to-day life, overall wellbeing, and mental
            health.
          </p>
          <p>
            I was alive, but never truly living. My mind was always foggy.
            Always elsewhere. Worst of all, I think I naturally love to
            socialise and hang out, but for some reason I grew up being scared
            of people.
          </p>
          <p>
            I tried brute-forcing my way out of this problem (didn't work),
            until I eventually found that the best way to solve it was to create
            real, physical distance between myself and the apps/sites that were
            the main culprits of my excessive screen time.
          </p>
          <p>
            I saw an improvement in all aspects of my life. My mental clarity.
            Presence. Focus on work. Coolest of all, I could actually sit with
            my thoughts and truly process, reflect, and conjure amazing ideas.
          </p>
          <p>
            It's pretty depressing when I see society as a whole always heads
            down on their phones. On the way to work. At the family dinner
            table. I want to help bring back the beauty of life pre-phones,
            where people were living in the moment and interacting, rather than
            being hypnotized by a screen.
          </p>
        </div>

        <div>
          <h3 className="text-base font-bold mb-3">Tech</h3>
          <div className="flex gap-4 mb-6">
            <Badge>
              <img
                src="/images/icons/swift.png"
                alt="Swift icon"
                className="w-4"
              />
              <span>Swift</span>
            </Badge>
            <Badge>
              <img
                src="/images/icons/supabase.png"
                alt="Supabase logo"
                className="w-4"
              />
              <span>Supabase</span>
            </Badge>
          </div>
        </div>
      </div>
    </div>
  );
}
