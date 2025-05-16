
import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { ProductGallery } from "@/components/ProductGallery";
import { products } from "@/data/products";
import { useLanguage } from "@/hooks/use-language";

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
                <Button className="min-w-[150px]">
                  {translate("home.shop")}
                </Button>
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
                <img 
                  src="https://res.cloudinary.com/drv5py5dk/image/upload/v1746525873/alessandro-bellone-rvJBpwEX-1Y-unsplash_zh1qbb.jpg" 
                  alt="Church interior"
                  className="object-cover object-top w-full h-full"
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
              <h3 className="text-lg font-medium">Marcelino Global Trade Pvt. Ltd.</h3>
              <ul className="space-y-2 text-sm">
                <li>© 2025 Marcelino Global Trade Pvt. Ltd.</li>
                <li>All rights reserved.</li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-medium">{translate("nav.home")}</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:underline">{translate("home.featured")}</a></li>
                <li><a href="/products" className="hover:underline">{translate("products.title")}</a></li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-medium">{translate("nav.about")}</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="/about" className="hover:underline">{translate("about.mission")}</a></li>
                <li><a href="/about" className="hover:underline">{translate("about.story")}</a></li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-medium">{translate("nav.contact")}</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:underline">info@blessedthreads.com</a></li>
                <li><a href="tel:+919341424022" className="hover:underline">93414-24022</a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
