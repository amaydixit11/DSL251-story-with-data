import React from 'react';
import { Network, Waves, ArrowRight, Clock, Users, Repeat, TrendingUp, PieChart, BarChart2, Music, Activity, Heart, Table } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, LineChart, Line } from 'recharts';

const artistCorrelations = [
  { 
    artists: "Aditya Rikhari & Anuv Jain",
    correlation: 0.610,
    description: "High affinity for indie pop, suggesting strong genre-based listening patterns",
    listenerOverlap: "62%",
    commonGenres: ["Indie Pop", "Acoustic"],
    peakListeningTime: "Evening"
  },
  {
    artists: "Ariana Grande & One Direction",
    correlation: 0.380,
    description: "Moderate pop genre correlation with shared mainstream appeal",
    listenerOverlap: "41%",
    commonGenres: ["Pop", "Contemporary"],
    peakListeningTime: "Afternoon"
  },
  {
    artists: "Ariana Grande & Anuv Jain",
    correlation: -0.119,
    description: "Distinct audience segments across different genres and languages",
    listenerOverlap: "15%",
    commonGenres: ["Pop", "Indie"],
    peakListeningTime: "Mixed"
  }
];

const songCorrelations = [
  {
    songs: "'Baarishein' & 'Samjho Na'",
    correlation: 0.693,
    artists: "Anuv Jain & Aditya Rikhari",
    description: "Strong emotional resonance between similar-themed tracks",
    timeOfDay: "Evening",
    mood: "Melancholic",
    activeDays: 75
  },
  {
    songs: "'Arcade' & 'Baarishein'",
    correlation: -0.128,
    artists: "Duncan Laurence & Anuv Jain",
    description: "Contrasting genres and listening contexts",
    timeOfDay: "Mixed",
    mood: "Varied",
    activeDays: 45
  }
];

const songTransitions = [
  { 
    from: "HUSN (Anuv Jain)", 
    to: "Tu hai kahan (AUR)", 
    percentage: 22.58,
    timePattern: "Evening transitions",
    genre: "Indie Pop → Pop",
    mood: "Melancholic",
    avgDuration: "4.2 min"
  },
  { 
    from: "Baarishein (Anuv Jain)", 
    to: "Tu hai kahan (AUR)", 
    percentage: 18.26,
    timePattern: "Late night transitions",
    genre: "Indie Pop → Pop",
    mood: "Romantic",
    avgDuration: "3.8 min"
  },
  { 
    from: "Baarishein (Anuv Jain)", 
    to: "Faasle (Aditya Rikhari)", 
    percentage: 17.39,
    timePattern: "Evening transitions",
    genre: "Indie Pop → Indie Pop",
    mood: "Melancholic",
    avgDuration: "3.5 min"
  }
];

const transitionStats = [
  { name: 'Morning', value: 15 },
  { name: 'Afternoon', value: 25 },
  { name: 'Evening', value: 45 },
  { name: 'Night', value: 15 }
];

const artistPlayIntensity = [
  { artist: 'Lily Kincade', playsPerDay: 7.31 },
  { artist: 'Pritam', playsPerDay: 5.8 },
  { artist: 'Anuv Jain', playsPerDay: 4.9 },
  { artist: 'Aditya Rikhari', playsPerDay: 4.2 }
];

function InsightCard({ metric }: any) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 transform hover:scale-105 transition-transform">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center">
          <metric.icon className="w-5 h-5 text-indigo-600 mr-2" />
          <h3 className="text-sm font-medium text-gray-600">{metric.label}</h3>
        </div>
        <span className="text-xs font-medium text-indigo-600 bg-indigo-50 px-2 py-1 rounded-full">
          {metric.trend}
        </span>
      </div>
      <p className="text-2xl font-bold text-gray-900 mb-1">{metric.value}</p>
      <p className="text-sm text-gray-500">{metric.detail}</p>
    </div>
  );
}

