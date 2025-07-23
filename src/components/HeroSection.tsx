import { Play, Network, Globe, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

export const HeroSection = () => {
  return (
    <section className="pt-20 pb-16 hero-bg text-primary-foreground relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 border border-primary-foreground/20 rounded-full"></div>
        <div className="absolute top-40 right-20 w-24 h-24 border border-primary-foreground/20 rounded-full"></div>
        <div className="absolute bottom-20 left-1/3 w-20 h-20 border border-primary-foreground/20 rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Decentralized
            <span className="block text-accent-glow">Learning Matrix</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90 max-w-3xl mx-auto leading-relaxed">
            Navigate knowledge freely through interconnected YouTube channels. 
            <span className="block mt-2">
              No linear paths, just pure discovery across age groups and topics.
            </span>
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              className="btn-hero group"
              size="lg"
            >
              <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
              Explore Channels
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="bg-primary-foreground/10 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground hover:text-primary"
            >
              <Network className="w-5 h-5 mr-2" />
              View Matrix
            </Button>
          </div>

          {/* Feature Cards */}
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <Card className="bg-primary-foreground/10 backdrop-blur-sm border-primary-foreground/20 p-6 text-center">
              <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-accent-foreground" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Multi-Age Learning</h3>
              <p className="text-primary-foreground/80 text-sm">
                From 6+ children's content to adult financial consciousness
              </p>
            </Card>

            <Card className="bg-primary-foreground/10 backdrop-blur-sm border-primary-foreground/20 p-6 text-center">
              <div className="w-12 h-12 bg-secondary-glow rounded-lg flex items-center justify-center mx-auto mb-4">
                <Network className="w-6 h-6 text-secondary-foreground" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Node-Based Discovery</h3>
              <p className="text-primary-foreground/80 text-sm">
                Connect ideas across channels without rigid course structures
              </p>
            </Card>

            <Card className="bg-primary-foreground/10 backdrop-blur-sm border-primary-foreground/20 p-6 text-center">
              <div className="w-12 h-12 bg-accent-glow rounded-lg flex items-center justify-center mx-auto mb-4">
                <Globe className="w-6 h-6 text-accent-foreground" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Global Access</h3>
              <p className="text-primary-foreground/80 text-sm">
                Multi-language support for worldwide educational reach
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};