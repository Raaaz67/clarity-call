const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-accent text-accent-foreground py-8">
      <div className="container-wide">
        <div className="text-center">
          <p className="font-heading text-xl mb-2">ZoroFlow</p>
          <p className="text-accent-foreground/60 text-sm">
            Financial clarity for small businesses.
          </p>
          <p className="text-accent-foreground/40 text-xs mt-4">
            © {currentYear} ZoroFlow. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
