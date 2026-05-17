"use client";

import { useState } from "react";
import { Navbar } from "@/components/navbar";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { platformsHomePage, testimonials } from "@/lib/utils";
import {
  ThumbsUp,
  ThumbsDown,
  MessageCircle,
  TrendingUp,
  Clock,
  Flame,
  Star,
  ChevronDown,
  ChevronUp,
  Send,
  Hash,
  Users,
  Award,
  ArrowUp,
  Bookmark,
  Share2,
  Flag,
  MoreHorizontal,
  Zap,
} from "lucide-react";

// ─── Static seed data ─────────────────────────────────────────

const POSTS = [
  {
    id: 1,
    author: "alexdev",
    karma: 2340,
    platform: "Upwork",
    timeAgo: "4h ago",
    content:
      "I've been on Upwork for 5 years now and it genuinely changed my life. The key is building your reputation early — take lower-paying jobs first, deliver exceptional work, and the rates compound. Now I charge $150/hr and barely compete for jobs anymore. Happy to answer questions.",
    upvotes: 218,
    downvotes: 7,
    comments: 43,
    isPinned: false,
    userVote: null as "up" | "down" | null,
    replies: [
      {
        id: 11,
        author: "sarahdesigns",
        karma: 1560,
        timeAgo: "3h ago",
        content:
          "This is exactly the playbook. I did the same in design. First 6 months rough, then the flywheel kicks in.",
        upvotes: 67,
        downvotes: 1,
        userVote: null as "up" | "down" | null,
      },
      {
        id: 12,
        author: "mikefreelance",
        karma: 890,
        timeAgo: "2h ago",
        content:
          "What niche did you start in? Backend, frontend? That choice matters a lot early on.",
        upvotes: 34,
        downvotes: 0,
        userVote: null as "up" | "down" | null,
      },
    ],
  },
  {
    id: 2,
    author: "priyatech",
    karma: 3100,
    platform: "Toptal",
    timeAgo: "7h ago",
    content:
      "Toptal's interview process took me 3 weeks and 4 rounds, but it was worth every minute. I doubled my income within 6 months. The client quality is night and day compared to other platforms — no low-ballers, no scope creep, no chasing invoices.",
    upvotes: 341,
    downvotes: 12,
    comments: 89,
    isPinned: true,
    userVote: null as "up" | "down" | null,
    replies: [
      {
        id: 21,
        author: "alexdev",
        karma: 2340,
        timeAgo: "6h ago",
        content:
          "Confirmed. I'm also on Toptal. The pre-screening means you only see serious clients.",
        upvotes: 89,
        downvotes: 2,
        userVote: null as "up" | "down" | null,
      },
    ],
  },
  {
    id: 3,
    author: "sarahdesigns",
    karma: 1560,
    platform: "Fiverr",
    timeAgo: "12h ago",
    content:
      "Fiverr works amazing for design work if you package your services as products. I built an $8k/month income selling brand identity packages. The thumbnail is everything — spend 2 hours on it. Your conversion rate depends almost entirely on that first impression.",
    upvotes: 156,
    downvotes: 8,
    comments: 31,
    isPinned: false,
    userVote: null as "up" | "down" | null,
    replies: [],
  },
  {
    id: 4,
    author: "mikefreelance",
    karma: 890,
    platform: "We Work Remotely",
    timeAgo: "1d ago",
    content:
      "Applied to 47 jobs on WWR over 3 months. Got 6 interviews, 2 offers. The ratio is brutal but the quality of companies is genuinely high — these are real remote-first teams, not office jobs pretending to be remote.",
    upvotes: 98,
    downvotes: 4,
    comments: 22,
    isPinned: false,
    userVote: null as "up" | "down" | null,
    replies: [
      {
        id: 41,
        author: "priyatech",
        karma: 3100,
        timeAgo: "20h ago",
        content: "47 apps in 3 months is actually below average for senior roles. Good result ratio.",
        upvotes: 41,
        downvotes: 1,
        userVote: null as "up" | "down" | null,
      },
    ],
  },
  {
    id: 5,
    author: "devnomad",
    karma: 420,
    platform: "Freelancer.com",
    timeAgo: "2d ago",
    content:
      "Hot take: Freelancer.com is underrated for beginners. Yes, there are low-ball offers. But the volume is insane and it's the fastest way to build a portfolio when you have zero reviews anywhere else. I got my first 10 reviews there before moving to Upwork.",
    upvotes: 74,
    downvotes: 22,
    comments: 19,
    isPinned: false,
    userVote: null as "up" | "down" | null,
    replies: [],
  },
];

