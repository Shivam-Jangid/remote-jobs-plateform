'use client';

import { useParams } from "next/navigation";
import { useState } from "react";
import { ThumbsUp, Send } from "lucide-react";

interface Comment {
  id: string;
  author: string;
  content: string;
  likes: number;
  likedBy: Set<string>;
  timestamp: Date;
}

const platform = {
  title: "Turing",
  upvotes: 200,
  downvotes: 10,
  description:
    'Turing is a Palo Alto-based AI-powered "talent cloud" company founded in 2018 by Jonathan Siddharth and Vijay Krishnan, valued at $2.2B. It helps companies instantly hire, vet, and manage remote software developers and AI professionals, connecting them with top U.S. and global jobs.',
  comments: 44,
};

export default function Page() {
  const params = useParams();
  const platformId = params.platformId;
  
  const [comments, setComments] = useState<Comment[]>([
    {
      id: "1",
      author: "Alice Johnson",
      content: "Great platform! Very easy to find quality developers.",
      likes: 5,
      likedBy: new Set(),
      timestamp: new Date(Date.now() - 86400000),
    },
    {
      id: "2",
      author: "Bob Smith",
      content: "The vetting process is thorough and efficient.",
      likes: 3,
      likedBy: new Set(),
      timestamp: new Date(Date.now() - 3600000),
    },
  ]);

  const [commentInput, setCommentInput] = useState("");
  const [currentUser] = useState("User_" + Math.random().toString(36).substr(2, 9));

  const handleAddComment = () => {
    if (commentInput.trim() === "") return;

    const newComment: Comment = {
      id: Date.now().toString(),
      author: currentUser,
      content: commentInput,
      likes: 0,
      likedBy: new Set(),
      timestamp: new Date(),
    };

    setComments([newComment, ...comments]);
    setCommentInput("");
  };

  const handleLikeComment = (commentId: string) => {
    setComments(
      comments.map((comment) => {
        if (comment.id === commentId) {
          const newLikedBy = new Set(comment.likedBy);
          if (newLikedBy.has(currentUser)) {
            newLikedBy.delete(currentUser);
            return { ...comment, likes: comment.likes - 1, likedBy: newLikedBy };
          } else {
            newLikedBy.add(currentUser);
            return { ...comment, likes: comment.likes + 1, likedBy: newLikedBy };
          }
        }
        return comment;
      })
    );
  };

  const formatTime = (date: Date) => {
    const now = new Date();
    const diffMs = now.getTime() - date.getTime();
    const diffMins = Math.floor(diffMs / 60000);
    const diffHours = Math.floor(diffMs / 3600000);
    const diffDays = Math.floor(diffMs / 86400000);

    if (diffMins < 1) return "just now";
    if (diffMins < 60) return `${diffMins}m ago`;
    if (diffHours < 24) return `${diffHours}h ago`;
    return `${diffDays}d ago`;
  };

  return (
    <div className="flex flex-col min-h-screen w-full bg-linear-to-b from-slate-50 to-white">
      <div className="flex-1 max-w-3xl mx-auto w-full px-6 py-12">
        <div className="mb-12">
          <h1 className="text-5xl font-semibold tracking-tight text-slate-900 mb-4">
            {platform.title}
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed">
            {platform.description}
          </p>
          <div className="flex gap-6 mt-6 text-sm">
            <span className="text-slate-600">
              <span className="font-semibold text-green-600">{platform.upvotes}</span> upvotes
            </span>
            <span className="text-slate-600">
              <span className="font-semibold text-red-600">{platform.downvotes}</span> downvotes
            </span>
          </div>
        </div>

        <div className="mb-8 pb-6 border-b border-slate-200">
          <h2 className="text-2xl font-bold text-slate-900 mb-2">
            Comments ({comments.length})
          </h2>
          <p className="text-slate-600">Share your thoughts about {platform.title}</p>
        </div>

        {/* Comments List */}
        <div className="space-y-4 mb-8">
          {comments.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-slate-500 text-lg">No comments yet. Be the first to comment!</p>
            </div>
          ) : (
            comments.map((comment) => (
              <div
                key={comment.id}
                className="p-5 bg-white rounded-lg border border-slate-200 hover:border-slate-300 transition-colors shadow-sm hover:shadow-md"
              >
                {/* Comment Header */}
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <h3 className="font-semibold text-slate-900">{comment.author}</h3>
                    <p className="text-xs text-slate-500">{formatTime(comment.timestamp)}</p>
                  </div>
                </div>

                <p className="text-slate-700 leading-relaxed mb-4">{comment.content}</p>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handleLikeComment(comment.id)}
                    className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-all ${
                      comment.likedBy.has(currentUser)
                        ? "bg-blue-100 text-blue-600 hover:bg-blue-200"
                        : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                    }`}
                  >
                    <ThumbsUp
                      size={16}
                      fill={comment.likedBy.has(currentUser) ? "currentColor" : "none"}
                    />
                    <span className="font-medium">{comment.likes}</span>
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      {/* Comment Input at Bottom - Above Footer */}
      <div className="bg-white border-t border-slate-200 shadow-lg">
        <div className="max-w-3xl mx-auto w-full px-6 py-4">
          <div className="flex gap-3">
            <textarea
              value={commentInput}
              onChange={(e) => setCommentInput(e.target.value)}
              onKeyPress={(e) => {
                if (e.key === "Enter" && e.ctrlKey) {
                  handleAddComment();
                }
              }}
              placeholder="Share your thoughts... (Press Ctrl+Enter to submit)"
              className="flex-1 p-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
              rows={3}
            />
          </div>
          <div className="flex justify-end mt-3">
            <button
              onClick={handleAddComment}
              disabled={commentInput.trim() === ""}
              className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-slate-300 disabled:cursor-not-allowed transition-colors"
            >
              <Send size={18} />
              Post Comment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
