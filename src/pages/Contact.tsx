import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useLanguage } from "@/hooks/use-language";
import emailjs from "emailjs-com";

const ContactPage = () => {
  const { translate } = useLanguage();

  // State for form fields
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState(""); // For success or error message

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus(""); // Reset status message

    // Validate fields before submitting
    if (!name || !email || !message) {
      setStatus("All fields are required.");
      setIsSubmitting(false); // Reset submitting state
      return;
    }

    // Prepare the form data
    const formData = {
      from_name: name,
      from_email: email,
      message: message,
    };

    // Send email via EmailJS
    emailjs
      .send(
        "service_d1b416k", // Your service ID
        "template_r46pg7t", // Your template ID
        formData, // Form data
        "Ek-0Hz84VUQz9LQi5" // Your public key
      )
      .then(
        (response) => {
          console.log("Email sent successfully", response);
          setStatus("Message sent successfully!");
          setName("");
          setEmail("");
          setMessage("");
        },
        (error) => {
          console.error("Error sending email", error);
          setStatus("Failed to send message. Please try again.");
        }
      )
      .finally(() => {
        setIsSubmitting(false); // Reset submitting state
      });
  };

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

              <form className="space-y-4" onSubmit={handleSubmit}>
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    {translate("contact.name")}
                  </label>
                  <Input
                    id="name"
                    placeholder="Your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    {translate("contact.email")}
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    {translate("contact.message")}
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Your message"
                    className="min-h-[150px]"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  />
                </div>

                <Button
                  className="w-full"
                  type="submit"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : translate("contact.submit")}
                </Button>
              </form>

              {/* Status Message */}
              {status && (
                <div
                  className={`mt-4 text-sm ${
                    status.includes("success")
                      ? "text-green-500"
                      : "text-red-500"
                  }`}
                >
                  {status}
                </div>
              )}
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              <h2 className="text-xl font-bold">
                {translate("contact.information")}
              </h2>
              <div className="space-y-4">
                <div className="space-y-2">
                  <h3 className="font-medium">
                    {translate("contact.address")}
                  </h3>
                  <p className="text-muted-foreground">
                    FLAT 103, B,WING, SWARN JEEVAN, 1ST FLOOR,SR NO 110/3B,
                    111/14
                    <br />
                    NEAR RTO TALOJA PHASE 2, Taluka Panvel, RAIGAD, Taloja A.V.,
                    Panvel, Raigarh(MH)- 410208
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
                    pinaro@marcelinoglobaltrade.com
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
                  src="https://www.google.com/maps/embed?pb=..."
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Marcelino Pvt. Limited Location"
                />
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
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
