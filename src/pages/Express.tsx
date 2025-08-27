import React, { useState } from 'react';
import { Send, Heart, MessageCircle, Users } from 'lucide-react';

interface Post {
  id: string;
  content: string;
  mood: string;
  timestamp: Date;
  reactions: number;
  comments: number;
}

const Express: React.FC = () => {
  const [newPost, setNewPost] = useState('');
  const [selectedMood, setSelectedMood] = useState('');
  const [posts, setPosts] = useState<Post[]>([
    {
      id: '1',
      content: "Feeling overwhelmed with work today, but trying to remember that it's okay to take breaks.",
      mood: '😔',
      timestamp: new Date('2025-01-10T14:30:00'),
      reactions: 12,
      comments: 3,
    },
    {
      id: '2',
      content: "Had a really good therapy session today. Starting to see some patterns in my thinking.",
      mood: '🌱',
      timestamp: new Date('2025-01-10T12:15:00'),
      reactions: 8,
      comments: 2,
    },
    {
      id: '3',
      content: "Anxiety is hitting hard today, but I'm practicing my breathing exercises.",
      mood: '😰',
      timestamp: new Date('2025-01-10T10:45:00'),
      reactions: 15,
      comments: 5,
    },
  ]);

  const moods = [
    { emoji: '😊', label: 'Happy' },
    { emoji: '😔', label: 'Sad' },
    { emoji: '😰', label: 'Anxious' },
    { emoji: '😡', label: 'Angry' },
    { emoji: '🌱', label: 'Hopeful' },
    { emoji: '😴', label: 'Tired' },
    { emoji: '🤗', label: 'Grateful' },
    { emoji: '😕', label: 'Confused' },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newPost.trim()) return;

    const post: Post = {
      id: Date.now().toString(),
      content: newPost,
      mood: selectedMood,
      timestamp: new Date(),
      reactions: 0,
      comments: 0,
    };

    setPosts([post, ...posts]);
    setNewPost('');
    setSelectedMood('');
  };

  const formatTimeAgo = (date: Date) => {
    const now = new Date();
    const diffInMinutes = Math.floor((now.getTime() - date.getTime()) / (1000 * 60));
    
    if (diffInMinutes < 60) return `${diffInMinutes}m ago`;
    if (diffInMinutes < 1440) return `${Math.floor(diffInMinutes / 60)}h ago`;
    return `${Math.floor(diffInMinutes / 1440)}d ago`;
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Express Yourself</h1>
        <p className="text-gray-600">Share your thoughts and emotions in a safe, anonymous space</p>
      </div>

      {/* Post Creation Form */}
      <div className="bg-white rounded-2xl p-6 shadow-lg mb-8 border border-purple-100">
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              How are you feeling today?
            </label>
            <div className="flex flex-wrap gap-2 mb-4">
              {moods.map((mood) => (
                <button
                  key={mood.label}
                  type="button"
                  onClick={() => setSelectedMood(mood.emoji)}
                  className={`px-4 py-2 rounded-full border transition-all duration-200 flex items-center space-x-2 ${
                    selectedMood === mood.emoji
                      ? 'bg-purple-100 border-purple-300 text-purple-700'
                      : 'bg-gray-50 border-gray-200 text-gray-600 hover:bg-purple-50 hover:border-purple-200'
                  }`}
                >
                  <span>{mood.emoji}</span>
                  <span className="text-sm">{mood.label}</span>
                </button>
              ))}
            </div>
          </div>
          
          <textarea
            value={newPost}
            onChange={(e) => setNewPost(e.target.value)}
            placeholder="Share what's on your mind... Remember, this is a safe space."
            className="w-full h-32 p-4 border border-gray-200 rounded-xl resize-none focus:ring-2 focus:ring-purple-300 focus:border-transparent"
          />
          
          <div className="flex justify-between items-center mt-4">
            <p className="text-sm text-gray-500">
              Your post will be shared anonymously
            </p>
            <button
              type="submit"
              disabled={!newPost.trim()}
              className="px-6 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full font-medium hover:from-purple-700 hover:to-blue-700 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-2"
            >
              <Send className="h-4 w-4" />
              <span>Share</span>
            </button>
          </div>
        </form>
      </div>

      {/* Posts Feed */}
      <div className="space-y-6">
        {posts.map((post) => (
          <div key={post.id} className="bg-white rounded-2xl p-6 shadow-lg border border-purple-100 hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-start space-x-3">
              <div className="text-2xl">{post.mood}</div>
              <div className="flex-1">
                <p className="text-gray-800 leading-relaxed mb-4">{post.content}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 text-gray-500">
                    <button className="flex items-center space-x-1 hover:text-red-500 transition-colors duration-200">
                      <Heart className="h-4 w-4" />
                      <span>{post.reactions}</span>
                    </button>
                    <button className="flex items-center space-x-1 hover:text-blue-500 transition-colors duration-200">
                      <MessageCircle className="h-4 w-4" />
                      <span>{post.comments}</span>
                    </button>
                  </div>
                  <span className="text-sm text-gray-400">
                    {formatTimeAgo(post.timestamp)}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Community Guidelines */}
      <div className="mt-12 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-6 border border-purple-100">
        <div className="flex items-start space-x-3">
          <Users className="h-6 w-6 text-purple-600 mt-1" />
          <div>
            <h3 className="font-semibold text-gray-800 mb-2">Community Guidelines</h3>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Be kind and supportive to others</li>
              <li>• Respect everyone's experiences and feelings</li>
              <li>• No judgment or negative comments</li>
              <li>• Keep personal information private</li>
              <li>• If you're in crisis, please seek immediate help</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Express;