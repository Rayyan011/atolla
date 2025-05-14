
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send this to your backend
    toast({
      title: "Thank you for joining!",
      description: "You've successfully subscribed to our newsletter.",
      duration: 5000,
    });
    setEmail("");
  };

  return (
    <section className="py-24 px-6 md:px-12 bg-gradient-to-br from-atolla-blue/10 via-atolla-purple/5 to-atolla-coral/10 relative">
      <div className="absolute inset-0 bg-grain opacity-20 mix-blend-overlay"></div>
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <h2 className="font-playfair text-3xl md:text-4xl text-gradient-to-r from-atolla-blue to-atolla-purple bg-clip-text text-transparent mb-4">
            Join the Current
          </h2>
          <p className="text-atolla-seagrass/80 text-lg">
            Stay updated on our research, projects, and opportunities to get involved.
          </p>
        </div>
        
        <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4 max-w-2xl mx-auto">
          <Input
            type="email"
            placeholder="Your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-grow py-6 px-6 rounded-full bg-white shadow-md border-2 border-atolla-purple/10 focus:border-atolla-purple focus:ring-atolla-blue"
            required
          />
          <Button 
            type="submit" 
            className="bg-gradient-to-r from-atolla-coral to-atolla-blue hover:from-atolla-blue hover:to-atolla-coral text-white rounded-full px-8 py-6 transition-all shadow-lg hover:shadow-atolla-blue/20"
          >
            Subscribe
          </Button>
        </form>
        
        <p className="text-center text-atolla-seagrass/60 text-sm mt-6">
          We respect your privacy and will never share your information. Unsubscribe at any time.
        </p>
      </div>
    </section>
  );
};

export default Newsletter;
