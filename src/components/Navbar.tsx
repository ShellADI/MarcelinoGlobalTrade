
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";
import { LanguageToggle } from "@/components/LanguageToggle";
import { Menu, X, ShoppingCart } from "lucide-react";
import { useLanguage } from "@/hooks/use-language";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { translate } = useLanguage();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-15 items-center justify-between px-4 sm:px-6 md:px-8">
        <div className="flex items-center gap-1">
          <Link to="/" className="font-serif text-xl font-bold">
            Marcelino
          </Link>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/" className="text-sm font-medium transition-colors hover:text-primary">
            {translate("nav.home")}
          </Link>
          <Link to="/about" className="text-sm font-medium transition-colors hover:text-primary">
            {translate("nav.about")}
          </Link>
          <Link to="/products" className="text-sm font-medium transition-colors hover:text-primary">
            {translate("nav.products")}
          </Link>
          <Link to="/contact" className="text-sm font-medium transition-colors hover:text-primary">
            {translate("nav.contact")}
          </Link>
        </nav>
        
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <LanguageToggle />
          <Button variant="ghost" size="icon">
            <ShoppingCart className="h-[1.2rem] w-[1.2rem]" />
            <span className="sr-only">Shopping cart</span>
          </Button>
          
          {/* Mobile Menu Button */}
          <Button variant="ghost" size="icon" className="md:hidden" onClick={toggleMenu}>
            {isMenuOpen ? <X className="h-[1.2rem] w-[1.2rem]" /> : <Menu className="h-[1.2rem] w-[1.2rem]" />}
            <span className="sr-only">Toggle menu</span>
          </Button>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden">
          <nav className="flex flex-col space-y-4 p-4 border-t bg-background">
            <Link 
              to="/" 
              className="text-sm font-medium transition-colors hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              {translate("nav.home")}
            </Link>
            <Link 
              to="/about" 
              className="text-sm font-medium transition-colors hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              {translate("nav.about")}
            </Link>
            <Link 
              to="/products" 
              className="text-sm font-medium transition-colors hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              {translate("nav.products")}
            </Link>
            <Link 
              to="/contact" 
              className="text-sm font-medium transition-colors hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              {translate("nav.contact")}
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
