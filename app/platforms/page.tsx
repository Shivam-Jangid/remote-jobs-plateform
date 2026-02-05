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
  { id: 1, name: "Turing", categories: ["developer"] },
  { id: 2, name: "Upwork", categories: ["developer", "designer", "content"] },
  { id: 3, name: "Toptal", categories: ["developer", "designer"] },
  { id: 4, name: "Fiverr", categories: ["designer", "content", "marketing"] },
  { id: 5, name: "Remote.co", categories: ["developer", "data-analyst"] },
  { id: 6, name: "We Work Remotely", categories: ["developer", "designer", "marketing"] },
  { id: 7, name: "FlexJobs", categories: ["developer", "researcher", "content"] },
  { id: 8, name: "Gun.io", categories: ["developer"] },
  { id: 9, name: "Freelancer.com", categories: ["designer", "content", "writer"] },
  { id: 10, name: "PeoplePerHour", categories: ["developer", "designer", "marketing"] },
  { id: 11, name: "Guru", categories: ["developer", "pm", "content"] },
  { id: 12, name: "Jooble", categories: ["researcher", "data-analyst", "writer"] },
  { id: 13, name: "FlexJobs+", categories: ["developer", "designer"] },
  { id: 14, name: "Arc.dev", categories: ["developer"] },
  { id: 15, name: "X-Team", categories: ["developer", "designer"] },
  { id: 16, name: "Remote Ok", categories: ["developer", "marketing", "pm"] },
  { id: 17, name: "Working Nomads", categories: ["developer", "content", "researcher"] },
  { id: 18, name: "YunoJuno", categories: ["designer", "developer", "marketing"] },
  { id: 19, name: "Hubstaff Talent", categories: ["developer", "designer"] },
  { id: 20, name: "Dribbble", categories: ["designer"] },
  { id: 21, name: "Behance", categories: ["designer", "content"] },
  { id: 22, name: "AngelList", categories: ["developer", "pm", "data-analyst"] },
  { id: 23, name: "LinkedIn", categories: ["developer", "designer", "marketing", "pm"] },
  { id: 24, name: "Stack Overflow", categories: ["developer"] },
  { id: 25, name: "GitHub Jobs", categories: ["developer"] },
  { id: 26, name: "Honeypot", categories: ["developer"] },
  { id: 27, name: "Authentic Jobs", categories: ["designer", "content"] },
  { id: 28, name: "Behance Freelance", categories: ["designer"] },
  { id: 29, name: "Indeed", categories: ["developer", "designer", "marketing", "researcher"] },
  { id: 30, name: "AngelList Talent", categories: ["developer", "pm"] },
  { id: 31, name: "RemoteOK", categories: ["developer", "designer", "content"] },
  { id: 32, name: "We Work Remotely+", categories: ["developer", "designer"] },
  { id: 33, name: "Cloudstaff", categories: ["developer"] },
  { id: 34, name: "Truelancer", categories: ["developer", "designer", "content"] },
  { id: 35, name: "Agile Talent", categories: ["developer", "pm"] },
  { id: 36, name: "Bonsai", categories: ["designer", "content", "writer"] },
  { id: 37, name: "Articulate Talent", categories: ["content", "writer", "researcher"] },
  { id: 38, name: "Crew", categories: ["designer", "developer"] },
  { id: 39, name: "Topcoder", categories: ["developer", "designer"] },
  { id: 40, name: "HackerRank", categories: ["developer"] },
  { id: 41, name: "LeetCode Jobs", categories: ["developer", "data-analyst"] },
  { id: 42, name: "CodeSignal", categories: ["developer"] },
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
    setCurrentPage(1); // Reset to first page when filters change
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

  // Calculate pagination
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
    <div className="min-h-screen py-20 pl-32">
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

      {/* Desktop Grid View (hidden on small screens) */}
      <div className="hidden lg:grid grid-cols-3 px-12 py-10 gap-10 min-h-96">
        {paginatedPlatforms.length > 0 ? (
          paginatedPlatforms.map((platform) => (
            <div key={platform.id}>
              <PlatformNames />
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

      {/* Mobile/Tablet Horizontal Slider (visible on smaller screens) */}
      <div className="lg:hidden px-6 py-10 min-h-96">
        {filteredPlatforms.length > 0 ? (
          <div className="relative">
            {/* Scroll Container */}
            <div
              ref={scrollContainerRef}
              className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-4 scroll-smooth"
              style={{
                scrollBehavior: "smooth",
                WebkitOverflowScrolling: "touch",
              }}
            >
              {filteredPlatforms.map((platform) => (
                <div key={platform.id} className="flex-shrink-0 w-72 snap-start">
                  <PlatformNames />
                </div>
              ))}
            </div>

            {/* Slider Controls */}
            {filteredPlatforms.length > 0 && (
              <div className="flex gap-2 justify-center mt-6">
                <button
                  onClick={() => handleScroll("left")}
                  className="p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all"
                >
                  <ChevronLeft size={24} />
                </button>
                <button
                  onClick={() => handleScroll("right")}
                  className="p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all"
                >
                  <ChevronRight size={24} />
                </button>
              </div>
            )}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-xl text-slate-500">
              No platforms found matching your filters.
            </p>
          </div>
        )}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex items-center justify-center gap-2 py-8 mt-8 px-12 border-t border-slate-200">
          {/* Previous Button */}
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="px-4 py-2 border border-slate-300 rounded-lg hover:bg-slate-100 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
          >
            Previous
          </button>

          {/* Page Numbers */}
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

          {/* Next Button */}
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="px-4 py-2 border border-slate-300 rounded-lg hover:bg-slate-100 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
          >
            Next
          </button>
        </div>
      )}

      {/* Category Modal */}
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
