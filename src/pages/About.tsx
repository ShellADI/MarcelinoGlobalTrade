
import { Navbar } from "@/components/Navbar";
import { useLanguage } from "@/hooks/use-language";

const AboutPage = () => {
  const { translate } = useLanguage();

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 py-8">
        <div className="container px-4 md:px-6">
          <h1 className="text-3xl font-bold mb-8">
            {translate("about.title")}
          </h1>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Mission */}
            <div className="space-y-4 p-6 bg-card rounded-lg shadow-sm">
              <h2 className="text-xl font-bold">{translate("about.mission")}</h2>
              <p className="text-muted-foreground">
                At Marcelino Global Trade we offer high-quality Christian religious articles to churches, stores, and homes to preserve the heritage of Christian craft and iconography. We promote ethical, handcrafted, and spritually inspired products with the help of women through skill development and home-based employment. We want to expand globally while staying rooted in service and integrity.
              </p>
            </div>
            
            {/* Story */}
            <div className="space-y-4 p-6 bg-card rounded-lg shadow-sm">
              <h2 className="text-xl font-bold">{translate("about.story")}</h2>
              <p className="text-muted-foreground">
                Founded in 2010 by a family of devoted Catholics, Blessed Threads Emporium began as a small workshop creating hand-crafted rosaries. Over the years, we've expanded our offerings while maintaining our commitment to quality and spiritual integrity.
              </p>
            </div>
            
            {/* Values */}
            <div className="space-y-4 p-6 bg-card rounded-lg shadow-sm">
              <h2 className="text-xl font-bold">{translate("about.values")}</h2>
              <p className="text-muted-foreground">
              At Marcelino, we proudly employ women artisans who work from home, allowing them to contribute to the family income while maintaining their responsibilities. Through this, we not only produce spiritually valuable items but also help build stronger communities led by empowered women.
              </p>
            </div>
          </div>
          
          {/* Team Section */}
          <section className="mt-16">
            <h2 className="text-2xl font-bold mb-8">Our Team</h2>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {/* Team Member 1 */}
              <div className="text-center">
                <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4">
                  <img 
                    src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHByb2ZpbGUlMjBwb3J0cmFpdHxlbnwwfHwwfHx8MA%3D%3D" 
                    alt="Maria Rodriguez"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-bold">Maria Rodriguez</h3>
                <p className="text-sm text-muted-foreground">Founder & Artisan</p>
              </div>
              
              {/* Team Member 2 */}
              <div className="text-center">
                <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4">
                  <img 
                    src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D" 
                    alt="John Teller"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-bold">John Teller</h3>
                <p className="text-sm text-muted-foreground">Religious Historian</p>
              </div>
              
              {/* Team Member 3 */}
              <div className="text-center">
                <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4">
                  <img 
                    src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHBvcnRyYWl0fGVufDB8fDB8fHww" 
                    alt="Sarah Kim"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-bold">Sarah Kim</h3>
                <p className="text-sm text-muted-foreground">Product Designer</p>
              </div>
            </div>
          </section>
        </div>
      </main>
      
      {/* Footer (Simple version) */}
      <footer className="py-6 border-t">
        <div className="container px-4 md:px-6 text-center">
          <p className="text-sm text-muted-foreground">
            © 2025 Blessed Threads Emporium. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default AboutPage;
