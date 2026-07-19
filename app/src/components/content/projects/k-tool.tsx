import Badge from "../../reusables/badge";
import Link from "../../reusables/link";

export default function KTool() {
  return (
    <div className="w-lg flex flex-col">
      <div className="mb-6">
        <div className="flex gap-4 mb-3 items-center">
          <img
            src="/images/icons/k-tool.png"
            alt="K-Tool icon"
            className="h-4"
          />
          <h2 className="font-bold text-xl">K-Tool Engineering</h2>
        </div>
        <p className="text-base text-black/60">July - September 2025</p>
      </div>

      <p className="mb-6">
        A complete corporate website for an esteemed precision engineering firm.
      </p>

      <div className="flex gap-3 mb-8">
        <Link href="https://www.ktoolengineering.com/">Website</Link>
      </div>

      <img
        src="/images/k-tool-demo.gif"
        width={560 * 0.9}
        height={315 * 0.9}
        className="pointer-events-none select-none mb-12"
        alt="K-Tool Engineering demo"
      />

      <div className="space-y-8">
        <div className="space-y-3">
          <h3 className="text-base font-bold">How it came about</h3>
          <p>
            One of my best-est friends (Darren) that I've known since childhood
            gave me the opportunity to completely revamp his family business'
            website. He had just graduated from university and was on his way to
            taking over after his father. I was honored to be trusted with this
            task, as K-Tool is a well-established precision engineering firm
            with a strong reputation in the industry.
          </p>
          <p>
            I worked closely with Darren to understand his vision and
            requirements for the new website. Throughout, it was cool to be able
            to learn more about the domain of precision engineering as well.
          </p>
          <p>
            We went through two iterations of the site, as the first was subpar
            and I felt I could do much better.
          </p>
          <p>
            Super happy with how the site turned out, and I was able to deliver
            it in a complete package including SEO, analytics, customer inquiry
            management, CMS integration for blogging.
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
                src="/images/icons/sanity.png"
                alt="Sanity icon"
                className="w-5 rounded-sm"
              />
              <span>Sanity</span>
            </Badge>
            <Badge>
              <img
                src="/images/icons/resend.svg"
                alt="Resend icon"
                className="w-5 rounded-sm"
              />
              <span>Resend</span>
            </Badge>
            <Badge>
              <img
                src="/images/icons/motion.png"
                alt="Motion icon"
                className="w-5 rounded-sm"
              />
              <span>Motion</span>
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
                src="/images/icons/google-search-console.png"
                alt="Google Search Console icon"
                className="w-5 rounded-sm"
              />
              <span>Google Search Console</span>
            </Badge>
          </div>
        </div>
      </div>
    </div>
  );
}
