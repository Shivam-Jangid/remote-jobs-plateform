"use client";
import PlatformNames from "@/components/platformNames";
import { Instrument_Serif } from "next/font/google";
import { useState, useRef } from "react";
import { X, Filter, ChevronLeft, ChevronRight } from "lucide-react";

const smallerFont = Instrument_Serif({ weight: ["400"], style: ["italic"] });

const categories = [
  { id: "developer", label: "Developer" },
  { id: "researcher", label: "Researcher" },
  { id: "designer", label: "Designer" },
  { id: "data-analyst", label: "Data Analyst" },
  { id: "content", label: "Content Creator" },
  { id: "marketing", label: "Marketing" },
  { id: "pm", label: "Product Manager" },
  { id: "writer", label: "Technical Writer" },
];

const platformData = [
  { id: 1, name: "Turing", description: "AI-powered talent cloud for developers.", categories: ["developer"], likes:124, dislikes:10, comments:20 },
  { id: 2, name: "Upwork", description: "Large marketplace for freelancers.", categories: ["developer", "designer", "content"], likes:98, dislikes:12, comments:34 },
  { id: 3, name: "Toptal", description: "Curated network of top freelancers.", categories: ["developer", "designer"], likes:76, dislikes:5, comments:15 },
  { id: 4, name: "Fiverr", description: "Gig-based freelance marketplace.", categories: ["designer", "content", "marketing"], likes:210, dislikes:20, comments:60 },
  { id: 5, name: "Remote.co", description: "Remote job board across industries.", categories: ["developer", "data-analyst"], likes:45, dislikes:3, comments:8 },
  { id: 6, name: "We Work Remotely", description: "Remote work job listings.", categories: ["developer", "designer", "marketing"], likes:130, dislikes:14, comments:42 },
  { id: 7, name: "FlexJobs", description: "Curated remote & flexible jobs.", categories: ["developer", "researcher", "content"], likes:88, dislikes:9, comments:21 },
  { id: 8, name: "Gun.io", description: "Marketplace for freelance developers.", categories: ["developer"], likes:34, dislikes:2, comments:5 },
  { id: 9, name: "Freelancer.com", description: "Global freelance platform.", categories: ["designer", "content", "writer"], likes:56, dislikes:6, comments:12 },
  { id: 10, name: "PeoplePerHour", description: "Freelance marketplace for small projects.", categories: ["developer", "designer", "marketing"], likes:22, dislikes:1, comments:4 },
  { id: 11, name: "Guru", description: "Freelance hiring platform.", categories: ["developer", "pm", "content"], likes:18, dislikes:2, comments:3 },
  { id: 12, name: "Jooble", description: "Job aggregator for remote roles.", categories: ["researcher", "data-analyst", "writer"], likes:12, dislikes:0, comments:2 },
  { id: 13, name: "FlexJobs+", description: "Premium remote job listings.", categories: ["developer", "designer"], likes:9, dislikes:1, comments:1 },
  { id: 14, name: "Arc.dev", description: "Remote developer community.", categories: ["developer"], likes:44, dislikes:5, comments:7 },
  { id: 15, name: "X-Team", description: "Developer teams for hire.", categories: ["developer", "designer"], likes:31, dislikes:2, comments:6 },
  { id: 16, name: "Remote Ok", description: "Remote job board.", categories: ["developer", "marketing", "pm"], likes:28, dislikes:3, comments:9 },
  { id: 17, name: "Working Nomads", description: "Remote job curator.", categories: ["developer", "content", "researcher"], likes:16, dislikes:2, comments:4 },
  { id: 18, name: "YunoJuno", description: "Freelance talent network.", categories: ["designer", "developer", "marketing"], likes:14, dislikes:1, comments:2 },
  { id: 19, name: "Hubstaff Talent", description: "Free resource for remote workers.", categories: ["developer", "designer"], likes:11, dislikes:0, comments:1 },
  { id: 20, name: "Dribbble", description: "Designer portfolio & freelance hub.", categories: ["designer"], likes:67, dislikes:5, comments:10 },
  { id: 21, name: "Behance", description: "Creative portfolio platform.", categories: ["designer", "content"], likes:42, dislikes:3, comments:8 },
  { id: 22, name: "AngelList", description: "Startup jobs and hiring.", categories: ["developer", "pm", "data-analyst"], likes:90, dislikes:7, comments:20 },
  { id: 23, name: "LinkedIn", description: "Professional network with jobs.", categories: ["developer", "designer", "marketing", "pm"], likes:400, dislikes:40, comments:120 },
  { id: 24, name: "Stack Overflow", description: "Dev-focused job listings.", categories: ["developer"], likes:210, dislikes:18, comments:50 },
  { id: 25, name: "GitHub Jobs", description: "Jobs for developers.", categories: ["developer"], likes:55, dislikes:6, comments:11 },
  { id: 26, name: "Honeypot", description: "Developer jobs marketplace.", categories: ["developer"], likes:34, dislikes:3, comments:6 },
  { id: 27, name: "Authentic Jobs", description: "Jobs for creatives & developers.", categories: ["designer", "content"], likes:20, dislikes:2, comments:4 },
  { id: 28, name: "Behance Freelance", description: "Designer freelance listings.", categories: ["designer"], likes:8, dislikes:0, comments:1 },
  { id: 29, name: "Indeed", description: "General job board with remote filters.", categories: ["developer", "designer", "marketing", "researcher"], likes:310, dislikes:30, comments:80 },
  { id: 30, name: "AngelList Talent", description: "Startup hiring platform.", categories: ["developer", "pm"], likes:18, dislikes:2, comments:3 },
  { id: 31, name: "RemoteOK", description: "Remote developer & tech jobs.", categories: ["developer", "designer", "content"], likes:48, dislikes:4, comments:9 },
  { id: 32, name: "We Work Remotely+", description: "Expanded remote job listings.", categories: ["developer", "designer"], likes:27, dislikes:1, comments:5 },
  { id: 33, name: "Cloudstaff", description: "Outsourcing & remote staff.", categories: ["developer"], likes:6, dislikes:0, comments:0 },
  { id: 34, name: "Truelancer", description: "Freelance marketplace.", categories: ["developer", "designer", "content"], likes:13, dislikes:1, comments:2 },
  { id: 35, name: "Agile Talent", description: "On-demand developer talent.", categories: ["developer", "pm"], likes:9, dislikes:0, comments:1 },
  { id: 36, name: "Bonsai", description: "Freelancer tools & marketplace.", categories: ["designer", "content", "writer"], likes:7, dislikes:0, comments:1 },
  { id: 37, name: "Articulate Talent", description: "Learning & content experts.", categories: ["content", "writer", "researcher"], likes:4, dislikes:0, comments:0 },
  { id: 38, name: "Crew", description: "Creative & dev freelance marketplace.", categories: ["designer", "developer"], likes:12, dislikes:1, comments:2 },
  { id: 39, name: "Topcoder", description: "Competitions & freelance gigs.", categories: ["developer", "designer"], likes:17, dislikes:2, comments:3 },
  { id: 40, name: "HackerRank", description: "Dev hiring and challenges.", categories: ["developer"], likes:25, dislikes:2, comments:4 },
  { id: 41, name: "LeetCode Jobs", description: "Developer job board.", categories: ["developer", "data-analyst"], likes:11, dislikes:0, comments:1 },
  { id: 42, name: "CodeSignal", description: "Assessment-driven hiring.", categories: ["developer"], likes:8, dislikes:0, comments:0 },
];

