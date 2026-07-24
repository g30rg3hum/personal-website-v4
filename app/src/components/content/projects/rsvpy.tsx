import Badge from "../../reusables/badge";
import Link from "../../reusables/link";

export default function Rsvpy() {
  return (
    <div className="w-lg flex flex-col">
      <div className="mb-6">
        <div className="flex gap-4 mb-3 items-center">
          <img
            src="/images/icons/rsvpy.png"
            alt="mobVis icon"
            className="h-5.5"
          />
          <h2 className="font-bold text-xl">rsvpy</h2>
        </div>
        <p className="text-base text-black/60">July - October 2025</p>
      </div>

      <p className="mb-6">
        An app to easily manage and track event attendance confirmations and
        payments.
      </p>

      <div className="flex gap-3 mb-8">
        <span>
          <Link href="https://github.com/g30rg3hum/rsvpy">GitHub</Link> (web app
          is no longer up)
        </span>
      </div>

      <img
        src="/images/rsvpy-demo.gif"
        width={560 * 0.9}
        height={315 * 0.9}
        className="pointer-events-none select-none mb-12"
        alt="rsvpy demo"
      />

      <div className="space-y-8">
        <div className="space-y-3">
          <h3 className="text-base font-bold">What and why</h3>
          <p>
            During university, lots of events were inefficiently managed using
            WhatsApp groups. Typically, the organiser sends a message of the
            event details, followed by an empty numbered list. Joiners would
            then have to copy the message and add their name to the list to
            RSVP. The same process was used to track payments after the event.
          </p>
          <p>
            This is obviously very inefficient and error-prone, which is why I
            created rsvpy.
          </p>
          <p>
            Organisers could easily create events, re-run old ones, share invite
            links, and track and request payments. On the other hand, attendees
            could join events, stay updated with event changes, get reminders,
            mark payments, and be notified of freed spots.
          </p>
        </div>

        <div>
          <h3 className="text-base font-bold mb-3">Tech</h3>
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
              <img src="/images/icons/aws.svg" alt="AWS icon" className="w-5" />
              <span>AWS S3</span>
            </Badge>
            <Badge>
              <img
                src="/images/icons/prisma.jpg"
                alt="Prisma icon"
                className="w-5 rounded-sm"
              />
              <span>Prisma Postgres</span>
            </Badge>
            <Badge>
              <img
                src="/images/icons/resend.svg"
                alt="Resend icon"
                className="w-5"
              />
              <span>Resend</span>
            </Badge>
            <Badge>
              <img
                src="/images/icons/daisyui.png"
                alt="DaisyUI icon"
                className="w-5 rounded-sm"
              />
              <span>DaisyUI</span>
            </Badge>
          </div>
        </div>
      </div>
    </div>
  );
}
