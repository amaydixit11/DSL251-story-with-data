// src/components/metrics/KeyMetrics.jsx
import { Music, Clock, Repeat, TrendingUp } from 'lucide-react';
import StatCard from './common/StatCard';

function KeyMetrics() {
  const metrics = [
    {
      icon: <Music />,
      title: "Total Songs",
      value: "1,881",
      subtitle: "Unique tracks played"
    },
    {
      icon: <Clock />,
      title: "Avg. Session",
      value: "62 mins",
      subtitle: "15.35 songs/session"
    },
    {
      icon: <Repeat />,
      title: "Repeat Rate",
      value: "87.6%",
      subtitle: "Of total plays"
    },
    {
      icon: <TrendingUp />,
      title: "Peak Month",
      value: "June 2024",
      subtitle: "402 plays"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {metrics.map((metric, index) => (
        <StatCard key={index} {...metric} />
      ))}
    </div>
  );
}

export default KeyMetrics;