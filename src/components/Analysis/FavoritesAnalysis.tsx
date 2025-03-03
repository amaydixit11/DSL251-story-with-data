
import { Music, Users, Calendar, BarChart3, TrendingUp, History, Repeat, Heart, Globe, Clock, Sparkles, Share2 } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, BarChart, Bar, Legend, RadialBarChart, RadialBar } from 'recharts';

const topArtists = [
  { name: "Ariana Grande", plays: 659, peakDate: "2025-02-28", daysPlayed: 140, avgDailyPlays: 1.97, peakPlays: 49 },
  { name: "Anuv Jain", plays: 463, peakDate: "2024-06-04", daysPlayed: 118, avgDailyPlays: 1.39, peakPlays: 43 },
  { name: "Aditya Rikhari", plays: 408, peakDate: "2024-06-03", daysPlayed: 97, avgDailyPlays: 1.22, peakPlays: 33 },
  { name: "The Weeknd", plays: 408, peakDate: "2024-05-16", daysPlayed: 121, avgDailyPlays: 1.22, peakPlays: 23 },
  { name: "Pritam", plays: 404, peakDate: "2024-09-24", daysPlayed: 132, avgDailyPlays: 1.21, peakPlays: 17 },
];

const topSongs = [
  { title: "Faasle", plays: 293, avgDailyPlays: 0.88, peakPlays: 30, daysPlayed: 82, peakDate: "2024-06-03" },
  { title: "sweet n low", plays: 224, avgDailyPlays: 0.67, peakPlays: 54, daysPlayed: 32, peakDate: "2024-08-09" },
  { title: "Tu hai kahan", plays: 150, avgDailyPlays: 0.45, peakPlays: 10, daysPlayed: 67, peakDate: "2024-05-02" },
  { title: "Arcade", plays: 137, avgDailyPlays: 0.41, peakPlays: 24, daysPlayed: 47, peakDate: "2024-04-07" },
  { title: "Daylight", plays: 136, avgDailyPlays: 0.41, peakPlays: 26, daysPlayed: 43, peakDate: "2024-06-22" }
];

const monthlyTrends = [
  { month: "Apr 2024", plays: 201, uniqueArtists: 5, avgPlays: 40.2, topArtist: "Duncan Laurence" },
  { month: "May 2024", plays: 224, uniqueArtists: 5, avgPlays: 44.8, topArtist: "Chris Brown" },
  { month: "Jun 2024", plays: 402, uniqueArtists: 4, avgPlays: 80.4, topArtist: "Aditya Rikhari" },
  { month: "Jul 2024", plays: 99, uniqueArtists: 5, avgPlays: 19.8, topArtist: "SZA" },
  { month: "Aug 2024", plays: 233, uniqueArtists: 5, avgPlays: 46.6, topArtist: "Lily Kincade" },
  { month: "Sep 2024", plays: 269, uniqueArtists: 5, avgPlays: 53.8, topArtist: "The Local train" },
  { month: "Oct 2024", plays: 288, uniqueArtists: 4, avgPlays: 57.6, topArtist: "Shankar Mahadevan" },
  { month: "Nov 2024", plays: 91, uniqueArtists: 4, avgPlays: 18.2, topArtist: "Aditya Rikhari" },
  { month: "Dec 2024", plays: 74, uniqueArtists: 5, avgPlays: 14.8, topArtist: "Lady Gaga" },
  { month: "Jan 2025", plays: 120, uniqueArtists: 2, avgPlays: 24.0, topArtist: "Olivia Rodrigo" },
  { month: "Feb 2025", plays: 100, uniqueArtists: 4, avgPlays: 20.0, topArtist: "Sevdaliza" },
];

const loyalArtists = [
  { name: "Lily Kincade", score: 2.37, playFrequency: 16.1, playsPerDay: 7.12, consistency: 0.07, totalPlays: 235, period: 205 },
  { name: "Shankar Mahadevan", score: 2.07, playFrequency: 11.1, playsPerDay: 6.18, consistency: 0.08, totalPlays: 210, period: 306 },
  { name: "Ariana Grande", score: 1.76, playFrequency: 42.0, playsPerDay: 5.71, consistency: 0.12, totalPlays: 659, period: 333 }
];

