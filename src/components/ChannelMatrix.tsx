import { useState } from 'react';
import { Play, Users, BookOpen, TrendingUp, Sparkles, Filter, Network } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import teenCryptoThumb from '@/assets/teen-crypto-thumb.jpg';
import kidsMoneyThumb from '@/assets/kids-money-thumb.jpg';
import consciousnessThumb from '@/assets/consciousness-thumb.jpg';
import chineseFinanceThumb from '@/assets/chinese-finance-thumb.jpg';

interface Channel {
  id: string;
  title: string;
  description: string;
  ageGroup: string;
  topics: string[];
  subscriberCount: string;
  videoCount: number;
  language: string;
  status: 'live' | 'coming-soon' | 'planning';
  thumbnail: string;
  color: string;
}

// Sample channel data - in real app this would come from CMS/API
const channels: Channel[] = [
  {
    id: '1',
    title: 'Teen Crypto Basics',
    description: 'Understanding digital assets and cryptocurrency fundamentals for teenagers',
    ageGroup: '13-18',
    topics: ['Cryptocurrency', 'Digital Assets', 'Financial Literacy'],
    subscriberCount: '12.5K',
    videoCount: 24,
    language: 'EN',
    status: 'live',
    thumbnail: teenCryptoThumb,
    color: 'from-blue-500 to-purple-600'
  },
  {
    id: '2',
    title: 'Money Stories for Kids',
    description: 'Cartoon-based explanations of financial concepts for young children',
    ageGroup: '6-12',
    topics: ['Basic Finance', 'Savings', 'Money Concepts'],
    subscriberCount: '8.2K',
    videoCount: 18,
    language: 'EN',
    status: 'live',
    thumbnail: kidsMoneyThumb,
    color: 'from-green-500 to-teal-600'
  },
  {
    id: '3',
    title: 'Investor Consciousness',
    description: 'Exploring structures, energy, and essential awareness for investors',
    ageGroup: '25+',
    topics: ['Investment Psychology', 'Consciousness', 'Financial Philosophy'],
    subscriberCount: '15.7K',
    videoCount: 32,
    language: 'EN',
    status: 'live',
    thumbnail: consciousnessThumb,
    color: 'from-purple-600 to-pink-600'
  },
  {
    id: '4',
    title: '金融素养中文版',
    description: 'Chinese language financial literacy for global Chinese-speaking community',
    ageGroup: '16+',
    topics: ['Financial Literacy', 'Chinese Market', 'Global Finance'],
    subscriberCount: '9.8K',
    videoCount: 15,
    language: '中文',
    status: 'live',
    thumbnail: chineseFinanceThumb,
    color: 'from-red-500 to-orange-600'
  },
  {
    id: '5',
    title: 'Fiat Money History',
    description: 'Deep dive into the evolution and impact of fiat currency systems',
    ageGroup: '18+',
    topics: ['Economics', 'History', 'Monetary Systems'],
    subscriberCount: 'Coming Soon',
    videoCount: 0,
    language: 'EN',
    status: 'coming-soon',
    thumbnail: '/api/placeholder/300/200',
    color: 'from-amber-500 to-orange-600'
  },
  {
    id: '6',
    title: 'Regional Finance Series',
    description: 'Country-specific financial education tailored to local markets',
    ageGroup: '18+',
    topics: ['Regional Finance', 'Local Markets', 'Cultural Context'],
    subscriberCount: 'Planning',
    videoCount: 0,
    language: 'Multi',
    status: 'planning',
    thumbnail: '/api/placeholder/300/200',
    color: 'from-indigo-500 to-blue-600'
  }
];

