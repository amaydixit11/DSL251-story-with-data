import React from 'react';
import { GitGraph, PieChart, BarChart3, Info, TrendingUp } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const clusters = [
  {
    id: 1,
    size: 2,
    percentage: 8,
    artists: "Niall Horan, One Direction",
    characteristics: "Boy bands and solo pop artists with strong fan following",
    pattern: "Peak listening during evening hours"
  },
  {
    id: 2,
    size: 1,
    percentage: 4,
    artists: "David Kushner",
    characteristics: "Indie folk artist with viral hits",
    pattern: "Consistent listening throughout day"
  },
  {
    id: 3,
    size: 2,
    percentage: 8,
    artists: "Rashid Ali, Sachin-Jigar",
    characteristics: "Indian music composers and performers",
    pattern: "Strong weekend listening patterns"
  },
  {
    id: 4,
    size: 10,
    percentage: 40,
    artists: "Ariana Grande, Chris Brown, Duncan Laurence, H.E.R., Khalid",
    characteristics: "Mainstream pop and R&B artists",
    pattern: "High activity during peak hours"
  },
  {
    id: 5,
    size: 10,
    percentage: 40,
    artists: "AUR, Aditya Rikhari, Anuv Jain, King, Lily King",
    characteristics: "Independent and emerging artists",
    pattern: "Diverse listening patterns across time zones"
  }
];

const distributionData = clusters.map(cluster => ({
  name: `Cluster ${cluster.id}`,
  artists: cluster.size,
  percentage: cluster.percentage
}));

const ClusteringAnalysis = () => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Total Clusters</CardTitle>
            <GitGraph className="h-4 w-4 text-blue-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">5</div>
            <p className="text-xs text-gray-500">Optimal clustering based on elbow method</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Total Artists</CardTitle>
            <PieChart className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">25</div>
            <p className="text-xs text-gray-500">Across all clusters</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Largest Cluster Size</CardTitle>
            <BarChart3 className="h-4 w-4 text-purple-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">10</div>
            <p className="text-xs text-gray-500">Clusters 4 & 5</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Clustering Coverage</CardTitle>
            <TrendingUp className="h-4 w-4 text-red-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">80%</div>
            <p className="text-xs text-gray-500">In main clusters (4 & 5)</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Cluster Distribution</CardTitle>
          </CardHeader>
          <img src="/clustering.png" />
          <CardContent>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={distributionData}>
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="artists" fill="#4f46e5" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Cluster Details</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {clusters.map((cluster) => (
                <div key={cluster.id} className="bg-gray-50 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-medium text-gray-900">Cluster {cluster.id}</h4>
                    <span className="text-sm bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                      {cluster.percentage}% of total
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 mb-2">Artists: {cluster.artists}</p>
                  <p className="text-sm text-gray-600 mb-2">{cluster.characteristics}</p>
                  <div className="text-xs text-gray-500 flex items-center">
                    <Info className="h-3 w-3 mr-1" />
                    {cluster.pattern}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Key Findings</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <h4 className="font-medium text-gray-900">Clustering Insights</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Clear separation between mainstream and indie artists</li>
                <li>• Two dominant clusters containing 80% of artists</li>
                <li>• Distinct temporal listening patterns across clusters</li>
                <li>• Genre-based clustering evident in distribution</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h4 className="font-medium text-gray-900">Pattern Analysis</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Mainstream artists show consistent daily patterns</li>
                <li>• Independent artists have more diverse listening times</li>
                <li>• Weekend vs weekday patterns vary by cluster</li>
                <li>• Time zone influence visible in larger clusters</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ClusteringAnalysis;