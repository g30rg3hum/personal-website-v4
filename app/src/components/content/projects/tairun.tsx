// import { CaretRightIcon } from "@phosphor-icons/react";
import Badge from "../../reusables/badge";
import Link from "../../reusables/link";

export default function Tairun() {
  return (
    <div className="w-lg flex flex-col">
      <div className="mb-6">
        <div className="flex gap-4 mb-3.5 items-center">
          <img
            src="/images/icons/tairun.png"
            alt="Tairun icon"
            className="h-4"
          />
          <h2 className="font-bold text-xl">Tairun</h2>
        </div>

        <p className="text-base text-black/50">December 2025</p>
      </div>

      <p className="mb-6">
        Automated scraping and AI workflow for more efficient job search.
      </p>

      <div className="flex gap-3 mb-8">
        <Link href="https://github.com/g30rg3hum/tairun">GitHub</Link>
      </div>

      <iframe
        width={560 * 0.9}
        height={315 * 0.9}
        src="https://www.youtube.com/embed/gEvyA1_bJzc?si=7K8KpHVJmS9DtK_E"
        title="Video explaining Songdle"
        allow="autoplay; encrypted-media"
        allowFullScreen
        className="self-center mb-12"
      />

      <img
        src="/images/workflow-graph.png"
        alt="Illustration of Tairun workflow"
        className="mb-12 pointer-events-none"
      />

      <div className="space-y-8">
        <div className="space-y-3">
          <h3 className="text-base font-bold">Background</h3>
          <p>
            Job searching is so tedious and time-consuming. I have to read super
            long job descriptions (and after all that reading, I'm often met
            with an annoying non-sponsorship note). Research about the company.
            Tailor my cover letter. Submit my application, then hope for the
            best. It's even more unfortunate when I get rejected after all that
            hard work.
          </p>
          <p>
            So I built Tairun, which scrapes for jobs on my favourite platforms,
            then utilises LLMs to help me filter by relevance (given my resume
            and background) and make tailored applications.
          </p>
        </div>

        <div>
          <h3 className="text-base font-bold mb-4">Tech</h3>
          <div className="flex gap-4 mb-6 flex-wrap">
            <Badge>
              <img
                src="/images/icons/python.webp"
                alt="Python logo"
                className="w-4"
              />
              <span>Python</span>
            </Badge>
            <Badge>
              <img
                src="/images/icons/langchain.png"
                alt="LangChain logo"
                className="w-4"
              />
              <span>LangChain</span>
            </Badge>
            <Badge>
              <img
                src="/images/icons/selenium.png"
                alt="Selenium icon"
                className="w-5 rounded-sm"
              />
              <span>Selenium</span>
            </Badge>
            <Badge>
              <img
                src="/images/icons/beautiful-soup.png"
                alt="BeautifulSoup icon"
                className="h-5"
              />
              <span>BeautifulSoup</span>
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
