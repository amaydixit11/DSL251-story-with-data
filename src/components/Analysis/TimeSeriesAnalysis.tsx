import { Clock, LineChart, Moon, Sun, Sunrise, Sunset, Info } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, AreaChart, Area } from 'recharts';
// import { Alert } from '../ui/alert';
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '../ui/card';
import { Alert, AlertDescription } from '../ui/alert';

// Real monthly data
const monthlyData = [
  { month: 'Apr', plays: 852 },
  { month: 'May', plays: 1090 },
  { month: 'Jun', plays: 1435 },
  { month: 'Jul', plays: 876 },
  { month: 'Aug', plays: 908 },
  { month: 'Sep', plays: 1015 },
  { month: 'Oct', plays: 1058 },
  { month: 'Nov', plays: 834 },
  { month: 'Dec', plays: 848 },
  { month: 'Jan', plays: 635 },
  { month: 'Feb', plays: 811 },
];

// Real weekly data
const weeklyData = [
  { day: 'Mon', plays: 1095 },
  { day: 'Tue', plays: 1387 },
  { day: 'Wed', plays: 1245 },
  { day: 'Thu', plays: 1262 },
  { day: 'Fri', plays: 1338 },
  { day: 'Sat', plays: 1403 },
  { day: 'Sun', plays: 1186 }
];

// Real hourly data
const hourlyData = [
  { hour: '12 AM', plays: 436},
  { hour: '1 AM', plays: 472},
  { hour: '2 AM', plays: 333},
  { hour: '3 AM', plays: 140},
  { hour: '4 AM', plays: 35},
  { hour: '5 AM', plays: 33},
  { hour: '6 AM', plays: 25},
  { hour: '7 AM', plays: 113},
  { hour: '8 AM', plays: 137},
  { hour: '9 AM', plays: 254},
  { hour: '10 AM', plays: 292},
  { hour: '11 AM', plays: 406},
  { hour: '12 PM', plays: 639},
  { hour: '1 PM', plays: 700},
  { hour: '2 PM', plays: 844},
  { hour: '3 PM', plays: 704},
  { hour: '4 PM', plays: 674},
  { hour: '5 PM', plays: 635},
  { hour: '6 PM', plays: 582},
  { hour: '7 PM', plays: 642},
  { hour: '8 PM', plays: 635},
  { hour: '9 PM', plays: 584},
  { hour: '10 PM', plays: 578},
  { hour: '11 PM', plays: 469}
];

const timeDistribution = [
  { 
    period: "Morning",
    plays: 1227,
    percentage: Math.round((993 / 8916) * 100),
    description: "6 AM - 12 PM",
    icon: <Sunrise className="w-6 h-6 text-amber-500" />,
    gradient: "from-amber-50 to-amber-100"
  },
  {
    period: "Afternoon",
    plays: 4196,
    percentage: Math.round((3631 / 8916) * 100),
    description: "12 PM - 6 PM",
    icon: <Sun className="w-6 h-6 text-orange-500" />,
    gradient: "from-orange-50 to-orange-100"
  },
  {
    period: "Evening",
    plays: 3490,
    percentage: Math.round((2963 / 8916) * 100),
    description: "6 PM - 12 AM",
    icon: <Sunset className="w-6 h-6 text-indigo-500" />,
    gradient: "from-indigo-50 to-indigo-100"
  },
  {
    period: "Late Night",
    plays: 1449,
    percentage: Math.round((1329 / 8916) * 100),
    description: "12 AM - 6 AM",
    icon: <Moon className="w-6 h-6 text-blue-500" />,
    gradient: "from-blue-50 to-blue-100"
  }
];

// const CustomTooltip = ({ active, payload, label }) => {
//   if (active && payload && payload.length) {
//     return (
//       <div className="bg-white p-4 shadow-lg rounded-lg border border-gray-100">
//         <p className="font-medium text-gray-900">{label}</p>
//         <p className="text-indigo-600">{`${payload[0].value.toLocaleString()} plays`}</p>
//       </div>
//     );
//   }
//   return null;
// };

