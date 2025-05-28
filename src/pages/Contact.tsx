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
                  <Textarea
                    id="message"
                    placeholder="Your message"
                    className="min-h-[150px]"
                  />
                </div>

                <Button className="w-full">
                  {translate("contact.submit")}
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              <h2 className="text-xl font-bold">Contact Information</h2>
              <div className="space-y-4">
                <div className="space-y-2">
                  <h3 className="font-medium">
                    {translate("contact.address")}
                  </h3>
                  <p className="text-muted-foreground">
                    FLAT 103, B,WING, SWARN JEEVAN, 1ST FLOOR,SR NO 110/3B,
                    111/14
                    <br />
                    NEAR RTO TALOJA PHASE 2, Taluka Panvel , RAIGAD, Taloja
                    A.V., Panvel, Raigarh(MH)- 410208
                    <br />
                    Maharashtra, India
                  </p>
                </div>

                <div className="space-y-2">
                  <h3 className="font-medium">{translate("contact.phone")}</h3>
                  <p className="text-muted-foreground">+91 81696 71899</p>
                </div>

                <div className="space-y-2">
                  <h3 className="font-medium">Email</h3>
                  <p className="text-muted-foreground">
                    pinaro@marcelinoglobaltrade.com{" "}
                  </p>
                </div>

                <div className="space-y-2">
                  <h3 className="font-medium">{translate("contact.hours")}</h3>
                  <p className="text-muted-foreground">24*7</p>
                </div>
              </div>
              {/* Map Placeholder */}
              <div className="aspect-video rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.9663095343008!2d-74.00425878459418!3d40.74844097932681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDBCwrA0NCc1NC40Ik4gNzTCsDAwJzE1LjMiVw!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Marcelino Pvt. Limited Location"
                />
              </div>
              {/*  To get your custom embed URL:
                1. Go to Google Maps (maps.google.com)
                2. Search for your business address
                3. Click "Share" → "Embed a map"
                4. Copy the iframe src URL and replace the one above 
              */}
            </div>
          </div>
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

export default ContactPage;
