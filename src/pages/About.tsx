
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
              <p className="text-muted-foreground">{translate("about.missionTxt")}</p>
            </div>
            
            {/* Story */}
            <div className="space-y-4 p-6 bg-card rounded-lg shadow-sm">
              <h2 className="text-xl font-bold">{translate("about.story")}</h2>
              <p className="text-muted-foreground">{translate("about.storyTxt")}</p>
            </div>
            
            {/* Values */}
            <div className="space-y-4 p-6 bg-card rounded-lg shadow-sm">
              <h2 className="text-xl font-bold">{translate("about.values")}</h2>
              <p className="text-muted-foreground">{translate("about.valuesTxt")}</p>
            </div>
          </div>
          
          {/* Team Section */}
          <section className="mt-16">
            <h2 className="text-2xl font-bold mb-8">Our Team</h2>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-2">
              {/* Team Member 1 */}
              <div className="text-center">
                <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4">
                  <img 
                    src="https://res.cloudinary.com/drv5py5dk/image/upload/userImg_nczskr.jpg" 
                    alt="blank user"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-bold">Surojit Pinaro</h3>
                <p className="text-sm text-muted-foreground">Director</p>
              </div>
              
              {/* Team Member 2 */}
              {/* <div className="text-center">
                <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4">
                  <img 
                    src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D" 
                    alt="John Teller"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-bold">John Teller</h3>
                <p className="text-sm text-muted-foreground">Religious Historian</p>
              </div> */}
              
              {/* Team Member 3 */}
              <div className="text-center">
                <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4">
                  <img 
                    src="https://res.cloudinary.com/drv5py5dk/image/upload/userImg_nczskr.jpg" 
                    alt="blank user"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-bold">Swapna Pinaro</h3>
                <p className="text-sm text-muted-foreground">Director</p>
              </div>
            </div>
          </section>
        </div>
      </main>
      
      {/* Footer (Simple version) */}
      <footer className="py-6 border-t">
        <div className="container px-4 md:px-6 text-center">
          <p className="text-sm text-muted-foreground">
            © 2025 Marcelino Global Trade Private Limited. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default AboutPage;