function HeatmapSection() {
  return (
    <section className="bg-white rounded-lg shadow-md p-6 mb-8">
      <h2 className="text-xl font-semibold mb-6 flex items-center">
        <Table className="w-5 h-5 mr-2 text-indigo-600" />
        Correlation Heatmaps
      </h2>
      
      <div className="space-y-8">
        <div className="space-y-2">
          <h3 className="text-lg font-medium text-gray-800">Artist Correlation Matrix</h3>
          <p className="text-sm text-gray-600 mb-4">Visualizing listening patterns between different artists</p>
          <div className="bg-gray-50 p-4 rounded-lg">
            <img 
              src="/artist_correlation.png" 
              alt="Artist Correlation Heatmap"
              className="w-full h-auto rounded-lg shadow-sm"
            />
          </div>
        </div>

        <div className="space-y-2">
          <h3 className="text-lg font-medium text-gray-800">Song Title Correlation Matrix</h3>
          <p className="text-sm text-gray-600 mb-4">Analyzing relationships between individual tracks</p>
          <div className="bg-gray-50 p-4 rounded-lg">
            <img 
              src="/title_correlation.png" 
              alt="Title Correlation Heatmap"
              className="w-full h-auto rounded-lg shadow-sm"
            />
          </div>
        </div>

        <div className="space-y-2">
          <h3 className="text-lg font-medium text-gray-800">Transition Correlation Pattern</h3>
          <p className="text-sm text-gray-600 mb-4">Song-to-song transition probability matrix</p>
          <div className="bg-gray-50 p-4 rounded-lg">
            <img 
              src="/transition_correlation.png" 
              alt="Transition Correlation Heatmap"
              className="w-full h-auto rounded-lg shadow-sm"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function ArtistCorrelationsSection() {
  return (
    <section className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-semibold mb-6 flex items-center">
        <Network className="w-5 h-5 mr-2 text-indigo-600" />
        Artist & Song Correlations
      </h2>

      <div className="h-48 mb-6">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={artistPlayIntensity}>
            <XAxis dataKey="artist" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="playsPerDay" fill="#4f46e5" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="space-y-4">
        {artistCorrelations.map((corr, index) => (
          <div key={index} className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors">
            <div className="flex justify-between items-center mb-2">
              <span className="font-medium text-gray-900">{corr.artists}</span>
              <div className="flex items-center space-x-3">
                <span className="text-sm bg-gray-200 px-2 py-1 rounded">
                  Peak: {corr.peakListeningTime}
                </span>
                <span className={`text-sm font-medium px-2 py-1 rounded ${
                  corr.correlation > 0.5 ? 'bg-green-100 text-green-800' :
                  corr.correlation > 0 ? 'bg-blue-100 text-blue-800' :
                  'bg-red-100 text-red-800'
                }`}>
                  {corr.correlation > 0 ? '+' : ''}{corr.correlation}
                </span>
              </div>
            </div>
            <p className="text-sm text-gray-600 mb-2">{corr.description}</p>
            <div className="flex flex-wrap gap-2">
              {corr.commonGenres.map((genre, i) => (
                <span key={i} className="text-xs bg-indigo-50 text-indigo-600 px-2 py-1 rounded">
                  {genre}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function TransitionsSection() {
  return (
    <section className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-semibold mb-6 flex items-center">
        <Waves className="w-5 h-5 mr-2 text-indigo-600" />
        Song Transitions & Patterns
      </h2>
      
      <div className="h-48 mb-6">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={transitionStats}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="value" fill="#4f46e5" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="space-y-4">
        {songTransitions.map((transition, index) => (
          <div key={index} className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors">
            <div className="flex items-center justify-between mb-3">
              <div className="flex-1">
                <div className="flex items-center">
                  <p className="font-medium text-gray-900">{transition.from}</p>
                  <ArrowRight className="w-4 h-4 mx-2 text-gray-400" />
                  <p className="font-medium text-gray-900">{transition.to}</p>
                </div>
                <div className="flex items-center gap-2 mt-2">
                  <span className="text-xs text-gray-500">{transition.timePattern}</span>
                  <span className="text-xs bg-indigo-50 text-indigo-600 px-2 py-1 rounded">
                    {transition.genre}
                  </span>
                  <span className="text-xs bg-purple-50 text-purple-600 px-2 py-1 rounded">
                    {transition.mood}
                  </span>
                </div>
              </div>
              <span className="text-lg font-semibold text-indigo-600 ml-4">
                {transition.percentage}%
              </span>
            </div>
            <div className="mt-2">
              <div className="h-2 bg-gray-200 rounded-full">
                <div 
                  className="h-2 bg-indigo-600 rounded-full transition-all duration-500"
                  style={{ width: `${transition.percentage}%` }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function CorrelationAnalysis() {
  const keyMetrics = [
    {
      label: "Most Active Artist",
      value: "Pritam",
      icon: Music,
      trend: "124 Active Days",
      detail: "Consistent listening pattern"
    },
    {
      label: "Highest Intensity",
      value: "Lily Kincade",
      icon: Activity,
      trend: "7.31 plays/day",
      detail: "Most repeated artist"
    },
    {
      label: "Genre Loyalty",
      value: "96.9%",
      icon: Heart,
      trend: "Different Artists",
      detail: "Cross-artist exploration"
    },
    {
      label: "Transition Time",
      value: "6.0 min",
      icon: Clock,
      trend: "Median duration",
      detail: "Between songs"
    }
  ];

  return (
    <div className="space-y-8 p-6 bg-gray-50">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Music Listening Analytics</h1>
        <p className="text-gray-600">Deep analysis of listening patterns, correlations, and transitions</p>
      </div>

      {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {keyMetrics.map((metric, index) => (
          <InsightCard key={index} metric={metric} />
        ))}
      </div> */}

      <HeatmapSection />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <ArtistCorrelationsSection />
        <TransitionsSection />
      </div>
    </div>
  );
}

export default CorrelationAnalysis;