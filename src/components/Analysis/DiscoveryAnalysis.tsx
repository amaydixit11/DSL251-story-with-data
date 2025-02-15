import React, { ReactNode } from 'react';
import { 
  Database, 
  FileSearch, 
  Filter, 
  LineChart, 
  Brain,
  ChevronRight
} from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';

interface AnalysisSectionProps {
  icon: ReactNode;
  title: string;
  description: string;
  children: ReactNode;
  accentColor: string;
}

const AnalysisSection: React.FC<AnalysisSectionProps> = ({ 
  icon, 
  title, 
  description, 
  children,
  accentColor
}) => (
  <Card className="mb-8 hover:shadow-lg transition-shadow duration-300 relative overflow-hidden">
    <div className={`absolute top-0 left-0 w-1 h-full ${accentColor}`} />
    <CardHeader className="flex flex-row items-start gap-4 pb-2">
      <div className={`p-2 rounded-lg ${accentColor} bg-opacity-10`}>
        {icon}
      </div>
      <div className="space-y-1">
        <CardTitle className="text-xl">{title}</CardTitle>
        <p className="text-sm text-gray-500">{description}</p>
      </div>
    </CardHeader>
    <CardContent>
      <div className="space-y-4 text-gray-700">
        {children}
      </div>
    </CardContent>
  </Card>
);

interface ListItemProps {
  items: string[];
  className?: string;
}

const ListItems: React.FC<ListItemProps> = ({ items, className = "" }) => (
  <ul className={`space-y-2 ${className}`}>
    {items.map((item, index) => (
      <li key={index} className="flex items-start gap-2">
        <ChevronRight className="w-4 h-4 mt-1 text-gray-400" />
        <span>{item}</span>
      </li>
    ))}
  </ul>
);

const DiscoveryAnalysis: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto p-6 space-y-8">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold text-gray-800">Data Analysis Process</h1>
        <p className="text-lg text-gray-600">
          A comprehensive breakdown of our Spotify listening data analysis methodology
        </p>
        <Alert className="bg-blue-50 border-blue-200">
          <AlertDescription>
            Analysis period: April to December 2024 | Data source: Last.fm integration with Spotify
          </AlertDescription>
        </Alert>
      </div>

      <div className="grid gap-8">
        <AnalysisSection 
          icon={<Database className="w-6 h-6 text-blue-600" />}
          title="Data Collection"
          description="Gathering and organizing raw listening history data"
          accentColor="bg-blue-600"
        >
          <div className="space-y-4">
            <div className="p-4 bg-gray-50 rounded-lg">
              <h3 className="font-medium mb-2">Data Sources</h3>
              <ListItems 
                items={[
                  "Artist information and metadata",
                  "Album details and release data",
                  "Track titles and durations",
                  "Precise listening timestamps"
                ]}
              />
            </div>
            <div className="flex gap-4">
              <div className="flex-1 p-4 bg-blue-50 rounded-lg">
                <p className="font-medium">Collection Method</p>
                <p className="text-sm mt-1">lastfm-to-csv tool for structured CSV export</p>
              </div>
              <div className="flex-1 p-4 bg-blue-50 rounded-lg">
                <p className="font-medium">Data Format</p>
                <p className="text-sm mt-1">Standardized CSV with consistent field structure</p>
              </div>
            </div>
          </div>
        </AnalysisSection>

        <AnalysisSection 
          icon={<FileSearch className="w-6 h-6 text-green-600" />}
          title="Data Cleaning"
          description="Ensuring data quality and consistency"
          accentColor="bg-green-600"
        >
          <div className="grid grid-cols-2 gap-4">
            {[
              {
                title: "Data Validation",
                items: [
                  "Duplicate entry removal",
                  "Missing value detection",
                  "Data format verification"
                ]
              },
              {
                title: "Data Standardization",
                items: [
                  "Timestamp conversion to IST",
                  "Text field normalization",
                  "Consistent formatting"
                ]
              }
            ].map((section, index) => (
              <div key={index} className="p-4 bg-gray-50 rounded-lg">
                <h3 className="font-medium mb-2">{section.title}</h3>
                <ListItems items={section.items} />
              </div>
            ))}
          </div>
        </AnalysisSection>

        <AnalysisSection 
          icon={<Filter className="w-6 h-6 text-purple-600" />}
          title="Pre-processing"
          description="Transforming raw data into analysis-ready format"
          accentColor="bg-purple-600"
        >
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-gray-50 rounded-lg">
                <h3 className="font-medium mb-2">Time-based Features</h3>
                <ListItems items={[
                  "Hour of day extraction",
                  "Day of week calculation",
                  "Month and season derivation",
                  "Session duration computation"
                ]} />
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <h3 className="font-medium mb-2">Categorical Features</h3>
                <ListItems items={[
                  "Time of day categorization",
                  "Session type classification",
                  "Genre grouping",
                  "Listening pattern labeling"
                ]} />
              </div>
            </div>
          </div>
        </AnalysisSection>

        <AnalysisSection 
          icon={<LineChart className="w-6 h-6 text-orange-600" />}
          title="Data Exploration"
          description="Uncovering patterns and insights in the processed data"
          accentColor="bg-orange-600"
        >
          <div className="grid grid-cols-3 gap-4">
            {[
              {
                title: "Temporal Analysis",
                items: [
                  "Daily listening trends",
                  "Monthly patterns",
                  "Peak hour identification"
                ]
              },
              {
                title: "Content Analysis",
                items: [
                  "Top artists and songs",
                  "Genre distribution",
                  "Playlist patterns"
                ]
              },
              {
                title: "Behavioral Analysis",
                items: [
                  "Session characteristics",
                  "Listening habits",
                  "User preferences"
                ]
              }
            ].map((section, index) => (
              <div key={index} className="p-4 bg-gray-50 rounded-lg">
                <h3 className="font-medium mb-2">{section.title}</h3>
                <ListItems items={section.items} />
              </div>
            ))}
          </div>
        </AnalysisSection>

        <AnalysisSection 
          icon={<Brain className="w-6 h-6 text-red-600" />}
          title="Data Modeling"
          description="Advanced analysis and pattern detection"
          accentColor="bg-red-600"
        >
          <div className="space-y-4">
            <div className="grid grid-cols-3 gap-4">
              {[
                {
                  title: "Correlation Analysis",
                  items: [
                    "Artist correlations",
                    "Song transitions",
                    "Time-based patterns"
                  ]
                },
                {
                  title: "Clustering Analysis",
                  items: [
                    "Artist clustering",
                    "Session patterns",
                    "Behavioral groups"
                  ]
                },
                {
                  title: "Engagement Metrics",
                  items: [
                    "Loyalty scores",
                    "Discovery rates",
                    "Consistency measures"
                  ]
                }
              ].map((section, index) => (
                <div key={index} className="p-4 bg-gray-50 rounded-lg">
                  <h3 className="font-medium mb-2">{section.title}</h3>
                  <ListItems items={section.items} />
                </div>
              ))}
            </div>
          </div>
        </AnalysisSection>
      </div>
    </div>
  );
};

export default DiscoveryAnalysis;