import { useState } from "react";
import { Send } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
            Get in <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-6">
            We are always open to new opportunities and collaborations across the blockchain and crypto ecosystem.
          </p>
          <p className="text-lg leading-relaxed">
            <a href="mailto:marko.hiltunen@polarisnodes.fi">marko.hiltunen@polarisnodes.fi</a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
