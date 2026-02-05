"use client";
import { Instrument_Serif } from "next/font/google";
import { useEffect, useState } from "react";
import { X, Plus } from "lucide-react";

const smallerFont = Instrument_Serif({ weight: ["400"], style: ["italic"] });

const predefinedCategories = [
  { id: "developer", label: "Developer" },
  { id: "researcher", label: "Researcher" },
  { id: "designer", label: "Designer" },
  { id: "data-analyst", label: "Data Analyst" },
  { id: "content", label: "Content Creator" },
  { id: "marketing", label: "Marketing" },
  { id: "pm", label: "Product Manager" },
  { id: "writer", label: "Technical Writer" },
];

export default function page() {
  const [name, setName] = useState("");
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [otherCategory, setOtherCategory] = useState("");
  const [description, setDescription] = useState("");
  const [jobs, setJobs] = useState("");
  const [paid, setPaid] = useState(false);
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  useEffect(() => {
    if (!successMessage) return;
    const t = setTimeout(() => setSuccessMessage(""), 3000);
    return () => clearTimeout(t);
  }, [successMessage]);

  const toggleCategory = (categoryId: string) => {
    setSelectedCategories((prev) =>
      prev.includes(categoryId)
        ? prev.filter((id) => id !== categoryId)
        : [...prev, categoryId]
    );
  };

  const addOtherCategory = () => {
    if (otherCategory.trim()) {
      const newCatId = otherCategory.toLowerCase().replace(/\s+/g, "-");
      setSelectedCategories((prev) => [...prev, newCatId]);
      setOtherCategory("");
    }
  };

  const removeCategory = (categoryId: string) => {
    setSelectedCategories((prev) => prev.filter((id) => id !== categoryId));
  };

  const getCategoryLabel = (categoryId: string) => {
    const predefined = predefinedCategories.find((c) => c.id === categoryId);
    return predefined ? predefined.label : categoryId.replace(/-/g, " ");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    if (!name.trim() || !description.trim() || selectedCategories.length === 0) {
      setError("Name, description, and at least one category are required.");
      return;
    }

    setName("");
    setSelectedCategories([]);
    setDescription("");
    setJobs("");
    setPaid(false);
    setSuccessMessage("Platform registration submitted.");
  };

  return (
    <div className="min-h-screen px-8 py-12 bg-slate-50">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-semibold my-10">Apply as a platform</h1>
        <p className=" text-slate-600 mb-6">We are building a trusted, community-driven platform that brings together the best remote work opportunities in one place. Every platform listed is carefully vetted to ensure authenticity and quality. Our focus is on transparency, fairness, and real value for professionals worldwide. By removing noise and unreliable listings, we help you make confident career choices. Join a community designed to unlock the best opportunities and help you grow.</p>

        <form onSubmit={handleSubmit} className="bg-white py-10 px-6 rounded-xl border border-slate-300 shadow-lg mb-8">
          {error && <div className="text-red-600 text-sm mb-3">{error}</div>}
          {successMessage && <div className="text-green-700 text-sm mb-3">{successMessage}</div>}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">Platform Name</label>
              <input value={name} onChange={(e) => setName(e.target.value)} className="w-full border focus:ring transition-all rounded-md px-3 py-2" placeholder="Name of the platform" />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Categories</label>
              <div className="flex flex-wrap gap-2 mb-2">
                {selectedCategories.map((catId) => (
                  <div key={catId} className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                    {getCategoryLabel(catId)}
                    <button
                      type="button"
                      onClick={() => removeCategory(catId)}
                      className="text-blue-600 hover:text-blue-900"
                    >
                      <X size={14} />
                    </button>
                  </div>
                ))}
              </div>
              <button
                type="button"
                onClick={() => setIsModalOpen(true)}
                className="px-4 py-2 border rounded-md text-sm hover:bg-slate-50"
              >
                + Add Categories
              </button>
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-medium mb-1">Description</label>
              <textarea value={description} onChange={(e) => setDescription(e.target.value)} className="w-full border rounded-md px-3 py-2" rows={3} />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Open Jobs Count</label>
              <input value={jobs} onChange={(e) => setJobs(e.target.value)} type="number" min={0} className="w-full border rounded-md px-3 py-2" />
            </div>

            <div className="flex items-center gap-3">
              <input id="paid" type="checkbox" checked={paid} onChange={(e) => setPaid(e.target.checked)} />
              <label htmlFor="paid" className="text-sm">Paid listings</label>
            </div>
          </div>

          <div className="mt-4 flex gap-2">
            <button type="submit" className="px-4 py-2 bg-background/90 border hover:bg-foreground hover:text-background transition-all delay-100 font-medium text-white rounded-md">Submit Registration</button>
            <button type="button" onClick={() => { setName(""); setSelectedCategories([]); setDescription(""); setJobs(""); setPaid(false); }} className="px-4 py-2 hover:bg-background/90 hover:text-foreground  border transition-all rounded-md">Reset</button>
          </div>
        </form>

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
                {predefinedCategories.map((category) => (
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

              <div className="border-t pt-4 mb-4">
                <label className="block text-sm font-medium mb-2">Add Custom Category</label>
                <div className="flex gap-2">
                  <input
                    value={otherCategory}
                    onChange={(e) => setOtherCategory(e.target.value)}
                    type="text"
                    placeholder="e.g., Social Media Manager"
                    className="flex-1 border rounded-md px-3 py-2 text-sm"
                  />
                  <button
                    type="button"
                    onClick={addOtherCategory}
                    className="px-3 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 flex items-center gap-1"
                  >
                    <Plus size={16} />
                  </button>
                </div>
              </div>

              <div className="flex gap-3">
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="flex-1 px-4 py-2 border bg-background text-white rounded-lg hover:bg-foreground hover:text-background transition-all font-medium"
                >
                  Done
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
