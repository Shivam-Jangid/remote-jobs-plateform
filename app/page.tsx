import Link from "next/link";

export default function Home() {
  return (
    <>
    <div className="min-h-screen">
      <section className="bg-background">
        <div className="text-center">
          <span>Find Remote Job Plateforms</span>
          <p>
            Find the best platforms to search for remote jobs. Read reviews,
            upvote your favorites, and share your experience with the community.
          </p>
          <div>
            <Link href='/plateforms' className="cursor-pointer">Browse Plateforms</Link>
            <Link href='/apply' className="cursor-pointer">Apply as a Plateforms</Link>
          </div>
        </div>
      </section>
    </div>
    </>
  );
}
