import { Hero } from "@/components/hero";
import { PlaformCarouselHome } from "@/components/homePagePlatformCarousel";
import { TestimonialList } from "@/components/testimonials";
import { companyLinks, platformLinks, resourcesLink } from "@/lib/utils";
import Link from "next/link";


export default function Home() {
  return (
    <div className="pt-8 overflow-hidden">
      <Hero />

      <div className="my-15 px-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-6">
          <h1 className="text-3xl">Latest Platforms</h1>

          <p className="text-muted-foreground text-sm">
            Discover the best freelancing & remote work platforms
          </p>
        </div>

        <PlaformCarouselHome />
      </div>

      <div className="my-20 px-6 ">
        <div className="space-y-3 mb-10">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl ">Community Voices</h1>

            <p className="text-muted-foreground text-lg italic">
              "Freelancers who have been there, done that."
            </p>
          </div>
        </div>
        <TestimonialList />
      </div>

      <div id="footer" className="px-6 py-14 bg-muted border-t">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand Section */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">FreelanceHub</h2>

            <p className="text-sm text-muted-foreground leading-relaxed max-w-sm">
              Helping freelancers discover trusted platforms, remote
              opportunities, and real community experiences.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="font-medium text-lg">Platform</h3>

            <div className="flex flex-col gap-2 text-sm text-muted-foreground">
              {platformLinks.map((item, idx) => (
                <Link
                  key={idx}
                  className="linkHover transition-all"
                  href={item.href}
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </div>
          <div className="space-y-3">
            <h3 className="font-medium text-lg">Resources</h3>

            <div className="flex flex-col gap-2 text-sm text-muted-foreground">
              {resourcesLink.map((item, idx) => (
                <Link
                  key={idx}
                  className="linkHover transition-all"
                  href={item.href}
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </div>
          <div className="space-y-3">
            <h3 className="font-medium text-lg">Company</h3>

            <div className="flex flex-col gap-2 text-sm text-muted-foreground">
              {companyLinks.map((item, idx) => (
                <Link
                  key={idx}
                  className="linkHover transition-all"
                  href={item.href}
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t flex flex-col md:flex-row items-center justify-between gap-3 text-sm text-muted-foreground">
          <p>© 2026 FreelanceHub. All rights reserved.</p>

          <div className="flex items-center gap-5">
            <Link className="linkHover transition-all" href="/terms">Terms</Link>
            <Link className="linkHover transition-all" href="/privacy-policy">Privacy</Link>
            <Link className="linkHover transition-all" href="/community-guidelines">Guidelines</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
