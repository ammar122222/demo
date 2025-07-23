import { Youtube, Github, Twitter, Mail, Globe } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">DE</span>
              </div>
              <span className="font-bold text-xl text-gradient-primary">
                DecentralEd
              </span>
            </div>
            <p className="text-muted-foreground text-sm mb-4">
              Revolutionizing education through decentralized content discovery 
              and multi-channel learning experiences.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-semibold text-card-foreground mb-4">Platform</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#channels" className="text-muted-foreground hover:text-primary transition-colors">Browse Channels</a></li>
              <li><a href="#matrix" className="text-muted-foreground hover:text-primary transition-colors">Interactive Matrix</a></li>
              <li><a href="#ages" className="text-muted-foreground hover:text-primary transition-colors">Age Groups</a></li>
              <li><a href="#topics" className="text-muted-foreground hover:text-primary transition-colors">Topics</a></li>
            </ul>
          </div>

          {/* Content */}
          <div>
            <h4 className="font-semibold text-card-foreground mb-4">Content</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Financial Literacy</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Cryptocurrency</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Investment Psychology</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Economics</a></li>
            </ul>
          </div>

          {/* Community */}
          <div>
            <h4 className="font-semibold text-card-foreground mb-4">Community</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Discord</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Reddit</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Newsletter</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Contributors</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row items-center justify-between">
          <div className="text-sm text-muted-foreground mb-4 md:mb-0">
            © 2024 DecentralEd. Building the future of decentralized learning.
          </div>
          <div className="flex items-center space-x-4 text-sm">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-1">
              <Globe className="w-4 h-4" />
              Global Platform
            </a>
            <span className="text-muted-foreground">•</span>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              Privacy Policy
            </a>
            <span className="text-muted-foreground">•</span>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};