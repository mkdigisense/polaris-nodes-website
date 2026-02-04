const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-border bg-surface/30">
      <div className="container mx-auto px-6">
        <p className="text-muted-foreground text-sm text-center">
          © {currentYear} PolarisNodes. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
