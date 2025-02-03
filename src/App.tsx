import React, { useState } from 'react';
import { 
  Clock, Music, GitGraph, Calendar, TrendingUp, Network
} from 'lucide-react';
import Header from './components/Header.jsx';
import Navigation from './components/Navigation.jsx';
import MainContent from './components/MainContent.tsx';

interface Tab {
  id: string;
  name: string;
  icon?: React.ReactNode;
}

function App() {
  const [activeTab, setActiveTab] = useState('time');

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50">
      <Header />
      <Navigation tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab} />
      <MainContent activeTab={activeTab}/>
    </div>
  );
}

// Tab Configuration
const tabs: Tab[] = [
  { id: 'time', name: 'Time Analysis', icon: <Clock className="w-4 h-4" /> },
  { id: 'favorites', name: 'Top Content', icon: <Music className="w-4 h-4" /> },
  { id: 'sessions', name: 'Sessions', icon: <Calendar className="w-4 h-4" /> },
  { id: 'correlations', name: 'Correlations', icon: <Network className="w-4 h-4" /> },
  // { id: 'discovery', name: 'Discovery', icon: <TrendingUp className="w-4 h-4" /> },
  { id: 'clusters', name: 'Clusters', icon: <GitGraph className="w-4 h-4" /> },
];


export default App;