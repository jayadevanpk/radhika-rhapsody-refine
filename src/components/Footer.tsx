const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-8">
          <div>
            <h3 className="text-2xl font-display font-bold mb-4">
              Radhika Balakrishnan
            </h3>
            <p className="text-background/80 max-w-2xl mx-auto">
              Distinguished Carnatic vocalist bringing traditional music to contemporary audiences through performance, education, and collaboration.
            </p>
          </div>

          <div className="border-t border-background/20 pt-8">
            <p className="text-background/60 text-sm">
              © 2025 All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;