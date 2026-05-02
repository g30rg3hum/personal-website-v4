import Badge from "../../reusables/badge";

export default function Detach() {
  return (
    <div className="w-lg flex flex-col">
      <div className="mb-6">
        <h2 className="font-bold text-xl">Detach</h2>
        <p className="font-bold text-base text-black/30 ">
          March 2026 - in progress
        </p>
      </div>

      <p className="mb-12">
        An app and paired with an NFC card to help people manage screen time
        habits and be fully present in the real world.
      </p>

      <iframe
        width={560 * 0.9}
        height={315 * 0.9}
        src="https://www.youtube.com/embed/sOz-BZmspto?si=biipRe3ieZHEmnbo"
        title="Video explaining Detach"
        allow="autoplay; encrypted-media"
        allowFullScreen
        className="self-center mb-12"
      />

      <div className="flex justify-center items-center gap-8 mb-14">
        <img
          src="/images/detach-blocked-screen.png"
          alt="Detach blocked screen"
          className="w-1/3 pointer-events-none select-none"
        />
        <img
          src="/images/detach-card.png"
          alt="Detach cards"
          className="w-1/2 pointer-events-none select-none -scale-x-100 -scale-y-100"
        />
      </div>

      <div className="space-y-8">
        <div>
          <h3 className="text-base font-bold mb-3">Why?</h3>
          <p>
            Bring back the beauty of life pre-phones, where people were living
            in the moment and interacting, rather than being hypnotized by a
            screen.
          </p>
        </div>

        <div>
          <h3 className="text-base font-bold mb-4">How?</h3>
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
          <p>
            Block your apps/sites with the Detach app, and you have to scan back
            in with the card. Place the card elsewhere whilst detached (almost
            like placing your phone in another room). Physical distance creates
            a subtle but effective friction that prevents you from mindlessly
            re-accessing these apps/sites.
          </p>
        </div>
      </div>
    </div>
  );
}
