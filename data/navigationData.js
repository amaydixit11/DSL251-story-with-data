import { Clock, Music, Calendar, Network, TrendingUp, GitGraph } from 'lucide-react';

export const tabs = [
  { id: 'time', name: 'Time Analysis', icon: <Clock className="w-4 h-4" /> },
  { id: 'favorites', name: 'Top Content', icon: <Music className="w-4 h-4" /> },
  { id: 'sessions', name: 'Sessions', icon: <Calendar className="w-4 h-4" /> },
  { id: 'correlations', name: 'Correlations', icon: <Network className="w-4 h-4" /> },
  { id: 'discovery', name: 'Discovery', icon: <TrendingUp className="w-4 h-4" /> },
  { id: 'clusters', name: 'Clusters', icon: <GitGraph className="w-4 h-4" /> },
];

// src/data/analysisData.js
export const peakHours = [
  { time: "7 PM", percentage: 100, plays: 245 },
  { time: "8 PM", percentage: 92, plays: 225 },
  { time: "9 PM", percentage: 85, plays: 208 },
];