export const ChannelMatrix = () => {
  const [selectedAge, setSelectedAge] = useState<string>('all');
  const [selectedTopic, setSelectedTopic] = useState<string>('all');
  const [selectedStatus, setSelectedStatus] = useState<string>('all');

  const ageGroups = ['all', '6-12', '13-18', '16+', '18+', '25+'];
  const allTopics = Array.from(new Set(channels.flatMap(c => c.topics)));
  const statuses = ['all', 'live', 'coming-soon', 'planning'];

  const filteredChannels = channels.filter(channel => {
    const ageMatch = selectedAge === 'all' || channel.ageGroup === selectedAge;
    const topicMatch = selectedTopic === 'all' || channel.topics.includes(selectedTopic);
    const statusMatch = selectedStatus === 'all' || channel.status === selectedStatus;
    return ageMatch && topicMatch && statusMatch;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'live': return 'bg-green-500';
      case 'coming-soon': return 'bg-amber-500';
      case 'planning': return 'bg-gray-500';
      default: return 'bg-gray-500';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'live': return 'Live';
      case 'coming-soon': return 'Coming Soon';
      case 'planning': return 'In Planning';
      default: return 'Unknown';
    }
  };

  return (
    <section id="channels" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gradient-primary mb-4">
            Channel Matrix
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore our growing network of educational channels. Each node represents 
            a unique learning pathway designed for specific age groups and interests.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-4 justify-center mb-8 p-4 bg-card rounded-xl border border-border">
          <div className="flex items-center gap-2">
            <Filter className="w-4 h-4 text-muted-foreground" />
            <span className="text-sm font-medium text-muted-foreground">Filters:</span>
          </div>
          
          {/* Age Filter */}
          <div className="flex flex-wrap gap-2">
            {ageGroups.map(age => (
              <Button
                key={age}
                variant={selectedAge === age ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedAge(age)}
                className="text-xs"
              >
                {age === 'all' ? 'All Ages' : age}
              </Button>
            ))}
          </div>

          {/* Status Filter */}
          <div className="flex flex-wrap gap-2">
            {statuses.map(status => (
              <Button
                key={status}
                variant={selectedStatus === status ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedStatus(status)}
                className="text-xs"
              >
                {status === 'all' ? 'All Status' : getStatusText(status)}
              </Button>
            ))}
          </div>
        </div>

        {/* Channel Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredChannels.map(channel => (
            <Card key={channel.id} className="card-channel group">
              {/* Channel Header */}
              <div className="relative mb-4">
                <div className={`h-32 rounded-lg relative overflow-hidden`}>
                  {/* Background Image */}
                  {channel.thumbnail && !channel.thumbnail.startsWith('/api/') ? (
                    <img 
                      src={channel.thumbnail} 
                      alt={channel.title}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className={`w-full h-full bg-gradient-to-br ${channel.color}`}></div>
                  )}
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/30"></div>
                  
                  {/* Play Button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Play className="w-12 h-12 text-white z-10 group-hover:scale-110 transition-transform" />
                  </div>
                  
                  {/* Status Badge */}
                  <div className="absolute top-3 right-3">
                    <Badge className={`${getStatusColor(channel.status)} text-white text-xs`}>
                      {getStatusText(channel.status)}
                    </Badge>
                  </div>
                  
                  {/* Language Badge */}
                  <div className="absolute top-3 left-3">
                    <Badge variant="secondary" className="text-xs">
                      {channel.language}
                    </Badge>
                  </div>
                </div>
              </div>

              {/* Channel Info */}
              <div className="space-y-3">
                <div>
                  <h3 className="font-semibold text-lg text-card-foreground group-hover:text-primary transition-colors">
                    {channel.title}
                  </h3>
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {channel.description}
                  </p>
                </div>

                {/* Topics */}
                <div className="flex flex-wrap gap-1">
                  {channel.topics.slice(0, 3).map(topic => (
                    <Badge key={topic} variant="outline" className="text-xs">
                      {topic}
                    </Badge>
                  ))}
                </div>

                {/* Stats */}
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    <span>{channel.subscriberCount}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <BookOpen className="w-4 h-4" />
                    <span>{channel.videoCount} videos</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Sparkles className="w-4 h-4" />
                    <span>{channel.ageGroup}</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2 pt-2">
                  <Button 
                    className="flex-1"
                    disabled={channel.status !== 'live'}
                  >
                    <Play className="w-4 h-4 mr-2" />
                    {channel.status === 'live' ? 'Watch Now' : 'Coming Soon'}
                  </Button>
                  <Button variant="outline" size="sm">
                    <TrendingUp className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Matrix View Button */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="btn-secondary">
            <Network className="w-5 h-5 mr-2" />
            View Interactive Matrix
          </Button>
        </div>
      </div>
    </section>
  );
};