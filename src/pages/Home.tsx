import { Navbar } from "@/components/Navbar";
import { ProductGallery } from "@/components/ProductGallery";
import { products } from "@/data/products";
import { useLanguage } from "@/hooks/use-language";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

// Optimized Image Component with Progressive Loading
const OptimizedImage = ({ 
  src, 
  alt, 
  className,
  priority = false 
}: {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(priority); // If priority, load immediately

  // Create optimized URLs
  const getOptimizedUrl = (width: number, quality: string = 'auto') => {
    return src.replace('/upload/', `/upload/f_auto,q_${quality},w_${width},c_fill,g_auto/`);
  };

  // Generate different sizes for responsive loading
  const optimizedSrc = getOptimizedUrl(800);
  const placeholderSrc = getOptimizedUrl(50, '10').replace('/upload/', '/upload/e_blur:300/');
  
  // Responsive srcSet
  const srcSet = `
    ${getOptimizedUrl(400)} 400w,
    ${getOptimizedUrl(800)} 800w,
    ${getOptimizedUrl(1200)} 1200w,
    ${getOptimizedUrl(1600)} 1600w
  `;

  // Intersection Observer for lazy loading (skip if priority)
  useEffect(() => {
    if (priority) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { 
        threshold: 0.1,
        rootMargin: '100px' // Start loading 100px before entering viewport
      }
    );

    const imgElement = document.getElementById(`img-${src.split('/').pop()}`);
    if (imgElement) {
      observer.observe(imgElement);
    }

    return () => observer.disconnect();
  }, [src, priority]);

  // Preload critical images
  useEffect(() => {
    if (priority) {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = optimizedSrc;
      document.head.appendChild(link);

      return () => {
        document.head.removeChild(link);
      };
    }
  }, [optimizedSrc, priority]);

  return (
    <div 
      id={`img-${src.split('/').pop()}`}
      className={`relative overflow-hidden ${className}`}
    >
      {/* Blur placeholder - always visible until main image loads */}
      <div
        className={`absolute inset-0 bg-cover bg-center transition-opacity duration-500 ${
          isLoaded ? 'opacity-0' : 'opacity-100'
        }`}
        style={{ 
          backgroundImage: `url(${placeholderSrc})`,
          filter: 'blur(2px)',
          transform: 'scale(1.1)' // Slightly scale to hide blur edges
        }}
      />

      {/* Main optimized image */}
      {(isInView || priority) && (
        <img
          src={optimizedSrc}
          srcSet={srcSet}
          sizes="(max-width: 768px) 400px, (max-width: 1024px) 800px, 1200px"
          alt={alt}
          onLoad={() => setIsLoaded(true)}
          loading={priority ? "eager" : "lazy"}
          className={`object-top w-full h-full object-cover transition-opacity duration-500 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
        />
      )}

      {/* Loading indicator (optional) */}
      {!isLoaded && (isInView || priority) && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/10">
          <div className="w-8 h-8 border-2 border-white/30 border-t-white rounded-full animate-spin" />
        </div>
      )}
    </div>
  );
};

const HomePage = () => {
  const { translate } = useLanguage();
  const featuredProducts = products.slice(0, 4);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-12 md:py-24 bg-gradient-to-b from-primary/10 to-background">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                  {translate("home.title")}
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  {translate("home.subtitle")}
                </p>
              </div>
              <div className="space-x-4">
                {/* <Button className="min-w-[150px]">
                  {translate("home.shop")}
                </Button> */}
              </div>
            </div>
          </div>
        </section>

        {/* Welcome Section */}
        <section className="py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                  {translate("home.welcome")}
                </h2>
                <p className="text-gray-500 dark:text-gray-400">
                  {translate("home.description")}
                </p>
              </div>
              <div className="aspect-video relative overflow-hidden rounded-lg">
                <OptimizedImage
                  src="https://res.cloudinary.com/drv5py5dk/image/upload/v1746525873/alessandro-bellone-rvJBpwEX-1Y-unsplash_zh1qbb.jpg"
                  alt="Church interior"
                  className="w-full h-full"
                  priority={true} // This image is above the fold, so load it immediately
                />
              </div>
            </div>
          </div>
        </section>

        {/* Featured Products */}
        <section className="py-12 md:py-24 bg-muted/50">
          <div className="container px-4 md:px-6">
            <ProductGallery
              products={featuredProducts}
              title={translate("home.featured")}
            />
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-6 md:py-10 border-t">
        <div className="container px-4 md:px-6">
          <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-4">
            <div className="space-y-4">
              <h3 className="text-lg font-medium">
                Marcelino Global Trade Pvt. Ltd.
              </h3>
              <ul className="space-y-2 text-sm">
                <li>© 2025 Marcelino Global Trade Pvt. Ltd.</li>
                <li>All rights reserved.</li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-medium">{translate("nav.home")}</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:underline">
                    {translate("home.featured")}
                  </a>
                </li>
                <li>
                  <Link to="/products" className="hover:underline">
                    {translate("products.title")}
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-medium">{translate("nav.about")}</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link to="/about" className="hover:underline">
                    {translate("about.mission")}
                  </Link>
                </li>
      
                <li>
                  <Link to="/about" className="hover:underline">
                    {translate("about.story")}
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-medium">
                {translate("nav.contact")}
              </h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:underline">
                    pinaro@marcelinoglobaltrade.com
                  </a>
                </li>
                <li>
                  <a href="tel:+918169671899" className="hover:underline">
                    81696-71899
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;