const TimeSeriesAnalysis = () => {
  // Find peak hours (top 3)
  const peakHours = [...hourlyData]
    .sort((a, b) => b.plays - a.plays)
    .slice(0, 3)
    .map(hour => ({
      time: hour.hour,
      plays: hour.plays,
      percentage: Math.round((hour.plays / Math.max(...hourlyData.map(h => h.plays))) * 100)
    }));

  return (
    <div className="space-y-8 p-6 bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header Alert */}
      <Alert className="bg-gradient-to-r from-indigo-50 to-indigo-100 border-indigo-200">
        <Info className="h-4 w-4 text-indigo-600" />
        <AlertDescription className="text-sm">
          A journey through my listening habits reveals interesting patterns influenced by life events, 
          from academic schedules to personal circumstances.
        </AlertDescription>
      </Alert>

      {/* Monthly Trends */}
      <Card className="hover:shadow-lg transition-shadow duration-300">
        <CardHeader className="border-b border-gray-100 bg-gradient-to-r from-gray-50 to-white">
          <CardTitle className="flex items-center gap-2 text-gray-800">
            <LineChart className="text-indigo-600" />
            Monthly Listening Trends
          </CardTitle>
          <CardDescription className="text-gray-600 mt-2">
            The monthly trends tell a story of changing circumstances:
            <ul className="mt-2 space-y-1 list-disc list-inside">
              <li>Peak in June (1,435 plays) during solo project work at IIT Bhilai</li>
              <li>October decline due to broken earphones</li>
              <li>November dip from premium subscription ending</li>
              <li>December shows reduced activity while being back home</li>
            </ul>
          </CardDescription>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={monthlyData}>
                <defs>
                  <linearGradient id="colorPlays" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#818cf8" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#818cf8" stopOpacity={0.1}/>
                  </linearGradient>
                </defs>
                <XAxis dataKey="month" stroke="#6b7280" />
                <YAxis stroke="#6b7280" />
                {/* <Tooltip content={<CustomTooltip />} /> */}
                <Area type="monotone" dataKey="plays" stroke="#4f46e5" fill="url(#colorPlays)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      {/* Weekly Pattern */}
      <Card className="hover:shadow-lg transition-shadow duration-300">
        <CardHeader className="border-b border-gray-100 bg-gradient-to-r from-gray-50 to-white">
          <CardTitle className="flex items-center gap-2 text-gray-800">
            <Clock className="text-indigo-600" />
            Weekly Listening Pattern
          </CardTitle>
          <CardDescription className="text-gray-600 mt-2">
            The weekly distribution reveals a clear leisure-time pattern:
            <ul className="mt-2 space-y-1 list-disc list-inside">
              <li>Saturday peaks at 1,403 plays, showing weekend leisure preference</li>
              <li>Tuesday follows with 1,387 plays, suggesting a productive mid-week routine</li>
              <li>Consistent activity maintains above 1,000 plays throughout the week</li>
            </ul>
          </CardDescription>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={weeklyData}>
                <XAxis dataKey="day" stroke="#6b7280" />
                <YAxis stroke="#6b7280" />
                {/* <Tooltip content={<CustomTooltip />} /> */}
                <Bar dataKey="plays" fill="#818cf8" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      {/* Time Distribution */}
      <Card className="hover:shadow-lg transition-shadow duration-300">
        <CardHeader className="border-b border-gray-100 bg-gradient-to-r from-gray-50 to-white">
          <CardTitle className="text-gray-800">Daily Time Distribution</CardTitle>
          <CardDescription className="text-gray-600 mt-2">
            The day is clearly divided into distinct listening periods:
            <ul className="mt-2 space-y-1 list-disc list-inside">
              <li>Afternoon dominates with {timeDistribution[1].percentage}% of plays, aligned with academic breaks</li>
              <li>Evening follows with {timeDistribution[2].percentage}% as leisure time begins after 5:30 PM</li>
              <li>Late night listening ({timeDistribution[3].percentage}%) indicates weekend schedule shifts</li>
              <li>Morning shows {timeDistribution[0].percentage}% activity during early academic hours</li>
            </ul>
          </CardDescription>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {timeDistribution.map((time, index) => (
              <div key={index} 
                   className={`rounded-xl p-4 bg-gradient-to-br ${time.gradient} border border-gray-100 
                             hover:shadow-md transition-all duration-300 transform hover:-translate-y-1`}>
                <div className="flex items-center justify-between mb-3">
                  {time.icon}
                  <span className="text-gray-800 font-medium">{time.period}</span>
                </div>
                <div className="text-3xl font-bold text-gray-800 mb-2">{time.percentage}%</div>
                <div className="space-y-1">
                  <p className="text-sm text-gray-600">{time.description}</p>
                  <p className="text-sm text-gray-500">{time.plays.toLocaleString()} plays</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Hourly Distribution */}
      <Card className="hover:shadow-lg transition-shadow duration-300">
        <CardHeader className="border-b border-gray-100 bg-gradient-to-r from-gray-50 to-white">
          <CardTitle className="text-gray-800">Hourly Distribution</CardTitle>
          <CardDescription className="text-gray-600 mt-2">
            The hourly breakdown reveals distinct patterns:
            <ul className="mt-2 space-y-1 list-disc list-inside">
              <li>Peak activity between 2-4 PM (690 plays at 2 PM) during academic breaks</li>
              <li>Secondary peak during early evening hours (6-9 PM)</li>
              <li>Minimal activity during early morning hours (4-6 AM)</li>
              <li>Consistent late-night listening from 12-2 AM, especially on weekends</li>
            </ul>
          </CardDescription>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={hourlyData}>
                <XAxis dataKey="hour" stroke="#6b7280" interval={2} angle={-45} textAnchor="end" height={60} />
                <YAxis stroke="#6b7280" />
                {/* <Tooltip content={<CustomTooltip />} /> */}
                <Bar dataKey="plays" fill="#818cf8" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      <Card className="hover:shadow-lg transition-shadow duration-300">
        <CardHeader className="border-b border-gray-100 bg-gradient-to-r from-gray-50 to-white">
          <CardTitle className="flex items-center gap-2 text-gray-800">
            <Info className="text-indigo-600" />
            Key Insights
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="prose prose-indigo">
            <ul className="space-y-2 list-disc list-inside text-gray-600">
              <li>Listening patterns strongly correlate with academic schedule, peaking during breaks and after classes</li>
              <li>Weekend behavior shows distinct patterns with later night activity and increased overall listening</li>
              <li>External factors significantly impact listening habits:
                <ul className="ml-6 mt-1 space-y-1 list-disc list-inside">
                  <li>Location changes (IIT Bhilai vs. home)</li>
                  <li>Technical issues (broken earphones)</li>
                  <li>Subscription status (premium vs. free)</li>
                </ul>
              </li>
              <li>Afternoon and evening hours dominate listening time, aligning with academic breaks and leisure periods</li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default TimeSeriesAnalysis;