import { useState } from 'react';
import { Globe, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [language, setLanguage] = useState('EN');

  const toggleLanguage = () => {
    setLanguage(language === 'EN' ? '中文' : 'EN');
  };

  return (
    <header className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">DE</span>
            </div>
            <span className="font-bold text-xl text-gradient-primary">
              DecentralEd
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#channels" className="nav-link">
              Channels
            </a>
            <a href="#matrix" className="nav-link">
              Matrix
            </a>
            <a href="#ages" className="nav-link">
              Age Groups
            </a>
            <a href="#topics" className="nav-link">
              Topics
            </a>
          </nav>

          {/* Language Toggle & Mobile Menu */}
          <div className="flex items-center space-x-4">
            <Button
              variant="outline"
              size="sm"
              onClick={toggleLanguage}
              className="flex items-center space-x-2"
            >
              <Globe className="w-4 h-4" />
              <span>{language}</span>
            </Button>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-border pt-4">
            <div className="flex flex-col space-y-3">
              <a href="#channels" className="text-foreground hover:text-primary transition-colors">
                Channels
              </a>
              <a href="#matrix" className="text-foreground hover:text-primary transition-colors">
                Matrix
              </a>
              <a href="#ages" className="text-foreground hover:text-primary transition-colors">
                Age Groups
              </a>
              <a href="#topics" className="text-foreground hover:text-primary transition-colors">
                Topics
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};