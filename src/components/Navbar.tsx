import logoDoha from "@/assets/logo-doha.webp";

const Navbar = () => {
  return (
    <nav className="w-full bg-background border-b border-border py-3">
        <div className="container flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img src={logoDoha} alt="DOHA" className="w-10 h-10 rounded-lg object-cover" />
            <span className="font-heading font-bold text-lg text-foreground hidden sm:inline">DOHA</span>
          </div>

        </div>
      </nav>
  );
};

export default Navbar;
