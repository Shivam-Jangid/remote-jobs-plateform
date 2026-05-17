"use client";

import { useState, useMemo } from "react";
import { Platforms } from "@/components/platforms";
import { allPlatforms, platformsHomePage } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import {
  Search,
  TrendingUp,
  Star,
  Flame,
  X,
  LayoutGrid,
  List,
  ChevronLeft,
  ChevronRight,
  ThumbsUp,
  ThumbsDown,
  MessageCircle,
  ExternalLink,
  ArrowLeft,
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";


const CATEGORIES = ["All", "Freelance", "Remote Jobs", "Agency", "Marketplace", "Software"];

const SORT_OPTIONS = [
  { value: "trending", label: "Trending", icon: Flame },
  { value: "top",      label: "Top Rated", icon: Star },
  { value: "active",   label: "Most Active", icon: TrendingUp },
];

const PAGE_SIZE = 8;

export default function PlatformsPage() {
  const [search, setSearch]     = useState("");
  const [category, setCategory] = useState("All");
  const [sort, setSort]         = useState("trending");
  const [view, setView]         = useState<"grid" | "list">("grid");
  const [page, setPage]         = useState(1);

  // Filter + sort
  const filtered = useMemo(() => {
    let r = [...allPlatforms];

    if (search.trim()) {
      const q = search.toLowerCase();
      r = r.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q) ||
          p.tags.some((t) => t.toLowerCase().includes(q))
      );
    }

    if (category !== "All") r = r.filter((p) => p.category === category);

    if (sort === "trending") r.sort((a, b) => (b.upvotes - b.downvotes) - (a.upvotes - a.downvotes));
    else if (sort === "top")  r.sort((a, b) => b.upvotes - a.upvotes);
    else                      r.sort((a, b) => b.comments - a.comments);

    return r;
  }, [search, category, sort]);

  // Pagination
  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const safePage   = Math.min(page, totalPages);
  const paginated  = filtered.slice((safePage - 1) * PAGE_SIZE, safePage * PAGE_SIZE);

  function handleFilter(fn: () => void) {
    fn();
    setPage(1);
  }

  const totalVotes    = allPlatforms.reduce((s, p) => s + p.upvotes, 0);
  const totalComments = allPlatforms.reduce((s, p) => s + p.comments, 0);

  return (
    <div className="min-h-screen ">
      <Button variant="outline" className="px-10 fixed backdrop-blur-md  py-2 rounded-lg mx-2 my-1">
        <Link  className="fixed flex items-center gap-2" href={'/'}>
        <ArrowLeft />
        Back
        </Link>
      </Button>

      {/* ── Page header ─────────────────────────────────────────── */}
      <div className="border-b ">
        <div className="px-12 py-10">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
            <div>
              <p className="text-xs font-medium  uppercase tracking-widest mb-3">
                Platform Directory
              </p>
              <h1 className="text-3xl font-medium  mb-2">
                Browse all platforms
              </h1>
              <p className=" text-sm max-w-lg leading-relaxed">
                Discover, compare, and vote on the best remote work and
                freelance platforms — ranked by the community.
              </p>
            </div>

            {/* Stats */}
            <div className="flex items-center gap-10">
              {[
                { value: allPlatforms.length,    label: "Platforms" },
                { value: totalVotes.toLocaleString(),  label: "Votes cast" },
                { value: totalComments.toLocaleString(), label: "Discussions" },
              ].map((s) => (
                <div key={s.label} className="text-center">
                  <p className="text-2xl font-semibold  tabular-nums">{s.value}</p>
                  <p className="text-xs text-zinc-600 mt-0.5">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="px-12 py-8">
        <div className="flex flex-col sm:flex-row gap-3 mb-5">
          {/* Search */}
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-600 pointer-events-none" />
            <Input
              value={search}
              onChange={(e) => handleFilter(() => setSearch(e.target.value))}
              placeholder="Search by name, tag, or description..."
              className="pl-9 pr-9 h-10  rounded-lg"
            />
            {search && (
              <button
                onClick={() => handleFilter(() => setSearch(""))}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-600 hover:text-zinc-600"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          {/* Sort */}
          <div className="flex items-center gap-1 p-1 border  rounded-lg bg-white/3 shrink-0">
            {SORT_OPTIONS.map(({ value, label, icon: Icon }) => (
              <button
                key={value}
                onClick={() => handleFilter(() => setSort(value))}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-sm font-medium transition-all ${
                  sort === value
                    ? "bg-foreground text-background"
                    : "text-zinc-400  hover:text-zinc-600"
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span className="hidden md:inline">{label}</span>
              </button>
            ))}
          </div>

          {/* View toggle */}
          <div className="flex items-center gap-1 p-1 border border-white/10 rounded-lg bg-white/3 shrink-0">
            {([["grid", LayoutGrid], ["list", List]] as const).map(([v, Icon]) => (
              <button
                key={v}
                onClick={() => setView(v)}
                className={`w-8 h-8 flex items-center justify-center rounded-md transition-all ${
                  view === v ? "bg-white text-black" : "text-zinc-400 hover:text-zinc-600"
                }`}
              >
                <Icon className="w-4 h-4" />
              </button>
            ))}
          </div>
        </div>

        {/* ── Category pills + result count ────────────────────────── */}
        <div className="flex items-center gap-3 flex-wrap mb-8">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => handleFilter(() => setCategory(cat))}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
                category === cat
                  ? "bg-foreground text-background"
                  : "border border-white/10 text-zinc-400 hover:text-zinc-600 hover:border-white/25"
              }`}
            >
              {cat}
            </button>
          ))}

          {(search || category !== "All") && (
            <button
              onClick={() => handleFilter(() => { setSearch(""); setCategory("All"); })}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs text-zinc-600 hover:text-zinc-600 border border-white/10 hover:border-white/20 transition-all"
            >
              <X className="w-3 h-3" /> Clear
            </button>
          )}

          <span className="ml-auto text-sm text-zinc-600">
            {filtered.length} {filtered.length === 1 ? "platform" : "platforms"}
          </span>
        </div>

        {/* ── Results ──────────────────────────────────────────────── */}
        {filtered.length === 0 ? (
          <EmptyState onClear={() => handleFilter(() => { setSearch(""); setCategory("All"); })} />
        ) : view === "grid" ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12">
            {paginated.map((platform, i) => {
              const rank = (safePage - 1) * PAGE_SIZE + i + 1;
              return (
                <div key={platform.name} className="flex flex-col gap-2">
                  {/* Rank + tags above card */}
                  <div className="flex items-center justify-between px-0.5">
                    <span className="text-xs font-mono text-zinc-600">#{rank}</span>
                    <div className="flex gap-1">
                      {platform.tags.slice(0, 2).map((tag) => (
                        <span
                          key={tag}
                          className="text-[10px] px-2 py-0.5 rounded-full border border-white/10 text-zinc-600"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <Platforms
                    name={platform.name}
                    jobs={platform.jobs}
                    upvotes={platform.upvotes}
                    downvotes={platform.downvotes}
                    comments={platform.comments}
                    href={platform.href}
                    description={platform.description}
                  />
                </div>
              );
            })}
          </div>
        ) : (
          /* List view */
          <div className="space-y-4">
            {paginated.map((platform, i) => {
              const rank  = (safePage - 1) * PAGE_SIZE + i + 1;
              const score = platform.upvotes - platform.downvotes;
              return (
                <a
                  key={platform.name}
                  href={platform.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-white border border-zinc-200 rounded-xl hover:ring-2 hover:ring-purple-500 hover:shadow-md transition-all group"
                >
                  <span className="text-sm font-mono text-zinc-400 w-5 shrink-0">{rank}</span>

                  <div className="w-9 h-9 rounded-lg bg-zinc-100 flex items-center justify-center shrink-0">
                    <span className="text-sm font-semibold text-zinc-700">
                      {platform.name.slice(0, 2).toUpperCase()}
                    </span>
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-0.5">
                      <p className="text-sm font-semibold text-zinc-900 group-hover:text-purple-600 transition-colors truncate">
                        {platform.name}
                      </p>
                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-zinc-100 text-zinc-600 shrink-0">
                        {platform.category}
                      </span>
                    </div>
                    <p className="text-xs text-zinc-600 truncate">{platform.description}</p>
                  </div>

                  <div className="hidden sm:flex items-center gap-4 shrink-0 text-xs font-mono">
                    <span className="flex items-center gap-1 text-green-600">
                      <ThumbsUp className="w-3 h-3" />{platform.upvotes}
                    </span>
                    <span className="flex items-center gap-1 text-red-500">
                      <ThumbsDown className="w-3 h-3" />{platform.downvotes}
                    </span>
                    <span className="flex items-center gap-1 text-zinc-400">
                      <MessageCircle className="w-3 h-3" />{platform.comments}
                    </span>
                  </div>

                  <span className={`text-sm font-bold font-mono w-12 text-right shrink-0 ${score >= 0 ? "text-green-600" : "text-red-500"}`}>
                    {score > 0 ? "+" : ""}{score}
                  </span>

                  <ExternalLink className="w-3.5 h-3.5 text-zinc-300 group-hover:text-purple-500 transition-colors shrink-0" />
                </a>
              );
            })}
          </div>
        )}

        {/* ── Pagination ───────────────────────────────────────────── */}
        {totalPages > 1 && (
          <Pagination
            page={safePage}
            totalPages={totalPages}
            onPrev={() => setPage((p) => Math.max(1, p - 1))}
            onNext={() => setPage((p) => Math.min(totalPages, p + 1))}
            onPage={setPage}
          />
        )}
      </div>

      <div className="h-16" />
    </div>
  );
}

// ── Sub-components ────────────────────────────────────────────────────────────

function EmptyState({ onClear }: { onClear: () => void }) {
  return (
    <div className="flex flex-col items-center justify-center py-28 text-center">
      <div className="w-14 h-14 rounded-2xl border border-white/10 bg-white/3 flex items-center justify-center mb-5">
        <Search className="w-6 h-6 text-zinc-600" />
      </div>
      <p className="text-white font-medium mb-1">No platforms found</p>
      <p className="text-sm text-zinc-600 mb-5">Try a different search or category</p>
      <button
        onClick={onClear}
        className="px-4 py-2 rounded-lg bg-gradient-to-r from-red-500 to-pink-400 text-white text-sm font-medium hover:opacity-90 transition-opacity"
      >
        Clear filters
      </button>
    </div>
  );
}

function Pagination({
  page,
  totalPages,
  onPrev,
  onNext,
  onPage,
}: {
  page: number;
  totalPages: number;
  onPrev: () => void;
  onNext: () => void;
  onPage: (p: number) => void;
}) {
  // Build page number list with ellipsis
  const pages: (number | "…")[] = [];
  if (totalPages <= 7) {
    for (let i = 1; i <= totalPages; i++) pages.push(i);
  } else {
    pages.push(1);
    if (page > 3) pages.push("…");
    for (let i = Math.max(2, page - 1); i <= Math.min(totalPages - 1, page + 1); i++) {
      pages.push(i);
    }
    if (page < totalPages - 2) pages.push("…");
    pages.push(totalPages);
  }

  return (
    <div className="flex items-center justify-center gap-2 mt-10">
      {/* Prev */}
      <button
        onClick={onPrev}
        disabled={page === 1}
        className="flex items-center gap-1.5 px-3 py-2 rounded-lg border border-white/10 text-sm text-zinc-400 hover:text-zinc-600 hover:border-white/25 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
      >
        <ChevronLeft className="w-4 h-4" />
        <span className="hidden sm:inline">Prev</span>
      </button>

      {/* Page numbers */}
      <div className="flex items-center gap-1">
        {pages.map((p, i) =>
          p === "…" ? (
            <span key={`ellipsis-${i}`} className="w-9 text-center text-zinc-600 text-sm select-none">
              …
            </span>
          ) : (
            <button
              key={p}
              onClick={() => onPage(p as number)}
              className={`w-9 h-9 flex items-center justify-center rounded-lg text-sm font-medium transition-all ${
                page === p
                  ? "bg-white text-black"
                  : "border border-white/10 text-zinc-400 hover:text-zinc-600 hover:border-white/25"
              }`}
            >
              {p}
            </button>
          )
        )}
      </div>

      {/* Next */}
      <button
        onClick={onNext}
        disabled={page === totalPages}
        className="flex items-center gap-1.5 px-3 py-2 rounded-lg border border-white/10 text-sm text-zinc-400 hover:text-zinc-600 hover:border-white/25 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
      >
        <span className="hidden sm:inline">Next</span>
        <ChevronRight className="w-4 h-4" />
      </button>

      {/* Page info */}
      <span className="ml-2 text-xs text-zinc-600 font-mono hidden sm:block">
        {page} / {totalPages}
      </span>
    </div>
  );
}
