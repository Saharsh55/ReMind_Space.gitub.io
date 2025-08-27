import React, { useState } from 'react';
import { Send, Bot, User, Heart, Lightbulb } from 'lucide-react';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'ai';
  timestamp: Date;
}

const AICompanion: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hello! I'm here to provide you with a safe, non-judgmental space to share your thoughts and feelings. How are you doing today?",
      sender: 'ai',
      timestamp: new Date(),
    },
  ]);
  const [inputMessage, setInputMessage] = useState('');

  const aiResponses = [
    "I hear you, and your feelings are completely valid. It takes courage to share what you're going through.",
    "Thank you for trusting me with your thoughts. Remember, it's okay to not be okay sometimes.",
    "That sounds really challenging. You're showing strength by reaching out and talking about it.",
    "I'm here with you. Take a deep breath - you're not alone in this journey.",
    "Your awareness of your feelings shows great emotional intelligence. That's something to be proud of.",
    "It's completely normal to feel this way. Many people experience similar emotions, and seeking support is a positive step.",
    "I can sense that you're going through a difficult time. Remember, healing isn't linear, and every small step matters.",
    "Thank you for sharing that with me. Your willingness to be open about your struggles shows incredible bravery.",
  ];

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputMessage.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputMessage,
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');

    // Simulate AI response after a short delay
    setTimeout(() => {
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: aiResponses[Math.floor(Math.random() * aiResponses.length)],
        sender: 'ai',
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, aiResponse]);
    }, 1000);
  };

  const suggestedQuestions = [
    "I'm feeling anxious today",
    "I'm struggling with motivation",
    "I had a difficult day at work",
    "I'm feeling overwhelmed",
    "I need some encouragement",
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">AI Companion</h1>
        <p className="text-gray-600">A safe space to share your thoughts with empathetic, non-judgmental support</p>
      </div>

      <div className="bg-white rounded-2xl shadow-lg border border-purple-100 h-[600px] flex flex-col">
        {/* Chat Header */}
        <div className="flex items-center space-x-3 p-6 border-b border-purple-100">
          <div className="p-2 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full">
            <Bot className="h-6 w-6 text-white" />
          </div>
          <div>
            <h3 className="font-semibold text-gray-800">Mindful AI</h3>
            <p className="text-sm text-green-600">Available 24/7</p>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div className={`flex items-start space-x-3 max-w-xs lg:max-w-md ${message.sender === 'user' ? 'flex-row-reverse space-x-reverse' : ''}`}>
                <div className={`p-2 rounded-full ${message.sender === 'user' ? 'bg-purple-100' : 'bg-blue-100'}`}>
                  {message.sender === 'user' ? (
                    <User className="h-4 w-4 text-purple-600" />
                  ) : (
                    <Bot className="h-4 w-4 text-blue-600" />
                  )}
                </div>
                <div
                  className={`p-4 rounded-2xl ${
                    message.sender === 'user'
                      ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white'
                      : 'bg-gray-100 text-gray-800'
                  }`}
                >
                  <p className="text-sm leading-relaxed">{message.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Input Area */}
        <div className="border-t border-purple-100 p-6">
          <form onSubmit={handleSendMessage} className="flex space-x-4">
            <input
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              placeholder="Share what's on your mind..."
              className="flex-1 p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-300 focus:border-transparent"
            />
            <button
              type="submit"
              disabled={!inputMessage.trim()}
              className="px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-xl hover:from-purple-700 hover:to-blue-700 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-2"
            >
              <Send className="h-4 w-4" />
            </button>
          </form>
        </div>
      </div>

      {/* Suggested Questions */}
      <div className="mt-8">
        <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center space-x-2">
          <Lightbulb className="h-5 w-5 text-purple-600" />
          <span>Not sure what to share? Try these:</span>
        </h3>
        <div className="flex flex-wrap gap-3">
          {suggestedQuestions.map((question, index) => (
            <button
              key={index}
              onClick={() => setInputMessage(question)}
              className="px-4 py-2 bg-purple-50 text-purple-700 rounded-full text-sm hover:bg-purple-100 transition-colors duration-200 border border-purple-200"
            >
              {question}
            </button>
          ))}
        </div>
      </div>

      {/* Disclaimer */}
      <div className="mt-8 bg-amber-50 border-l-4 border-amber-400 p-6 rounded-r-xl">
        <div className="flex items-start space-x-3">
          <Heart className="h-6 w-6 text-amber-600 mt-1" />
          <div>
            <h4 className="font-semibold text-amber-800 mb-2">Important Note</h4>
            <p className="text-amber-700 text-sm">
              While our AI companion provides empathetic support, it's not a replacement for professional mental health care. 
              If you're experiencing a crisis or having thoughts of self-harm, please reach out to a mental health professional 
              or call 988 for immediate support.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AICompanion;