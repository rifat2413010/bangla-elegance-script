const Footer = () => {
  return (
    <footer className="py-10 bg-primary">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-primary-foreground">
            <span className="text-xl font-bold">
              UR <span className="text-gold">Media</span>
            </span>
          </div>
          <div className="text-primary-foreground/60 text-sm text-center">
            © {new Date().getFullYear()} UR Media। সর্বস্বত্ব সংরক্ষিত।
          </div>
          <div className="flex items-center gap-4 text-primary-foreground/60 text-sm">
            <span>১০০% অরিজিনাল প্রোডাক্ট</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
