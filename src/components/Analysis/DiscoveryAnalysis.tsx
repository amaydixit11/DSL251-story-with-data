import { TrendingUp } from 'lucide-react';

const artistLoyalty = [
  { 
    name: "Lily Kincade",
    score: 2.44,
    description: "Highest loyalty score with consistent plays"
  },
  {
    name: "Shankar Mahadevan",
    score: 2.1,
    description: "Strong following across months"
  },
];



function DiscoveryAnalysis() {
    return (
      <div className="space-y-8">
        <section className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-6 flex items-center">
            <TrendingUp className="mr-2 text-indigo-600" />
            Discovery & Engagement
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-medium mb-4">Artist Discovery Rate</h3>
              <img 
                src="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=600"
                alt="Artist Discovery Rate"
                className="rounded-lg w-full"
              />
              <p className="mt-4 text-gray-600">
                Sharp increase in new artist discoveries during June 2024
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-4">Artist Loyalty Scores</h3>
              <div className="space-y-4">
                {artistLoyalty.map((artist, index) => (
                  <div key={index} className="bg-gray-50 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium text-gray-900">{artist.name}</span>
                      <span className="text-lg font-semibold text-indigo-600">
                        {artist.score.toFixed(2)}
                      </span>
                    </div>
                    <div className="mt-2">
                      <div className="h-2 bg-gray-200 rounded-full">
                        <div 
                          className="h-2 bg-indigo-600 rounded-full"
                          style={{ width: `${(artist.score / 2.44) * 100}%` }}
                        />
                      </div>
                    </div>
                    <p className="mt-2 text-sm text-gray-600">{artist.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
  

export default DiscoveryAnalysis
