import React, { useState } from 'react';
import { Search, BookOpen, Heart, Phone, ExternalLink, Star } from 'lucide-react';

interface Resource {
  id: string;
  title: string;
  category: 'article' | 'coping' | 'crisis' | 'motivation';
  description: string;
  content?: string;
  isExternal?: boolean;
  rating: number;
  readTime: string;
}

const Resources: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedResource, setSelectedResource] = useState<Resource | null>(null);

  const resources: Resource[] = [
    {
      id: '1',
      title: 'Understanding Anxiety: A Complete Guide',
      category: 'article',
      description: 'Learn about anxiety symptoms, causes, and effective management strategies.',
      content: `Anxiety is a natural response to stress, but when it becomes overwhelming, it can interfere with daily life. 

**What is Anxiety?**
Anxiety is characterized by feelings of tension, worried thoughts, and physical changes like increased blood pressure.

**Common Symptoms:**
- Restlessness or feeling keyed up
- Being easily fatigued
- Difficulty concentrating
- Irritability
- Muscle tension
- Sleep disturbances

**Management Strategies:**
1. **Deep Breathing:** Practice slow, deep breathing to activate your body's relaxation response
2. **Progressive Muscle Relaxation:** Tense and then relax each muscle group
3. **Mindfulness:** Stay present and observe your thoughts without judgment
4. **Regular Exercise:** Physical activity can significantly reduce anxiety symptoms
5. **Healthy Sleep Habits:** Aim for 7-9 hours of quality sleep each night

Remember, if anxiety significantly impacts your daily life, consider speaking with a mental health professional.`,
      rating: 4.8,
      readTime: '8 min',
    },
    {
      id: '2',
      title: 'Depression: Signs, Symptoms, and Support',
      category: 'article',
      description: 'Comprehensive information about depression and pathways to recovery.',
      content: `Depression is more than just feeling sad or going through a rough patch. It's a serious mental health condition that affects how you think, feel, and handle daily activities.

**Common Signs of Depression:**
- Persistent sad, anxious, or empty mood
- Feelings of hopelessness or pessimism
- Loss of interest in activities once enjoyed
- Decreased energy or fatigue
- Difficulty sleeping or oversleeping
- Changes in appetite
- Thoughts of death or suicide

**When to Seek Help:**
If you experience several of these symptoms for more than two weeks, it's important to reach out for professional help.

**Self-Care Strategies:**
- Maintain a routine
- Stay connected with friends and family
- Engage in physical activity
- Eat nutritious meals
- Practice relaxation techniques
- Avoid alcohol and drugs

**Treatment Options:**
- Therapy (CBT, DBT, etc.)
- Medication (when appropriate)
- Support groups
- Lifestyle changes

You are not alone, and help is available. Recovery is possible with the right support and treatment.`,
      rating: 4.9,
      readTime: '10 min',
    },
    {
      id: '3',
      title: '5-4-3-2-1 Grounding Technique',
      category: 'coping',
      description: 'A simple technique to help manage anxiety and panic attacks.',
      content: `The 5-4-3-2-1 grounding technique is a powerful tool for managing anxiety, panic attacks, and overwhelming emotions. It helps bring you back to the present moment.

**How it works:**
This technique uses your five senses to ground you in the present moment, interrupting anxious thoughts and physical sensations.

**The Steps:**

**5 - Look around and name 5 things you can see**
- A picture on the wall
- Your hands
- A lamp
- A book
- The color blue

**4 - Notice 4 things you can touch**
- Your chair
- Your phone
- The fabric of your clothes
- A smooth surface

**3 - Listen for 3 things you can hear**
- Traffic outside
- Air conditioning
- Your own breathing

**2 - Identify 2 things you can smell**
- Coffee
- Fresh air
- Soap

**1 - Notice 1 thing you can taste**
- Mint from gum
- The taste in your mouth
- A sip of water

**Tips for Success:**
- Take your time with each step
- Really focus on each sensation
- Say them out loud if it helps
- Practice when you're calm so it's easier to use during stress

This technique can be done anywhere, anytime, and no one will even know you're doing it.`,
      rating: 4.7,
      readTime: '5 min',
    },
    {
      id: '4',
      title: 'Crisis Hotlines and Emergency Resources',
      category: 'crisis',
      description: 'Immediate help and crisis support resources.',
      isExternal: true,
      rating: 5.0,
      readTime: '2 min',
    },
    {
      id: '5',
      title: 'Daily Affirmations for Mental Wellness',
      category: 'motivation',
      description: 'Positive affirmations to support your mental health journey.',
      content: `Positive affirmations can help rewire negative thought patterns and build self-compassion. Here are some powerful affirmations for mental wellness:

**For Self-Compassion:**
- "I am worthy of love and kindness, especially from myself"
- "I treat myself with the same compassion I would show a good friend"
- "My feelings are valid and I honor them"
- "I am doing the best I can with what I have right now"

**For Anxiety:**
- "I am safe in this moment"
- "This feeling will pass"
- "I breathe in peace and breathe out tension"
- "I have overcome challenges before and I can do it again"

**For Depression:**
- "I am enough, just as I am"
- "Small steps forward are still progress"
- "I choose to be gentle with myself today"
- "My worth is not determined by my productivity"

**For Growth:**
- "I am learning and growing every day"
- "Challenges help me become stronger"
- "I trust my ability to handle whatever comes my way"
- "I am exactly where I need to be in my journey"

**For Daily Use:**
- "Today I choose hope over fear"
- "I am grateful for this new day"
- "I have the power to create positive change in my life"
- "I am surrounded by love and support"

**How to Use Affirmations:**
1. Choose 3-5 affirmations that resonate with you
2. Repeat them in the morning and evening
3. Say them out loud when possible
4. Write them down in your journal
5. Place them where you can see them throughout the day

Remember, affirmations work best when practiced consistently and when you try to truly believe in their message.`,
      rating: 4.6,
      readTime: '6 min',
    },
    {
      id: '6',
      title: 'Box Breathing for Stress Relief',
      category: 'coping',
      description: 'Learn the box breathing technique to reduce stress and anxiety.',
      content: `Box breathing, also known as square breathing or 4-4-4-4 breathing, is a powerful technique used by Navy SEALs, first responders, and healthcare workers to manage stress and maintain focus under pressure.

**What is Box Breathing?**
Box breathing is a simple but effective breathing technique that involves breathing in a specific pattern to activate the parasympathetic nervous system, which helps calm the mind and body.

**The Technique:**
Imagine drawing a box with your breath:

1. **Inhale for 4 counts** - Breathe in slowly through your nose
2. **Hold for 4 counts** - Retain the breath in your lungs
3. **Exhale for 4 counts** - Breathe out slowly through your mouth
4. **Hold empty for 4 counts** - Pause before the next inhale

**Step-by-Step Guide:**
1. Find a comfortable seated position
2. Place one hand on your chest, one on your belly
3. Close your eyes or soften your gaze
4. Begin the 4-4-4-4 pattern
5. Focus on the counting and the sensation of breathing
6. Continue for 4-10 cycles

**When to Use Box Breathing:**
- Before stressful situations
- During panic attacks
- When feeling overwhelmed
- Before bed to promote sleep
- Anytime you need to center yourself

**Benefits:**
- Reduces stress and anxiety
- Lowers heart rate and blood pressure
- Improves focus and concentration
- Promotes emotional regulation
- Enhances sleep quality

**Tips for Success:**
- Start with shorter counts if 4 feels too long
- Practice regularly when calm
- Don't strain - breathing should feel natural
- If you feel dizzy, return to normal breathing

With practice, box breathing becomes a reliable tool you can use anywhere, anytime.`,
      rating: 4.8,
      readTime: '7 min',
    },
  ];

  const categories = [
    { id: 'all', label: 'All Resources', icon: BookOpen },
    { id: 'article', label: 'Articles', icon: BookOpen },
    { id: 'coping', label: 'Coping Tools', icon: Heart },
    { id: 'crisis', label: 'Crisis Support', icon: Phone },
    { id: 'motivation', label: 'Motivation', icon: Star },
  ];

  const filteredResources = resources.filter(resource => {
    const matchesCategory = selectedCategory === 'all' || resource.category === selectedCategory;
    const matchesSearch = resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         resource.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const getCategoryColor = (category: string) => {
    const colors = {
      article: 'bg-blue-100 text-blue-700',
      coping: 'bg-green-100 text-green-700',
      crisis: 'bg-red-100 text-red-700',
      motivation: 'bg-purple-100 text-purple-700',
    };
    return colors[category as keyof typeof colors] || 'bg-gray-100 text-gray-700';
  };

  if (selectedResource && !selectedResource.isExternal) {
    return (
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <button
          onClick={() => setSelectedResource(null)}
          className="mb-6 text-purple-600 hover:text-purple-800 flex items-center space-x-2"
        >
          <span>← Back to Resources</span>
        </button>
        
        <article className="bg-white rounded-2xl p-8 shadow-lg border border-purple-100">
          <div className="mb-6">
            <div className="flex items-center space-x-3 mb-4">
              <span className={`px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(selectedResource.category)}`}>
                {categories.find(cat => cat.id === selectedResource.category)?.label}
              </span>
              <div className="flex items-center space-x-1">
                <Star className="h-4 w-4 text-yellow-400 fill-current" />
                <span className="text-sm text-gray-600">{selectedResource.rating}</span>
              </div>
              <span className="text-sm text-gray-500">{selectedResource.readTime} read</span>
            </div>
            <h1 className="text-3xl font-bold text-gray-800 mb-4">{selectedResource.title}</h1>
            <p className="text-lg text-gray-600">{selectedResource.description}</p>
          </div>
          
          <div className="prose prose-lg max-w-none">
            {selectedResource.content?.split('\n').map((paragraph, index) => {
              if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
                return (
                  <h3 key={index} className="text-xl font-semibold text-gray-800 mt-6 mb-3">
                    {paragraph.slice(2, -2)}
                  </h3>
                );
              } else if (paragraph.startsWith('- ')) {
                return (
                  <ul key={index} className="list-disc list-inside text-gray-700 mb-2">
                    <li>{paragraph.slice(2)}</li>
                  </ul>
                );
              } else if (paragraph.match(/^\d+\./)) {
                return (
                  <ol key={index} className="list-decimal list-inside text-gray-700 mb-2">
                    <li>{paragraph.replace(/^\d+\.\s*/, '')}</li>
                  </ol>
                );
              } else if (paragraph.trim()) {
                return (
                  <p key={index} className="text-gray-700 leading-relaxed mb-4">
                    {paragraph}
                  </p>
                );
              }
              return <br key={index} />;
            })}
          </div>
        </article>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Wellness Resources</h1>
        <p className="text-gray-600">Access helpful articles, coping strategies, and motivational content</p>
      </div>

      {/* Search and Filters */}
      <div className="mb-8">
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search resources..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-300 focus:border-transparent"
            />
          </div>
        </div>

        <div className="flex flex-wrap gap-2">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-full font-medium transition-all duration-200 flex items-center space-x-2 ${
                  selectedCategory === category.id
                    ? 'bg-purple-100 text-purple-700 border-purple-300'
                    : 'bg-white text-gray-600 border-gray-200 hover:bg-purple-50 hover:text-purple-600'
                } border`}
              >
                <Icon className="h-4 w-4" />
                <span>{category.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Crisis Banner */}
      {selectedCategory === 'crisis' && (
        <div className="bg-red-50 border-l-4 border-red-400 p-6 mb-8 rounded-r-xl">
          <div className="flex items-center">
            <Phone className="h-6 w-6 text-red-400 mr-3" />
            <div>
              <h3 className="text-lg font-semibold text-red-800">Emergency Resources</h3>
              <p className="text-red-700 mb-3">
                If you're having thoughts of self-harm or suicide, please reach out immediately:
              </p>
              <div className="space-y-2 text-red-800">
                <div>• <strong>988 Suicide & Crisis Lifeline:</strong> Call or text 988</div>
                <div>• <strong>Crisis Text Line:</strong> Text HOME to 741741</div>
                <div>• <strong>Emergency Services:</strong> Call 911</div>
                <div>• <strong>National Alliance on Mental Illness:</strong> 1-800-950-NAMI</div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Resources Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredResources.map((resource) => (
          <div
            key={resource.id}
            className="bg-white rounded-2xl p-6 shadow-lg border border-purple-100 hover:shadow-xl transition-all duration-300 cursor-pointer"
            onClick={() => {
              if (resource.isExternal) {
                // In a real app, this would open external links
                alert('This would open external crisis resources');
              } else {
                setSelectedResource(resource);
              }
            }}
          >
            <div className="mb-4">
              <div className="flex items-center justify-between mb-3">
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(resource.category)}`}>
                  {categories.find(cat => cat.id === resource.category)?.label}
                </span>
                {resource.isExternal && <ExternalLink className="h-4 w-4 text-gray-400" />}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{resource.title}</h3>
              <p className="text-gray-600 leading-relaxed">{resource.description}</p>
            </div>
            
            <div className="flex items-center justify-between text-sm text-gray-500">
              <div className="flex items-center space-x-3">
                <div className="flex items-center space-x-1">
                  <Star className="h-4 w-4 text-yellow-400 fill-current" />
                  <span>{resource.rating}</span>
                </div>
                <span>{resource.readTime}</span>
              </div>
              <span className="text-purple-600 font-medium">Read More →</span>
            </div>
          </div>
        ))}
      </div>

      {/* Daily Quote */}
      <div className="mt-12 bg-gradient-to-r from-purple-100 to-blue-100 rounded-2xl p-8 text-center">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Daily Motivation</h3>
        <blockquote className="text-lg text-gray-700 italic mb-4">
          "You are braver than you believe, stronger than you seem, and smarter than you think."
        </blockquote>
        <cite className="text-purple-600 font-medium">— A.A. Milne</cite>
      </div>
    </div>
  );
};

export default Resources;