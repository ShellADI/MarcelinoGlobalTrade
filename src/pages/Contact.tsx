
import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useLanguage } from "@/hooks/use-language";

const ContactPage = () => {
  const { translate } = useLanguage();

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 py-8">
        <div className="container px-4 md:px-6">
          <h1 className="text-3xl font-bold mb-8">
            {translate("contact.title")}
          </h1>
          
          <div className="grid gap-8 md:grid-cols-2">
            {/* Contact Form */}
            <div className="space-y-6">
              <h2 className="text-xl font-bold">{translate("contact.form")}</h2>
              
              <form className="space-y-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    {translate("contact.name")}
                  </label>
                  <Input id="name" placeholder="Your name" />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    {translate("contact.email")}
                  </label>
                  <Input id="email" type="email" placeholder="Your email" />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    {translate("contact.message")}
                  </label>
                  <Textarea id="message" placeholder="Your message" className="min-h-[150px]" />
                </div>
                
                <Button className="w-full">{translate("contact.submit")}</Button>
              </form>
            </div>
            
            {/* Contact Information */}
            <div className="space-y-6">
              <h2 className="text-xl font-bold">Contact Information</h2>
              
              <div className="space-y-4">
                <div className="space-y-2">
                  <h3 className="font-medium">{translate("contact.address")}</h3>
                  <p className="text-muted-foreground">
                    123 Blessing Avenue<br />
                    Faith City, FC 12345<br />
                    United States
                  </p>
                </div>
                
                <div className="space-y-2">
                  <h3 className="font-medium">{translate("contact.phone")}</h3>
                  <p className="text-muted-foreground">
                    (555) 123-4567
                  </p>
                </div>
                
                <div className="space-y-2">
                  <h3 className="font-medium">Email</h3>
                  <p className="text-muted-foreground">
                    info@blessedthreads.com
                  </p>
                </div>
                
                <div className="space-y-2">
                  <h3 className="font-medium">{translate("contact.hours")}</h3>
                  <p className="text-muted-foreground">
                    Monday - Friday: 9:00 AM - 5:00 PM<br />
                    Saturday: 10:00 AM - 4:00 PM<br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
              
              {/* Map Placeholder */}
              <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                <p className="text-muted-foreground">Map Placeholder</p>
              </div>
            </div>
          </div>
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

export default ContactPage;
