const Services = () => {
  return (
    <section id="services" className="py-12 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
            Specialized in <span className="text-gradient">Node Operations</span>.
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            PolarisNodes focuses on what matters: uptime, monitoring, security hardening, upgrades, and incident response. Our infrastructure is built on state-of-the-art cloud services, delivering high availability and fault-tolerant node operations across multiple networks.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