const TOP_CONTRIBUTORS = [
  { username: "priyatech", karma: 3100, comments: 89 },
  { username: "alexdev", karma: 2340, comments: 67 },
  { username: "sarahdesigns", karma: 1560, comments: 45 },
  { username: "mikefreelance", karma: 890, comments: 31 },
  { username: "devnomad", karma: 420, comments: 19 },
];

const TRENDING_TAGS = [
  "#upwork-tips",
  "#toptal-review",
  "#fiverr",
  "#remote-work",
  "#freelancing",
  "#portfolio",
  "#rates",
  "#interviews",
];

const SORT_TABS = [
  { value: "hot", label: "Hot", icon: Flame },
  { value: "new", label: "New", icon: Clock },
  { value: "top", label: "Top", icon: TrendingUp },
];

// ─── Helper ───────────────────────────────────────────────────

function getUserColor(username: string) {
  const colors = [
    "#6366f1", "#8b5cf6", "#ec4899", "#ef4444",
    "#f97316", "#eab308", "#22c55e", "#14b8a6", "#3b82f6",
  ];
  let hash = 0;
  for (let i = 0; i < username.length; i++) hash = username.charCodeAt(i) + ((hash << 5) - hash);
  return colors[Math.abs(hash) % colors.length];
}

// ─── Sub-components ───────────────────────────────────────────

function Reply({
  reply,
}: {
  reply: (typeof POSTS)[0]["replies"][0];
}) {
  const [vote, setVote] = useState<"up" | "down" | null>(null);
  const [ups, setUps] = useState(reply.upvotes);
  const [downs, setDowns] = useState(reply.downvotes);

  function handleVote(type: "up" | "down") {
    if (vote === type) { vote === "up" ? setUps(u => u - 1) : setDowns(d => d - 1); setVote(null); return; }
    if (vote === "up") setUps(u => u - 1);
    if (vote === "down") setDowns(d => d - 1);
    type === "up" ? setUps(u => u + 1) : setDowns(d => d + 1);
    setVote(type);
  }

  return (
    <div className="flex gap-3 pl-4 border-l border-border mt-4">
      <Avatar className="h-6 w-6 shrink-0 mt-0.5">
        <AvatarFallback
          className="text-[10px] font-bold text-white"
          style={{ background: getUserColor(reply.author) }}
        >
          {reply.author.slice(0, 2).toUpperCase()}
        </AvatarFallback>
      </Avatar>

      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 mb-1.5 flex-wrap">
          <span className="text-sm font-medium text-foreground">@{reply.author}</span>
          <span className="flex items-center gap-0.5 text-[10px] text-muted-foreground">
            <Zap className="w-2.5 h-2.5" />{reply.karma}
          </span>
          <span className="text-xs text-muted-foreground">{reply.timeAgo}</span>
        </div>
        <p className="text-sm text-muted-foreground leading-relaxed mb-2">{reply.content}</p>
        <div className="flex items-center gap-1">
          <button
            onClick={() => handleVote("up")}
            className={`flex items-center gap-1 px-2 py-1 rounded-md text-xs transition-all ${
              vote === "up" ? "text-green-600 bg-green-600/10" : "text-muted-foreground hover:text-green-600 hover:bg-green-600/8"
            }`}
          >
            <ThumbsUp className="w-3 h-3" />{ups}
          </button>
          <button
            onClick={() => handleVote("down")}
            className={`flex items-center gap-1 px-2 py-1 rounded-md text-xs transition-all ${
              vote === "down" ? "text-red-500 bg-red-500/10" : "text-muted-foreground hover:text-red-500 hover:bg-red-500/8"
            }`}
          >
            <ThumbsDown className="w-3 h-3" />{downs}
          </button>
        </div>
      </div>
    </div>
  );
}