const FavoritesAnalysis = () => {
  const totalPlays = 10362;
  const peakMonth = monthlyTrends.reduce((max, month) => month.plays > max.plays ? month : max);

  return (
    <div className="max-w-7xl mx-auto p-6 space-y-8 bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <div className="text-center space-y-4 mb-12">
        <h1 className="text-4xl font-bold text-gray-900">Favorite Artists and Top Content</h1>
        {/* <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Hey there! Let me take you through my musical adventure of the past 9 months. 
          It's been quite a ride with {totalPlays.toLocaleString()} plays across genres, moods, and memories.
        </p> */}
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="transform hover:scale-105 transition-transform duration-200">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <p className="text-sm font-medium text-gray-500">My Musical Marathon</p>
                <p className="text-3xl font-bold text-indigo-600">{totalPlays} Songs</p>
                <p className="text-sm text-gray-600">{(totalPlays/270).toFixed(1)} songs per day</p>
              </div>
              <Music className="h-12 w-12 text-indigo-600 opacity-75" />
            </div>
          </CardContent>
        </Card>

        <Card className="transform hover:scale-105 transition-transform duration-200">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <p className="text-sm font-medium text-gray-500">Peak Music Month</p>
                <p className="text-3xl font-bold text-indigo-600">June '24</p>
                <p className="text-sm text-gray-600">{peakMonth.plays} plays</p>
              </div>
              <Calendar className="h-12 w-12 text-indigo-600 opacity-75" />
            </div>
          </CardContent>
        </Card>

        <Card className="transform hover:scale-105 transition-transform duration-200">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <p className="text-sm font-medium text-gray-500">Favorite Artist</p>
                <p className="text-3xl font-bold text-indigo-600">{topArtists[0].name}</p>
                <p className="text-sm text-gray-600">{topArtists[0].plays} plays</p>
              </div>
              {/* <Heart className="h-12 w-12 text-indigo-600 opacity-75" /> */}
            </div>
          </CardContent>
        </Card>

        <Card className="transform hover:scale-105 transition-transform duration-200">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <p className="text-sm font-medium text-gray-500">Most Played Song</p>
                <p className="text-3xl font-bold text-indigo-600">"Faasle"</p>
                <p className="text-sm text-gray-600">280 replays</p>
              </div>
              <Sparkles className="h-12 w-12 text-indigo-600 opacity-75" />
            </div>
          </CardContent>
        </Card>
      </div>
      {/* Artist Showcase */}
      <Card className="border-none shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl">Top Artists</CardTitle>
          {/* <p className="text-gray-600">The artists who've been the soundtrack to my year</p> */}
          <img src="/each_month_top_5.png"></img>
        </CardHeader>

        <img src="/artist_play_trends_over_time.png"></img>
      </Card>

      {/* Song Stories */}
      <Card className="border-none shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl">Top Songs</CardTitle>
          {/* <p className="text-gray-600">The tracks I couldn't stop replaying</p> */}
        </CardHeader>

        <img src="/top_10_titles.png"></img>
        
        <img src="/title_play_trends_over_time.png"></img>
      </Card>

      {/* Loyal Artists Section */}
      <Card className="border-none shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl">Loyalty and Discovery Metrics</CardTitle>
          <p className="text-gray-600">The artists who've been there through thick and thin</p>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {loyalArtists.map((artist, index) => (
              <Card key={index} className="bg-white hover:shadow-xl transition-shadow duration-200 overflow-hidden">
                <CardContent className="p-6">
                  <div className="flex flex-col h-full">
                    {/* Artist Header */}
                    <div className="mb-6">
                      <h3 className="text-xl font-semibold text-gray-900 mb-1">{artist.name}</h3>
                      <p className="text-sm text-indigo-600">{artist.period} days together</p>
                    </div>

                    {/* Loyalty Score Badge */}
                    <div className="bg-gradient-to-r from-purple-50 to-indigo-50 rounded-lg p-4 mb-6 text-center">
                      <p className="text-3xl font-bold text-indigo-600 mb-1">{artist.score.toFixed(2)}</p>
                      <p className="text-sm text-gray-600">loyalty score</p>
                    </div>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div className="text-center p-3 bg-gray-50 rounded-lg">
                        <p className="text-sm text-gray-500 mb-1">Play Rate</p>
                        <p className="text-lg font-semibold text-gray-900">{artist.playFrequency}%</p>
                      </div>
                      <div className="text-center p-3 bg-gray-50 rounded-lg">
                        <p className="text-sm text-gray-500 mb-1">Daily Plays</p>
                        <p className="text-lg font-semibold text-gray-900">{artist.playsPerDay.toFixed(1)}</p>
                      </div>
                    </div>

                    {/* Additional Stats */}
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center p-3 bg-gray-50 rounded-lg">
                        <p className="text-sm text-gray-500 mb-1">Total Plays</p>
                        <p className="text-lg font-semibold text-gray-900">{artist.totalPlays}</p>
                      </div>
                      <div className="text-center p-3 bg-gray-50 rounded-lg">
                        <p className="text-sm text-gray-500 mb-1">Consistency</p>
                        <p className="text-lg font-semibold text-gray-900">{(artist.consistency * 100).toFixed(0)}%</p>
                      </div>
                    </div>

                    {/* Loyalty Bar */}
                    <div className="mt-6">
                      <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-indigo-600 rounded-full"
                          style={{ width: `${(artist.score / loyalArtists[0].score) * 100}%` }}
                        />
                      </div>
                      <p className="text-xs text-gray-500 mt-2 text-right">
                        {((artist.score / loyalArtists[0].score) * 100).toFixed(0)}% loyalty ranking
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
        <img src="/discovery_and_loyalty.png" />
      </Card>
    </div>
  );
};

export default FavoritesAnalysis;