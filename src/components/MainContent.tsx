// src/components/MainContent.jsx
import KeyMetrics from './KeyMetrics.tsx';
import TimeSeriesAnalysis from './Analysis/TimeSeriesAnalysis.tsx';
import FavoritesAnalysis from './Analysis/FavoritesAnalysis.tsx';
import SessionAnalysis from './Analysis/SessionAnalysis.tsx';
import DiscoveryAnalysis from './Analysis/DiscoveryAnalysis.tsx';
import CorrelationAnalysis from './Analysis/CorrelationAnalysis.tsx';
import ClusteringAnalysis from './Analysis/ClusteringAnalysis.tsx';

function MainContent({ activeTab }: {activeTab: string}) {
  return (
    <main className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
      {/* <KeyMetrics /> */}
      {activeTab === 'time' && <TimeSeriesAnalysis />}
      {activeTab === 'favorites' && <FavoritesAnalysis />}
      {activeTab === 'sessions' && <SessionAnalysis />}
      {activeTab === 'correlations' && <CorrelationAnalysis />}
      {/* {activeTab === 'discovery' && <DiscoveryAnalysis />} */}
      {activeTab === 'clusters' && <ClusteringAnalysis />}
    </main>
  );
}

export default MainContent;