function PostCard({ post }: { post: (typeof POSTS)[0] }) {
  const [vote, setVote] = useState<"up" | "down" | null>(null);
  const [ups, setUps] = useState(post.upvotes);
  const [downs, setDowns] = useState(post.downvotes);
  const [expanded, setExpanded] = useState(false);
  const [showReply, setShowReply] = useState(false);
  const [replyText, setReplyText] = useState("");
  const score = ups - downs;

  function handleVote(type: "up" | "down") {
    if (vote === type) { vote === "up" ? setUps(u => u - 1) : setDowns(d => d - 1); setVote(null); return; }
    if (vote === "up") setUps(u => u - 1);
    if (vote === "down") setDowns(d => d - 1);
    type === "up" ? setUps(u => u + 1) : setDowns(d => d + 1);
    setVote(type);
  }

  return (
    <div className={`bg-background border rounded-xl p-5 transition-all hover:shadow-md ${
      post.isPinned ? "border-purple-500/40 hover:ring hover:ring-purple-500" : "border-border hover:ring hover:ring-purple-500"
    }`}>
      {/* Pinned badge */}
      {post.isPinned && (
        <div className="flex items-center gap-1.5 mb-3">
          <Star className="w-3 h-3 text-purple-500" />
          <span className="text-[10px] font-semibold text-purple-500 uppercase tracking-wider">
            Pinned · Top discussion
          </span>
        </div>
      )}

      {/* Author row */}
      <div className="flex items-center justify-between gap-3 mb-3">
        <div className="flex items-center gap-2.5">
          <Avatar className="h-8 w-8 shrink-0">
            <AvatarFallback
              className="text-xs font-bold text-white"
              style={{ background: getUserColor(post.author) }}
            >
              {post.author.slice(0, 2).toUpperCase()}
            </AvatarFallback>
          </Avatar>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium text-foreground">@{post.author}</span>
              <span className="flex items-center gap-0.5 text-[10px] text-muted-foreground font-mono">
                <Zap className="w-2.5 h-2.5" />{post.karma.toLocaleString()}
              </span>
            </div>
            <div className="flex items-center gap-1.5 mt-0.5">
              <span className="text-xs text-muted-foreground">{post.timeAgo}</span>
              <span className="text-muted-foreground text-xs">·</span>
              <span className="text-xs font-medium text-purple-500/80">
                {post.platform}
              </span>
            </div>
          </div>
        </div>

        <button className="w-7 h-7 flex items-center justify-center rounded-lg hover:bg-muted text-muted-foreground hover:text-foreground transition-colors">
          <MoreHorizontal className="w-4 h-4" />
        </button>
      </div>

      {/* Content */}
      <p className="text-sm text-foreground/80 leading-relaxed mb-4">
        {post.content}
      </p>

      {/* Action bar */}
      <div className="flex items-center gap-1 border-t border-border pt-3">
        {/* Upvote */}
        <button
          onClick={() => handleVote("up")}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${
            vote === "up"
              ? "bg-green-600/12 text-green-600 border border-green-600/20"
              : "text-muted-foreground hover:text-green-600 hover:bg-green-600/8"
          }`}
        >
          <ThumbsUp className="w-3.5 h-3.5" />
          <span>{ups}</span>
        </button>

        {/* Score */}
        <span className={`text-xs font-bold font-mono px-1 ${
          score > 0 ? "text-green-600" : score < 0 ? "text-red-500" : "text-muted-foreground"
        }`}>
          {score > 0 ? "+" : ""}{score}
        </span>

        {/* Downvote */}
        <button
          onClick={() => handleVote("down")}
          className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-sm font-medium transition-all ${
            vote === "down"
              ? "bg-red-500/12 text-red-500 border border-red-500/20"
              : "text-muted-foreground hover:text-red-500 hover:bg-red-500/8"
          }`}
        >
          <ThumbsDown className="w-3.5 h-3.5" />
        </button>

        {/* Comments */}
        <button
          onClick={() => setExpanded(!expanded)}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm text-muted-foreground hover:text-blue-500 hover:bg-blue-500/8 transition-all"
        >
          <MessageCircle className="w-3.5 h-3.5" />
          <span>{post.comments}</span>
        </button>

        <div className="ml-auto flex items-center gap-1">
          <button className="w-7 h-7 flex items-center justify-center rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted transition-colors">
            <Bookmark className="w-3.5 h-3.5" />
          </button>
          <button className="w-7 h-7 flex items-center justify-center rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted transition-colors">
            <Share2 className="w-3.5 h-3.5" />
          </button>
          <button className="w-7 h-7 flex items-center justify-center rounded-lg text-muted-foreground hover:text-red-500 hover:bg-red-500/8 transition-colors">
            <Flag className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Replies */}
      {expanded && (
        <div className="mt-4 pt-4 border-t border-border space-y-0">
          {post.replies.map((reply) => (
            <Reply key={reply.id} reply={reply} />
          ))}

          {/* Reply composer */}
          <div className="mt-4 pl-4 border-l border-border">
            {showReply ? (
              <div className="space-y-2">
                <textarea
                  value={replyText}
                  onChange={(e) => setReplyText(e.target.value)}
                  placeholder="Write a reply..."
                  rows={3}
                  className="w-full px-3 py-2.5 bg-muted border border-border rounded-lg text-sm text-foreground placeholder:text-muted-foreground resize-none focus:outline-none focus:border-purple-500/40 transition-colors"
                />
                <div className="flex gap-2">
                  <Button
                    size="sm"
                    className="bg-linear-to-r from-red-500 to-pink-400 rounded-md text-xs h-8 gap-1.5"
                    onClick={() => { setReplyText(""); setShowReply(false); }}
                  >
                    <Send className="w-3 h-3" />Reply
                  </Button>
                  <Button
                    size="sm"
                    variant="ghost"
                    className="text-xs h-8 rounded-md"
                    onClick={() => setShowReply(false)}
                  >
                    Cancel
                  </Button>
                </div>
              </div>
            ) : (
              <button
                onClick={() => setShowReply(true)}
                className="text-xs text-muted-foreground hover:text-foreground transition-colors py-2"
              >
                + Add a reply
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────

export default function CommunityPage() {
  const [sort, setSort] = useState("hot");
  const [newPost, setNewPost] = useState("");
  const [showComposer, setShowComposer] = useState(false);

  const sorted = [...POSTS].sort((a, b) => {
    if (sort === "hot") return (b.upvotes + b.comments) - (a.upvotes + a.comments);
    if (sort === "new") return b.id - a.id;
    return (b.upvotes - b.downvotes) - (a.upvotes - a.downvotes);
  });

  const totalKarma = TOP_CONTRIBUTORS.reduce((s, u) => s + u.karma, 0);

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      {/* Page header */}
      <div className="border-b border-white/8">
        <div className="max-w-7xl mx-auto px-6 py-10">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <p className="text-xs font-medium text-muted-foreground uppercase tracking-widest mb-3">
                Community
              </p>
              <h1 className="text-3xl font-medium text-white mb-2">
                Discussions
              </h1>
              <p className="text-muted-foreground text-sm max-w-md leading-relaxed">
                Real experiences from freelancers and remote workers. Upvote what's helpful,
                share what you know.
              </p>
            </div>
            <div className="flex items-center gap-8">
              {[
                { value: POSTS.length, label: "Posts" },
                { value: POSTS.reduce((s, p) => s + p.comments, 0), label: "Replies" },
                { value: TOP_CONTRIBUTORS.length, label: "Contributors" },
              ].map((stat, i) => (
                <div key={i} className="text-center">
                  <p className="text-2xl font-semibold text-white">{stat.value}</p>
                  <p className="text-xs text-muted-foreground mt-0.5">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-8">

          {/* Main feed */}
          <div className="min-w-0 space-y-4">
            {/* Composer CTA */}
            <button
              onClick={() => setShowComposer(!showComposer)}
              className="w-full flex items-center gap-3 p-4 bg-background border border-border rounded-xl hover:ring hover:ring-purple-500 hover:shadow-md transition-all text-left group"
            >
              <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center shrink-0">
                <span className="text-xs text-muted-foreground font-medium">?</span>
              </div>
              <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors flex-1">
                Share your experience with a remote platform...
              </span>
              <div className="shrink-0 px-3 py-1.5 rounded-md text-xs font-medium bg-linear-to-r from-red-500 to-pink-400 text-white">
                Post
              </div>
            </button>

            {showComposer && (
              <div className="bg-background border border-border rounded-xl p-5">
                <textarea
                  value={newPost}
                  onChange={(e) => setNewPost(e.target.value)}
                  placeholder="Share your honest experience — what platform are you reviewing? What worked, what didn't?"
                  rows={5}
                  className="w-full px-0 py-1 bg-transparent text-sm text-foreground placeholder:text-muted-foreground resize-none focus:outline-none border-b border-border mb-4"
                />
                <div className="flex items-center justify-between">
                  <span className="text-xs text-muted-foreground font-mono">{newPost.length}/5000</span>
                  <div className="flex gap-2">
                    <Button size="sm" variant="ghost" className="rounded-md text-xs" onClick={() => setShowComposer(false)}>
                      Cancel
                    </Button>
                    <Button size="sm" className="bg-linear-to-r from-red-500 to-pink-400 rounded-md text-xs gap-1.5">
                      <Send className="w-3 h-3" /> Post discussion
                    </Button>
                  </div>
                </div>
              </div>
            )}

            {/* Sort tabs */}
            <div className="flex items-center gap-1 p-1 border border-white/10 rounded-lg bg-white/3 w-fit">
              {SORT_TABS.map((tab) => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.value}
                    onClick={() => setSort(tab.value)}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-sm font-medium transition-all ${
                      sort === tab.value
                        ? "bg-white text-black"
                        : "text-muted-foreground hover:text-white"
                    }`}
                  >
                    <Icon className="w-3.5 h-3.5" />
                    {tab.label}
                  </button>
                );
              })}
            </div>

            {/* Posts */}
            {sorted.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>

          {/* Sidebar */}
          <aside className="space-y-5 lg:sticky lg:top-6 lg:self-start">

            {/* Community rules */}
            <div className="bg-background border border-border rounded-xl overflow-hidden">
              <div className="px-4 py-3 border-b border-border">
                <h3 className="text-sm font-medium text-foreground">Community Guidelines</h3>
              </div>
              <div className="px-4 py-3 space-y-2.5">
                {[
                  "Be honest — real experiences only",
                  "No paid promotions or fake reviews",
                  "Respect others' experiences",
                  "Stay on topic — remote & freelance platforms",
                  "Flag misinformation, don't spread it",
                ].map((rule, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <span className="text-xs font-mono text-muted-foreground mt-0.5 shrink-0">{i + 1}.</span>
                    <p className="text-xs text-muted-foreground leading-relaxed">{rule}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Top contributors */}
            <div className="bg-background border border-border rounded-xl overflow-hidden">
              <div className="flex items-center justify-between px-4 py-3 border-b border-border">
                <h3 className="text-sm font-medium text-foreground flex items-center gap-1.5">
                  <Award className="w-3.5 h-3.5 text-purple-500" />
                  Top Contributors
                </h3>
                <span className="text-[10px] text-muted-foreground">This week</span>
              </div>
              <div className="divide-y divide-border">
                {TOP_CONTRIBUTORS.map((user, i) => (
                  <div key={user.username} className="flex items-center gap-3 px-4 py-3 hover:bg-muted/30 transition-colors cursor-pointer group">
                    <span className="text-xs font-mono text-muted-foreground w-4">
                      {i + 1}
                    </span>
                    <Avatar className="h-7 w-7 shrink-0">
                      <AvatarFallback
                        className="text-[10px] font-bold text-white"
                        style={{ background: getUserColor(user.username) }}
                      >
                        {user.username.slice(0, 2).toUpperCase()}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-medium text-foreground group-hover:text-purple-600 transition-colors truncate">
                        @{user.username}
                      </p>
                      <p className="text-[10px] text-muted-foreground font-mono">
                        {user.karma.toLocaleString()} karma
                      </p>
                    </div>
                    <div className="flex items-center gap-0.5 text-[10px] text-muted-foreground">
                      <MessageCircle className="w-3 h-3" />
                      <span>{user.comments}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Trending tags */}
            <div className="bg-background border border-border rounded-xl overflow-hidden">
              <div className="px-4 py-3 border-b border-border">
                <h3 className="text-sm font-medium text-foreground flex items-center gap-1.5">
                  <Hash className="w-3.5 h-3.5 text-purple-500" />
                  Trending Topics
                </h3>
              </div>
              <div className="px-4 py-3 flex flex-wrap gap-2">
                {TRENDING_TAGS.map((tag) => (
                  <button
                    key={tag}
                    className="text-xs px-3 py-1.5 rounded-full border border-border text-muted-foreground hover:text-purple-600 hover:border-purple-500/40 transition-all"
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>

            {/* Quick stats */}
            <div className="bg-background border border-border rounded-xl overflow-hidden">
              <div className="px-4 py-3 border-b border-border">
                <h3 className="text-sm font-medium text-foreground flex items-center gap-1.5">
                  <Users className="w-3.5 h-3.5 text-purple-500" />
                  Community Stats
                </h3>
              </div>
              <div className="divide-y divide-border">
                {[
                  { label: "Active members", value: "2,841" },
                  { label: "Posts this week", value: "143" },
                  { label: "Total karma", value: totalKarma.toLocaleString() },
                  { label: "Platforms reviewed", value: platformsHomePage.length.toString() },
                ].map((stat) => (
                  <div key={stat.label} className="flex items-center justify-between px-4 py-2.5">
                    <span className="text-xs text-muted-foreground">{stat.label}</span>
                    <span className="text-xs font-semibold text-foreground font-mono">{stat.value}</span>
                  </div>
                ))}
              </div>
            </div>

          </aside>
        </div>
      </div>

      {/* Footer spacer */}
      <div className="h-16" />
    </div>
  );
}
