import Badge from "../../reusables/badge";
import Link from "../../reusables/link";

export default function MobVis() {
  return (
    <div className="w-lg flex flex-col">
      <div className="mb-6">
        <div className="flex gap-4 mb-3 items-center">
          <img
            src="/images/icons/mobvis.png"
            alt="mobVis icon"
            className="h-5.5"
          />
          <h2 className="font-bold text-xl">mobVis</h2>
        </div>
        <p className="text-base text-black/60">September 2024 - May 2025</p>
      </div>

      <p className="mb-6">
        University dissertation project involving the creation of a
        visualisation interface for the clinical analysis of multiple sclerosis
        patients' mobility.
      </p>

      <div className="flex gap-3 mb-8">
        <span>
          <Link href="https://github.com/g30rg3hum/mobVis">GitHub</Link> (code +
          dissertation)
        </span>
      </div>

      <img
        src="/images/mobvis-demo.gif"
        width={560 * 0.9}
        height={315 * 0.9}
        className="pointer-events-none select-none mb-12"
        alt="mobVis demo"
      />

      <div className="space-y-8">
        <div className="space-y-3">
          <h3 className="text-base font-bold">What it is about and does</h3>
          <p>
            Multiple sclerosis (MS) is a chronic autoimmune disease that affects
            the central nervous system, deteriorating various basic functions.
            The main one being mobility.
          </p>
          <p>
            To be able to manage and treat something, clinicians need a way to
            track and analyse it. This is where mobVis comes in.
          </p>
          <p>
            The patients collect day-to-day walking data using an inertial
            measurement unit sensor. Clinicans can then upload this data into
            mobVis, which extracts key mobility parameters (called digital
            mobility outcomes (DMOs)) like cadence. Graphs and plots are then
            automatically generated, visualising these DMOs and allowing
            clinicians to make useful inferences about the patients' mobility.
          </p>
          <p>
            I was nicely awarded 80% for the final product and dissertation.
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
              <img
                src="/images/icons/d3js.webp"
                alt="D3.js icon"
                className="w-5"
              />
              <span>D3.js</span>
            </Badge>
            <Badge>
              <img
                src="/images/icons/python.webp"
                alt="Python icon"
                className="w-5 rounded-sm"
              />
              <span>Python</span>
            </Badge>
            <Badge>
              <img
                src="/images/icons/fastapi.png"
                alt="FastAPI icon"
                className="w-5 rounded-sm"
              />
              <span>FastAPI</span>
            </Badge>
            <Badge>
              <img
                src="/images/icons/mobgap.webp"
                alt="mobgap icon"
                className="w-5 rounded-sm"
              />
              <span>mobgap</span>
            </Badge>
          </div>
        </div>
      </div>
    </div>
  );
}
