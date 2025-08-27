import React, { useState } from 'react';
import { Calendar, Plus, BookOpen, TrendingUp, Smile, Frown, Meh } from 'lucide-react';

interface JournalEntry {
  id: string;
  date: Date;
  mood: number; // 1-5 scale
  title: string;
  content: string;
  tags: string[];
}

const Journal: React.FC = () => {
  const [entries, setEntries] = useState<JournalEntry[]>([
    {
      id: '1',
      date: new Date('2025-01-10'),
      mood: 4,
      title: 'Productive Day',
      content: 'Had a great day at work today. Managed to complete all my tasks and even had time for a nice walk in the evening. Feeling grateful for the small wins.',
      tags: ['work', 'grateful', 'productive'],
    },
    {
      id: '2',
      date: new Date('2025-01-09'),
      mood: 2,
      title: 'Feeling Overwhelmed',
      content: 'Struggling with anxiety today. Too many things on my plate and feeling like I cant catch up. Trying to remember my breathing exercises.',
      tags: ['anxiety', 'overwhelmed', 'coping'],
    },
    {
      id: '3',
      date: new Date('2025-01-08'),
      mood: 3,
      title: 'Mixed Emotions',
      content: 'Had therapy today. Some difficult topics came up but Im glad I went. Progress isnt always linear.',
      tags: ['therapy', 'progress', 'self-care'],
    },
  ]);

  const [showNewEntry, setShowNewEntry] = useState(false);
  const [newEntry, setNewEntry] = useState({
    mood: 3,
    title: '',
    content: '',
    tags: '',
  });

  const moodEmojis = ['😢', '😔', '😐', '😊', '😄'];
  const moodLabels = ['Very Low', 'Low', 'Neutral', 'Good', 'Excellent'];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newEntry.title.trim() || !newEntry.content.trim()) return;

    const entry: JournalEntry = {
      id: Date.now().toString(),
      date: new Date(),
      mood: newEntry.mood,
      title: newEntry.title,
      content: newEntry.content,
      tags: newEntry.tags.split(',').map(tag => tag.trim()).filter(tag => tag),
    };

    setEntries([entry, ...entries]);
    setNewEntry({ mood: 3, title: '', content: '', tags: '' });
    setShowNewEntry(false);
  };

  const averageMood = entries.length > 0 
    ? entries.reduce((sum, entry) => sum + entry.mood, 0) / entries.length 
    : 3;

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Personal Journal</h1>
        <p className="text-gray-600">Track your moods and reflect on your mental wellness journey</p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Main Journal Area */}
        <div className="lg:col-span-2">
          {/* Quick Actions */}
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Calendar className="h-5 w-5 text-purple-600" />
                <span className="font-medium text-gray-700">
                  {new Date().toLocaleDateString('en-US', { 
                    weekday: 'long', 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}
                </span>
              </div>
            </div>
            <button
              onClick={() => setShowNewEntry(true)}
              className="px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full font-medium hover:from-purple-700 hover:to-blue-700 transition-all duration-200 flex items-center space-x-2"
            >
              <Plus className="h-4 w-4" />
              <span>New Entry</span>
            </button>
          </div>

          {/* New Entry Form */}
          {showNewEntry && (
            <div className="bg-white rounded-2xl p-6 shadow-lg mb-6 border border-purple-100">
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    How are you feeling? (1-5)
                  </label>
                  <div className="flex space-x-2">
                    {moodEmojis.map((emoji, index) => (
                      <button
                        key={index}
                        type="button"
                        onClick={() => setNewEntry({ ...newEntry, mood: index + 1 })}
                        className={`p-3 text-2xl rounded-full transition-all duration-200 ${
                          newEntry.mood === index + 1
                            ? 'bg-purple-100 scale-110'
                            : 'hover:bg-gray-100'
                        }`}
                      >
                        {emoji}
                      </button>
                    ))}
                  </div>
                  <p className="text-sm text-gray-500 mt-1">
                    {moodLabels[newEntry.mood - 1]}
                  </p>
                </div>

                <div className="mb-4">
                  <input
                    type="text"
                    placeholder="Entry title..."
                    value={newEntry.title}
                    onChange={(e) => setNewEntry({ ...newEntry, title: e.target.value })}
                    className="w-full p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-300 focus:border-transparent"
                  />
                </div>

                <div className="mb-4">
                  <textarea
                    placeholder="What's on your mind today?"
                    value={newEntry.content}
                    onChange={(e) => setNewEntry({ ...newEntry, content: e.target.value })}
                    className="w-full h-32 p-3 border border-gray-200 rounded-xl resize-none focus:ring-2 focus:ring-purple-300 focus:border-transparent"
                  />
                </div>

                <div className="mb-4">
                  <input
                    type="text"
                    placeholder="Tags (comma separated)"
                    value={newEntry.tags}
                    onChange={(e) => setNewEntry({ ...newEntry, tags: e.target.value })}
                    className="w-full p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-300 focus:border-transparent"
                  />
                </div>

                <div className="flex justify-end space-x-3">
                  <button
                    type="button"
                    onClick={() => setShowNewEntry(false)}
                    className="px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors duration-200"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-6 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full font-medium hover:from-purple-700 hover:to-blue-700 transition-all duration-200"
                  >
                    Save Entry
                  </button>
                </div>
              </form>
            </div>
          )}

          {/* Journal Entries */}
          <div className="space-y-6">
            {entries.map((entry) => (
              <div key={entry.id} className="bg-white rounded-2xl p-6 shadow-lg border border-purple-100 hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">{moodEmojis[entry.mood - 1]}</span>
                    <div>
                      <h3 className="font-semibold text-gray-800">{entry.title}</h3>
                      <p className="text-sm text-gray-500">
                        {entry.date.toLocaleDateString('en-US', { 
                          weekday: 'short', 
                          month: 'short', 
                          day: 'numeric' 
                        })}
                      </p>
                    </div>
                  </div>
                </div>
                
                <p className="text-gray-700 leading-relaxed mb-4">{entry.content}</p>
                
                {entry.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {entry.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-purple-100 text-purple-700 text-sm rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Mood Tracker */}
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-purple-100">
            <h3 className="font-semibold text-gray-800 mb-4 flex items-center space-x-2">
              <TrendingUp className="h-5 w-5 text-purple-600" />
              <span>Mood Tracker</span>
            </h3>
            <div className="text-center mb-4">
              <div className="text-4xl mb-2">{moodEmojis[Math.round(averageMood) - 1]}</div>
              <p className="text-2xl font-bold text-purple-600">
                {averageMood.toFixed(1)}/5
              </p>
              <p className="text-sm text-gray-500">Average Mood</p>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Last 7 days</span>
                <span className="text-purple-600">Trending up ↗</span>
              </div>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-purple-100">
            <h3 className="font-semibold text-gray-800 mb-4 flex items-center space-x-2">
              <BookOpen className="h-5 w-5 text-purple-600" />
              <span>Journal Stats</span>
            </h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-600">Total Entries</span>
                <span className="font-semibold">{entries.length}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">This Week</span>
                <span className="font-semibold">3</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Streak</span>
                <span className="font-semibold text-purple-600">5 days</span>
              </div>
            </div>
          </div>

          {/* Reflection Prompts */}
          <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl p-6 border border-purple-100">
            <h3 className="font-semibold text-gray-800 mb-4">Today's Reflection</h3>
            <p className="text-sm text-gray-600 mb-3">
              "What is one thing you're grateful for today?"
            </p>
            <p className="text-xs text-gray-500">
              💡 Try answering this in your next journal entry
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Journal;