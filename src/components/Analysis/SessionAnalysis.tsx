import React from 'react';
import { Calendar, Clock, Music, Users, TrendingUp, Activity, BarChart2 } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';
import { IconType } from 'recharts/types/component/DefaultLegendContent';

const hourlyDistribution = [
  { hour: '12am', count: 15 }, { hour: '3am', count: 8 }, { hour: '6am', count: 5 },
  { hour: '9am', count: 12 }, { hour: '12pm', count: 45 }, { hour: '3pm', count: 52 },
  { hour: '6pm', count: 48 }, { hour: '9pm', count: 35 }, { hour: '11pm', count: 20 }
];

const durationData = [
  { duration: '0-30', sessions: 82 }, { duration: '31-60', sessions: 156 },
  { duration: '61-90', sessions: 85 }, { duration: '91-120', sessions: 42 },
  { duration: '120+', sessions: 19 }
];

interface SessionMetricCardProps {
  // icon?: IconType;
  title: string;
  value: string | number;
  description: string;
  trend?: string;
}

const SessionMetricCard: React.FC<SessionMetricCardProps> = ({
  // icon: Icon,
  title,
  value,
  description,
  trend,
}) => (
  <Card className="hover:shadow-lg transition-shadow">
    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
      <CardTitle className="text-sm font-medium text-gray-600">{title}</CardTitle>
      {/* <Icon className="h-4 w-4 text-indigo-600" /> */}
    </CardHeader>
    <CardContent>
      <div className="text-2xl font-bold text-gray-900">{value}</div>
      <p className="text-xs text-gray-600 mt-1">{description}</p>
      {trend && (
        <div className="mt-2 flex items-center text-xs text-green-600">
          <TrendingUp className="h-3 w-3 mr-1" />
          {trend}
        </div>
      )}
    </CardContent>
  </Card>
);
const SessionAnalysisDashboard = () => {
  return (
    <div className="space-y-8 p-6 bg-gray-50">
      {/* Header Section */}
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-900">Session Analysis Dashboard</h1>
        <div className="text-sm text-gray-600">
          Data period: Apr 2024 - Dec 2024
        </div>
      </div>

      {/* Key Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <SessionMetricCard
          // icon={Clock}
          title="Average Duration"
          value="62 mins"
          description="Per listening session"
          trend="5% increase from last month"
        />
        <SessionMetricCard
          // icon={Music}
          title="Songs per Session"
          value="15.35"
          description="Average tracks played"
          trend="5% increase from last month"
        />
        <SessionMetricCard
          // icon={Users}
          title="Artist Variety"
          value="0.61"
          description="Average unique artists ratio"
          trend="5% increase from last month"
        />
        <SessionMetricCard
          // icon={Activity}
          title="Engagement Rate"
          value="0.26"
          description="Songs per minute"
          trend="5% increase from last month"
        />
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Hourly Distribution Chart */}
        <Card>
          <CardHeader>
            <CardTitle>Hourly Listening Distribution</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={hourlyDistribution}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="hour" />
                  <YAxis />
                  <Tooltip />
                  <Line 
                    type="monotone" 
                    dataKey="count" 
                    stroke="#4f46e5" 
                    strokeWidth={2}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
            <div className="mt-4 text-sm text-gray-600">
              Peak listening hours occur during afternoon (12 PM - 6 PM), suggesting structured listening patterns aligned with work/study hours.
            </div>
          </CardContent>
          <img src="/songs_per_minute.png"></img>
        </Card>

        {/* Session Duration Distribution */}
        <Card>
          <CardHeader>
            <CardTitle>Session Duration Distribution</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={durationData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="duration" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="sessions" fill="#4f46e5" />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <div className="mt-4 text-sm text-gray-600">
              Most sessions last between 31-60 minutes, indicating focused listening periods typical of study or work sessions.
            </div>
          </CardContent>
          <img src="/session_duration_vs_song_count.png"></img>
        </Card>
      </div>

      {/* Key Insights Section */}
      <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <BarChart2 className="h-5 w-5 mr-2 text-indigo-600" />
              Comprehensive Insights
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="font-semibold text-lg">Temporal Patterns</h3>
                <div className="space-y-3">
                  <p className="text-sm text-gray-700">
                    <span className="font-medium">🎯 Peak Activity:</span> Highest engagement during 12 PM - 6 PM, particularly on Tuesdays
                  </p>
                  <p className="text-sm text-gray-700">
                    <span className="font-medium">📊 Session Distribution:</span> 40.6% of sessions fall in the 31-60 minute range
                  </p>
                  <p className="text-sm text-gray-700">
                    <span className="font-medium">🔄 Consistency:</span> Regular afternoon sessions indicate structured listening habits
                  </p>
                </div>
              </div>
              
              <div className="space-y-4">
                <h3 className="font-semibold text-lg">Listening Behavior</h3>
                <div className="space-y-3">
                  <p className="text-sm text-gray-700">
                    <span className="font-medium">🎵 Engagement Quality:</span> 0.26 songs/minute with 100% completion suggests focused listening
                  </p>
                  <p className="text-sm text-gray-700">
                    <span className="font-medium">🎨 Artist Diversity:</span> Higher variety (0.61) indicates exploratory music consumption
                  </p>
                  <p className="text-sm text-gray-700">
                    <span className="font-medium">⏱️ Duration Impact:</span> Longer sessions correlate with increased artist exploration
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
    </div>
  );
};

export default SessionAnalysisDashboard;