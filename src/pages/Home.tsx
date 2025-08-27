import React from 'react';
import { MessageSquare, BookOpen, Heart, Users, Bot, Library, ArrowRight } from 'lucide-react';
import { Page } from '../App';

interface HomeProps {
  onNavigate: (page: Page) => void;
}

const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  const features = [
    {
      id: 'express',
      title: 'Express Yourself',
      description: 'Share your thoughts and emotions anonymously in a safe space',
      icon: MessageSquare,
      color: 'from-blue-400 to-blue-600',
      bgColor: 'bg-blue-50',
    },
    {
      id: 'journal',
      title: 'Personal Journal',
      description: 'Track your moods and reflect on your mental wellness journey',
      icon: BookOpen,
      color: 'from-purple-400 to-purple-600',
      bgColor: 'bg-purple-50',
    },
    {
      id: 'resources',
      title: 'Wellness Resources',
      description: 'Access helpful articles, coping strategies, and motivational content',
      icon: Library,
      color: 'from-emerald-400 to-emerald-600',
      bgColor: 'bg-emerald-50',
    },
    {
      id: 'ai',
      title: 'AI Companion',
      description: 'Chat with our empathetic AI for immediate support and guidance',
      icon: Bot,
      color: 'from-amber-400 to-amber-600',
      bgColor: 'bg-amber-50',
    },
    {
      id: 'community',
      title: 'Supportive Community',
      description: 'Connect with others and share supportive responses',
      icon: Users,
      color: 'from-pink-400 to-pink-600',
      bgColor: 'bg-pink-50',
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <div className="flex justify-center mb-6">
          <div className="p-4 bg-gradient-to-br from-purple-100 to-blue-100 rounded-full">
            <Heart className="h-16 w-16 text-purple-600" />
          </div>
        </div>
        <h1 className="text-5xl font-bold text-gray-800 mb-6">
          Welcome to Your
          <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent block">
            Digital Safe Space
          </span>
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
          ReMind Space is here to support your mental wellness journey. Express yourself freely, 
          connect with others, and access the tools you need for emotional well-being.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => onNavigate('express')}
            className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
          >
            <MessageSquare className="h-5 w-5" />
            <span>Share Your Thoughts</span>
            <ArrowRight className="h-5 w-5" />
          </button>
          <button
            onClick={() => onNavigate('journal')}
            className="px-8 py-4 bg-white text-purple-600 border-2 border-purple-200 rounded-full font-semibold hover:bg-purple-50 hover:border-purple-300 transition-all duration-200 flex items-center justify-center space-x-2"
          >
            <BookOpen className="h-5 w-5" />
            <span>Start Journaling</span>
          </button>
        </div>
      </div>

      {/* Features Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature) => {
          const Icon = feature.icon;
          return (
            <div
              key={feature.id}
              onClick={() => onNavigate(feature.id as Page)}
              className={`${feature.bgColor} p-8 rounded-2xl cursor-pointer transition-all duration-300 hover:shadow-xl hover:scale-105 border border-white/50`}
            >
              <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${feature.color} text-white mb-6`}>
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                {feature.description}
              </p>
              <div className="flex items-center text-purple-600 font-medium">
                <span>Explore</span>
                <ArrowRight className="h-4 w-4 ml-1" />
              </div>
            </div>
          );
        })}
      </div>

      {/* Bottom CTA */}
      <div className="text-center mt-16 p-8 bg-gradient-to-r from-purple-100 to-blue-100 rounded-2xl">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          You're not alone in this journey
        </h2>
        <p className="text-gray-600 mb-6">
          Take the first step towards better mental wellness today
        </p>
        <button
          onClick={() => onNavigate('community')}
          className="px-6 py-3 bg-white text-purple-600 rounded-full font-medium hover:bg-purple-50 transition-all duration-200 shadow-md hover:shadow-lg"
        >
          Join Our Community
        </button>
      </div>
    </div>
  );
};

export default Home;