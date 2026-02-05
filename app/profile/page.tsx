"use client";
import { useState, useEffect, useRef } from "react";
import { Heart, Upload } from "lucide-react";
import PlatformNames from "@/components/platformNames";
import { Instrument_Serif } from "next/font/google";

interface SavedPlatform {
  id: number;
  name: string;
  description: string;
  likes: number;
  dislikes: number;
  comments: number;
}

// Mock user data
const userData = {
  username: "alex_remote",
  name: "Alex Johnson",
  avatar: "/star.jpeg",
  bio: "Full-stack developer | Remote work enthusiast | Open to opportunities",
  joinedDate: "2024-01-15",
};

// Mock saved platforms
const savedPlatforms: SavedPlatform[] = [
  {
    id: 1,
    name: "Turing",
    description: "AI-powered talent cloud for developers.",
    likes: 124,
    dislikes: 10,
    comments: 20,
  },
  {
    id: 2,
    name: "Toptal",
    description: "Curated network of top freelancers.",
    likes: 76,
    dislikes: 5,
    comments: 15,
  },
  {
    id: 3,
    name: "We Work Remotely",
    description: "Remote work job listings.",
    likes: 130,
    dislikes: 14,
    comments: 42,
  },
  {
    id: 4,
    name: "FlexJobs",
    description: "Curated remote & flexible jobs.",
    likes: 88,
    dislikes: 9,
    comments: 21,
  },
  {
    id: 5,
    name: "Gun.io",
    description: "Marketplace for freelance developers.",
    likes: 34,
    dislikes: 2,
    comments: 5,
  },
];

const smallerFont = Instrument_Serif({ weight: ["400"], style: ["italic"] });

export default function page() {
  const [formattedDate, setFormattedDate] = useState<string>("");
  const [avatar, setAvatar] = useState<string>(userData.avatar);
  const [isUploading, setIsUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const date = new Date(userData.joinedDate);
    setFormattedDate(
      date.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    );
  }, []);

  const handleAvatarUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setIsUploading(true);
      const reader = new FileReader();
      reader.onload = (event) => {
        const result = event.target?.result as string;
        setAvatar(result);
        setIsUploading(false);
      };
      reader.readAsDataURL(file);
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="bg-background selection:text-background selection:bg-foreground text-foreground py-16 px-4 md:px-32">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-start md:items-end gap-8">

            <div className="shrink-0 relative group">
              <img
                src={avatar}
                alt={userData.name}
                className="w-40 h-40 rounded-2xl border-4 border-white shadow-lg object-cover"
              />
              <button
                onClick={triggerFileInput}
                disabled={isUploading}
                className="absolute inset-0 rounded-2xl bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center cursor-pointer disabled:cursor-not-allowed"
              >
                <div className="text-white flex flex-col items-center gap-2">
                  <Upload size={24} />
                  <span className="text-sm font-medium">
                    {isUploading ? "Uploading..." : "Change"}
                  </span>
                </div>
              </button>
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleAvatarUpload}
                className="hidden"
              />
            </div>

            <div className="flex-1">
              <p className="text-gray-400 text-sm font-medium mb-2">
                @{userData.username}
              </p>
              <h1 className="text-4xl md:text-3xl font-semibold mb-3">
                {userData.name}
              </h1>
              <p className="text-gray-200 text-lg mb-4 max-w-2xl">
                {userData.bio}
              </p>
              <p className="text-gray-400 text-sm">
                Joined {formattedDate || "Loading..."}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-foreground text-background selection:bg-background selection:text-foreground px-4 md:px-32 py-16">
        <div className="max-w-6xl mx-auto">

          <div className="mb-12">
            <div className="flex items-center gap-3 mb-2">
              <h2 className="text-3xl md:text-4xl text-black">
                Your 
                <span className={`${smallerFont.className} font-bold mx-2`}> saved </span>
                platforms
              </h2>
            </div>
            <p className="text-gray-600 text-lg">
              These are the  remote job platforms you're interested in and Keep track of the remote job platforms you’re most interested in, all in one place. Quickly revisit, compare, and explore opportunities without searching again. Your personalized shortlist for finding the right remote work, faster.
            </p>
          </div>

          {savedPlatforms.length > 0 ? (
            <div className="grid grid-cols-1 gap-6">
              {savedPlatforms.map((platform) => (
                <PlatformNames
                  key={platform.id}
                  name={platform.name}
                  description={platform.description}
                  likes={platform.likes}
                  dislikes={platform.dislikes}
                  comments={platform.comments}
                  href={`/platforms/${platform.id}`}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <Heart size={48} className="mx-auto text-gray-300 mb-4" />
              <p className="text-gray-600 text-lg">No saved platforms yet</p>
              <p className="text-gray-500 mt-2">
                Start exploring and save your favorite platforms
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
