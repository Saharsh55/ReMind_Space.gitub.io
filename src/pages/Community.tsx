import React, { useState } from 'react';
import { Heart, MessageCircle, Flag, Users, Shield, ThumbsUp } from 'lucide-react';

interface CommunityPost {
  id: string;
  content: string;
  mood: string;
  timestamp: Date;
  reactions: number;
  comments: Comment[];
  isSupported: boolean;
}

interface Comment {
  id: string;
  content: string;
  timestamp: Date;
  reactions: number;
  isHelpful: boolean;
}

const Community: React.FC = () => {
  const [posts, setPosts] = useState<CommunityPost[]>([
    {
      id: '1',
      content: "Today marks 30 days of consistent meditation practice. It's been challenging but I'm starting to notice small improvements in my anxiety levels.",
      mood: '🧘',
      timestamp: new Date('2025-01-10T14:30:00'),
      reactions: 24,
      comments: [
        {
          id: '1-1',
          content: "That's amazing progress! Meditation has been a game-changer for me too. Keep it up! 🌟",
          timestamp: new Date('2025-01-10T15:00:00'),
          reactions: 8,
          isHelpful: true,
        },
        {
          id: '1-2',
          content: "30 days is such an accomplishment! What type of meditation do you practice?",
          timestamp: new Date('2025-01-10T15:30:00'),
          reactions: 5,
          isHelpful: false,
        },
      ],
      isSupported: true,
    },
    {
      id: '2',
      content: "Having a really tough day with depression. Everything feels overwhelming and I can't seem to get out of bed. Just need some encouragement.",
      mood: '😔',
      timestamp: new Date('2025-01-10T12:15:00'),
      reactions: 18,
      comments: [
        {
          id: '2-1',
          content: "Sending you love and strength. Depression lies to us - you ARE worthy and this feeling will pass. Take it one moment at a time. 💙",
          timestamp: new Date('2025-01-10T12:45:00'),
          reactions: 12,
          isHelpful: true,
        },
        {
          id: '2-2',
          content: "I see you and I hear you. You're not alone in this. Even sharing here took courage. That's a strength to hold onto.",
          timestamp: new Date('2025-01-10T13:00:00'),
          reactions: 9,
          isHelpful: true,
        },
        {
          id: '2-3',
          content: "Bad days don't last, but resilient people do. You've gotten through 100% of your worst days so far. 🌈",
          timestamp: new Date('2025-01-10T13:30:00'),
          reactions: 15,
          isHelpful: true,
        },
      ],
      isSupported: true,
    },
    {
      id: '3',
      content: "Started therapy last week and it's bringing up a lot of emotions. Feeling hopeful but also scared about the journey ahead.",
      mood: '🌱',
      timestamp: new Date('2025-01-10T10:45:00'),
      reactions: 16,
      comments: [
        {
          id: '3-1',
          content: "Therapy can feel overwhelming at first, but you're taking such a brave step. The fact that you're feeling emotions means you're processing - that's growth! 🌟",
          timestamp: new Date('2025-01-10T11:15:00'),
          reactions: 7,
          isHelpful: true,
        },
      ],
      isSupported: true,
    },
  ]);

  const [selectedPost, setSelectedPost] = useState<string | null>(null);

  const formatTimeAgo = (date: Date) => {
    const now = new Date();
    const diffInMinutes = Math.floor((now.getTime() - date.getTime()) / (1000 * 60));
    
    if (diffInMinutes < 60) return `${diffInMinutes}m ago`;
    if (diffInMinutes < 1440) return `${Math.floor(diffInMinutes / 60)}h ago`;
    return `${Math.floor(diffInMinutes / 1440)}d ago`;
  };

  const handleReaction = (postId: string, commentId?: string) => {
    setPosts(posts.map(post => {
      if (post.id === postId) {
        if (commentId) {
          return {
            ...post,
            comments: post.comments.map(comment =>
              comment.id === commentId
                ? { ...comment, reactions: comment.reactions + 1 }
                : comment
            ),
          };
        } else {
          return { ...post, reactions: post.reactions + 1 };
        }
      }
      return post;
    }));
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Supportive Community</h1>
        <p className="text-gray-600">Connect with others and share supportive responses in a safe space</p>
      </div>

      {/* Community Guidelines Banner */}
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-6 mb-8 border border-purple-100">
        <div className="flex items-start space-x-3">
          <Shield className="h-6 w-6 text-purple-600 mt-1" />
          <div>
            <h3 className="font-semibold text-gray-800 mb-2">Community Guidelines</h3>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Show empathy and kindness in all interactions</li>
              <li>• Respect everyone's journey and experiences</li>
              <li>• No judgment, criticism, or unsolicited advice</li>
              <li>• Focus on support, validation, and encouragement</li>
              <li>• Report any content that violates our safe space policy</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4 mb-8">
        <div className="bg-white rounded-xl p-4 shadow-md border border-purple-100 text-center">
          <Users className="h-6 w-6 text-purple-600 mx-auto mb-2" />
          <p className="text-2xl font-bold text-gray-800">1,234</p>
          <p className="text-sm text-gray-600">Community Members</p>
        </div>
        <div className="bg-white rounded-xl p-4 shadow-md border border-purple-100 text-center">
          <Heart className="h-6 w-6 text-red-500 mx-auto mb-2" />
          <p className="text-2xl font-bold text-gray-800">5,678</p>
          <p className="text-sm text-gray-600">Support Reactions</p>
        </div>
        <div className="bg-white rounded-xl p-4 shadow-md border border-purple-100 text-center">
          <MessageCircle className="h-6 w-6 text-blue-500 mx-auto mb-2" />
          <p className="text-2xl font-bold text-gray-800">2,345</p>
          <p className="text-sm text-gray-600">Supportive Comments</p>
        </div>
      </div>

      {/* Posts */}
      <div className="space-y-6">
        {posts.map((post) => (
          <div key={post.id} className="bg-white rounded-2xl p-6 shadow-lg border border-purple-100">
            {/* Post Header */}
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-start space-x-3">
                <div className="text-2xl">{post.mood}</div>
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-2">
                    <span className="font-medium text-gray-800">Anonymous</span>
                    <span className="text-sm text-gray-500">•</span>
                    <span className="text-sm text-gray-500">{formatTimeAgo(post.timestamp)}</span>
                    {post.isSupported && (
                      <span className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full">
                        Supported
                      </span>
                    )}
                  </div>
                </div>
              </div>
              <button className="text-gray-400 hover:text-gray-600">
                <Flag className="h-4 w-4" />
              </button>
            </div>

            {/* Post Content */}
            <p className="text-gray-800 leading-relaxed mb-4">{post.content}</p>

            {/* Post Actions */}
            <div className="flex items-center space-x-6 mb-4">
              <button
                onClick={() => handleReaction(post.id)}
                className="flex items-center space-x-2 text-gray-500 hover:text-red-500 transition-colors duration-200"
              >
                <Heart className="h-5 w-5" />
                <span>{post.reactions}</span>
                <span className="text-sm">Support</span>
              </button>
              <button
                onClick={() => setSelectedPost(selectedPost === post.id ? null : post.id)}
                className="flex items-center space-x-2 text-gray-500 hover:text-blue-500 transition-colors duration-200"
              >
                <MessageCircle className="h-5 w-5" />
                <span>{post.comments.length}</span>
                <span className="text-sm">Comments</span>
              </button>
            </div>

            {/* Comments Section */}
            {selectedPost === post.id && (
              <div className="border-t border-gray-100 pt-4">
                <div className="space-y-4">
                  {post.comments.map((comment) => (
                    <div key={comment.id} className="bg-gray-50 rounded-xl p-4">
                      <div className="flex items-start justify-between mb-2">
                        <div className="flex items-center space-x-2">
                          <span className="font-medium text-gray-800 text-sm">Anonymous</span>
                          <span className="text-xs text-gray-500">•</span>
                          <span className="text-xs text-gray-500">{formatTimeAgo(comment.timestamp)}</span>
                          {comment.isHelpful && (
                            <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full flex items-center space-x-1">
                              <ThumbsUp className="h-3 w-3" />
                              <span>Helpful</span>
                            </span>
                          )}
                        </div>
                      </div>
                      <p className="text-gray-700 text-sm leading-relaxed mb-3">{comment.content}</p>
                      <button
                        onClick={() => handleReaction(post.id, comment.id)}
                        className="flex items-center space-x-1 text-xs text-gray-500 hover:text-red-500 transition-colors duration-200"
                      >
                        <Heart className="h-3 w-3" />
                        <span>{comment.reactions}</span>
                      </button>
                    </div>
                  ))}
                </div>

                {/* Add Comment */}
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <textarea
                    placeholder="Share some words of support and encouragement..."
                    className="w-full p-3 border border-gray-200 rounded-xl resize-none focus:ring-2 focus:ring-purple-300 focus:border-transparent text-sm"
                    rows={3}
                  />
                  <div className="flex justify-end mt-2">
                    <button className="px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full text-sm font-medium hover:from-purple-700 hover:to-blue-700 transition-all duration-200">
                      Send Support
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Support Resources */}
      <div className="mt-12 bg-gradient-to-r from-purple-100 to-blue-100 rounded-2xl p-6 border border-purple-100">
        <div className="text-center">
          <h3 className="text-xl font-semibold text-gray-800 mb-3">Need More Support?</h3>
          <p className="text-gray-600 mb-4">
            Remember, our community is here for peer support, but professional help is always available when you need it.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button className="px-6 py-3 bg-white text-purple-600 rounded-full font-medium hover:bg-purple-50 transition-all duration-200 shadow-md hover:shadow-lg">
              Crisis Resources
            </button>
            <button className="px-6 py-3 bg-purple-600 text-white rounded-full font-medium hover:bg-purple-700 transition-all duration-200 shadow-md hover:shadow-lg">
              Find a Therapist
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Community;