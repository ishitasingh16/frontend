const Footer = () => {
  return (
    <footer className="border-t border-gold-subtle py-8">
      <div className="container mx-auto px-6 text-center">
        <p className="font-display text-lg font-semibold text-gradient-gold">NatyaVeda</p>
        <p className="mt-2 text-sm text-muted-foreground">
          © {new Date().getFullYear()} NatyaVeda. Preserving the art of Indian classical dance.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
