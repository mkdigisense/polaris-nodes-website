import heroBackground from "@/assets/polaris-background.png";
import polarisLogo from "@/assets/polaris-logo.png";

const Hero = () => {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroBackground} 
          alt="" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/60 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 pt-24 pb-16 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Logo Icon */}
          <div className="flex justify-center mb-8">
            <img 
              src={polarisLogo} 
              alt="PolarisNodes" 
              className="h-24 md:h-32 w-auto animate-fade-in glow-subtle"
              style={{ animationDelay: '0.1s' }}
            />
          </div>

          {/* Headline */}
          <h1 
            className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 animate-fade-in"
            style={{ animationDelay: '0.2s', opacity: 0 }}
          >
            Node Operations for{' '}
            <span className="text-gradient">Decentralized Networks</span>
          </h1>

          {/* Subheadline */}
          <p 
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-in"
            style={{ animationDelay: '0.3s', opacity: 0 }}
          >
            Polaris Nodes is a Finland-based node operator focused on building and operating reliable infrastructure for multiple blockchains.
          </p>

          {/* CTA Button */}
          <div 
            className="animate-fade-in"
            style={{ animationDelay: '0.4s', opacity: 0 }}
          >
            <a 
              href="#contact"
              className="inline-flex px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold text-lg hover:bg-primary/90 transition-all glow-primary hover:scale-105"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
};

export default Hero;
