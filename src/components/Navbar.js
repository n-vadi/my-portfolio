import { Menu, X } from 'lucide-react';

export default function Navbar({ mobileMenuOpen, setMobileMenuOpen, scrollToSection, isExperienceDetail, onBackToPortfolio }) {
  if (isExperienceDetail) {
    return (
      <nav className="fixed top-0 w-full bg-white/70 backdrop-blur-md z-50 border-b border-stone-200 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <button 
              onClick={onBackToPortfolio}
              className="text-2xl font-serif italic text-stone-800 hover:text-teal-600 transition-colors"
            >
              Nikki
            </button>
            
            <button
              onClick={onBackToPortfolio}
              className="text-stone-700 hover:text-teal-600 transition-colors font-light tracking-wide"
            >
              ← Back to Portfolio
            </button>
          </div>
        </div>
      </nav>
    );
  }

  return (
    <nav className="fixed top-0 w-full bg-white/70 backdrop-blur-md z-50 border-b border-stone-200 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <span className="text-2xl font-serif italic text-stone-800">
            nikki
          </span>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {['about', 'experience', 'projects', 'skills', 'contact'].map((item) => (
              <button
                key={item}
                onClick={() => {
                  if (item === 'experience') {
                    document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' });
                  } else {
                    scrollToSection(item);
                  }
                }}
                className="text-stone-700 hover:text-teal-600 transition-colors capitalize font-light tracking-wide"
              >
                {item}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-stone-700"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-stone-200">
          <div className="px-4 py-6 space-y-4">
            {['about', 'experience', 'projects', 'skills', 'contact'].map((item) => (
              <button
                key={item}
                onClick={() => {
                  if (item === 'experience') {
                    document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' });
                    setMobileMenuOpen(false);
                  } else {
                    scrollToSection(item);
                  }
                }}
                className="block w-full text-left text-stone-700 hover:text-teal-600 transition-colors capitalize py-2 font-light tracking-wide"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}

