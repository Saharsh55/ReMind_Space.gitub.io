import React, { useState } from 'react';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import Express from './pages/Express';
import Journal from './pages/Journal';
import Resources from './pages/Resources';
import AICompanion from './pages/AICompanion';
import Community from './pages/Community';

export type Page = 'home' | 'express' | 'journal' | 'resources' | 'ai' | 'community';

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home onNavigate={setCurrentPage} />;
      case 'express':
        return <Express />;
      case 'journal':
        return <Journal />;
      case 'resources':
        return <Resources />;
      case 'ai':
        return <AICompanion />;
      case 'community':
        return <Community />;
      default:
        return <Home onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-emerald-50">
      <Navigation currentPage={currentPage} onNavigate={setCurrentPage} />
      <main className="transition-all duration-300 ease-in-out">
        {renderPage()}
      </main>
    </div>
  );
}

export default App;