export default function page() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [scrollPosition, setScrollPosition] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const PLATFORMS_PER_PAGE = 12;

  const toggleCategory = (categoryId: string) => {
    setSelectedCategories((prev) =>
      prev.includes(categoryId)
        ? prev.filter((id) => id !== categoryId)
        : [...prev, categoryId]
    );
    setCurrentPage(1); 
  };

  const clearFilters = () => {
    setSelectedCategories([]);
    setSearchQuery("");
    setCurrentPage(1);
  };

  const handleScroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 400;
      const newPosition =
        direction === "left"
          ? Math.max(0, scrollPosition - scrollAmount)
          : scrollPosition + scrollAmount;

      scrollContainerRef.current.scrollTo({
        left: newPosition,
        behavior: "smooth",
      });
      setScrollPosition(newPosition);
    }
  };

  const filteredPlatforms = platformData.filter((platform) => {
    const matchesSearch = platform.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());

    const matchesCategory =
      selectedCategories.length === 0 ||
      platform.categories.some((cat) => selectedCategories.includes(cat));

    return matchesSearch && matchesCategory;
  });

  const totalPages = Math.ceil(filteredPlatforms.length / PLATFORMS_PER_PAGE);
  const startIndex = (currentPage - 1) * PLATFORMS_PER_PAGE;
  const paginatedPlatforms = filteredPlatforms.slice(
    startIndex,
    startIndex + PLATFORMS_PER_PAGE
  );

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const getSelectedCategoryLabels = () => {
    return categories
      .filter((cat) => selectedCategories.includes(cat.id))
      .map((cat) => cat.label);
  };

  return (
    <div className="min-h-screen bg-linear-to-b from-slate-50/80 to-slate-100 py-20 pl-32">
      <div className="text-center">
        <div className="text-center flex items-center justify-center w-full h-full text-5xl">
          <span>Find the</span>
          <span className={`${smallerFont.className} mx-4`}>platform</span>
          <span>for your niche</span>
        </div>
        <div className="max-w-5xl mx-auto mt-10 text-lg">
          Find top-tier remote AI roles tailored to your expertise, curated from
          high-quality platforms worldwide. Discover opportunities beyond the
          usual marketplaces, focused on impactful and cutting-edge work.
          Available exclusively on Recmo.
        </div>
      </div>

      <div className="px-12 mt-10">
        <input
          type="text" 
          placeholder="Search platforms"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="bg-white w-full p-4 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
        />
      </div>

      <div className="px-12 mt-8 flex items-center justify-between flex-wrap gap-4">
        <div className="flex items-center gap-3 flex-wrap">
          <button
            onClick={() => setIsModalOpen(true)}
            className="px-4 py-2 border bg-background text-foreground hover:bg-foreground hover:text-background rounded-xl font-medium transition-all flex items-center gap-2"
          >
            <Filter size={18} />
            Categories
            {selectedCategories.length > 0 && (
              <span className="ml-1 bg-foreground/80 text-background rounded-full px-2 py-0.5 text-sm">
                {selectedCategories.length}
              </span>
            )}
          </button>
          {categories.slice(0, 4).map((category) => (
            <button
              key={category.id}
              onClick={() => toggleCategory(category.id)}
              className={`px-4 py-2 rounded-lg text-sm transition-all ${
                selectedCategories.includes(category.id)
                  ? "bg-slate-900  text-white shadow-lg"
                  : "border hover:bg-slate-100"
              }`}
            >
              {category.label}
            </button>
          ))}

          {selectedCategories.length > 0 && (
            <button
              onClick={clearFilters}
              className="text-sm text-slate-600 hover:text-slate-900 flex items-center gap-1 px-3 py-2 hover:bg-slate-100 rounded-lg transition-all"
            >
              <X size={16} />
              Clear
            </button>
          )}
        </div>

        <p className="text-slate-600 text-sm">
          Showing {filteredPlatforms.length} platform{filteredPlatforms.length !== 1 ? "s" : ""}
        </p>
      </div>

      {selectedCategories.length > 0 && (
        <div className="px-12 mt-3 flex flex-wrap gap-2">
          {getSelectedCategoryLabels().map((label) => (
            <span key={label} className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
              {label}
            </span>
          ))}
          <p className="text-slate-600 text-sm ml-2">
            Showing {paginatedPlatforms.length} of {filteredPlatforms.length} platform{filteredPlatforms.length !== 1 ? "s" : ""}
          </p>
        </div>
      )}

      <div className="flex flex-col lg:grid grid-cols-3 px-12 py-10 gap-10 min-h-96">
        {paginatedPlatforms.length > 0 ? (
          paginatedPlatforms.map((platform) => (
            <div key={platform.id}>
              <PlatformNames
                name={platform.name}
                description={platform.description}
                likes={platform.likes}
                dislikes={platform.dislikes}
                comments={platform.comments}
                href={`/platforms/${platform.name.toLowerCase().replace(/\s+/g, "-")}`}
              />
            </div>
          ))
        ) : (
          <div className="col-span-3 text-center py-12">
            <p className="text-xl text-slate-500">
              No platforms found matching your filters.
            </p>
          </div>
        )}
      </div>


      {totalPages > 1 && (
        <div className="flex items-center justify-center gap-2 py-8 mt-8 px-12 border-t border-slate-200">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="px-4 py-2 border border-slate-300 rounded-lg hover:bg-slate-100 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
          >
            Previous
          </button>

          <div className="flex gap-1">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => handlePageChange(page)}
                className={`py-2 px-4 rounded-lg font-medium transition-all ${
                  currentPage === page
                    ? "bg-background text-foreground shadow-lg"
                    : "border border-slate-300 text-slate-700 hover:bg-slate-100"
                }`}
              >
                {page}
              </button>
            ))}
          </div>

          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="px-4 py-2 border border-slate-300 rounded-lg hover:bg-slate-100 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
          >
            Next
          </button>
        </div>
      )}

      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-8 max-w-md w-full mx-4 max-h-96 overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold">Select Categories</h2>
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-slate-500 hover:text-slate-700"
              >
                <X size={24} />
              </button>
            </div>

            <div className="space-y-3 mb-6">
              {categories.map((category) => (
                <label
                  key={category.id}
                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-100 cursor-pointer transition-all"
                >
                  <input
                    type="checkbox"
                    checked={selectedCategories.includes(category.id)}
                    onChange={() => toggleCategory(category.id)}
                    className="w-5 h-5 text-blue-600 rounded cursor-pointer"
                  />
                  <span className="text-lg font-medium text-slate-800">{category.label}</span>
                </label>
              ))}
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => setIsModalOpen(false)}
                className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all font-medium"
              >
                Apply Filters
              </button>
              {selectedCategories.length > 0 && (
                <button
                  onClick={clearFilters}
                  className="px-4 py-2 border border-slate-300 text-slate-700 rounded-lg hover:bg-slate-50 transition-all"
                >
                  Clear
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
