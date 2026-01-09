import { Phone } from "lucide-react";

const Header = () => {
  const handleBookCall = () => {
    console.log("Book call clicked - integrate Calendly here");
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border/50">
      <div className="container-wide">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2">
            <span className="text-2xl font-heading text-accent">ZoroFlow</span>
          </a>

          {/* CTA Button */}
          <button
            onClick={handleBookCall}
            className="hidden sm:flex items-center gap-2 px-5 py-2.5 bg-primary text-primary-foreground rounded-lg font-semibold text-sm hover:bg-primary/90 transition-all shadow-sm hover:shadow-md"
          >
            <Phone className="w-4 h-4" />
            <span>Book Free Call</span>
          </button>

          {/* Mobile CTA */}
          <button
            onClick={handleBookCall}
            className="sm:hidden flex items-center justify-center w-10 h-10 bg-primary text-primary-foreground rounded-lg"
          >
            <Phone className="w-5 h-5" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
