import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Gamepad2, BookOpen, GiftIcon, Server as ServerIcon, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import Logo from "@/components/Logo";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="sticky top-0 z-50 bg-white py-3 shadow-md">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link to="/" className="z-20">
          <Logo />
        </Link>

        {/* Мобильная кнопка меню */}
        <button 
          className="md:hidden z-20 text-cubeworld-dark hover:text-cubeworld-primary transition-colors"
          onClick={toggleMenu}
          aria-label="Меню"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Десктопное меню */}
        <div className="hidden md:flex items-center gap-6">
          <NavLinks />
          <Button asChild className="cube-btn">
            <Link to="/how-to-play">ИГРАТЬ</Link>
          </Button>
        </div>

        {/* Мобильное меню */}
        <div className={cn(
          "fixed inset-0 bg-white pt-20 px-4 md:hidden transition-transform duration-300 z-10",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}>
          <div className="flex flex-col gap-4">
            <NavLinks mobile onClick={toggleMenu} />
            <Button asChild className="cube-btn w-full mt-4">
              <Link to="/how-to-play" onClick={toggleMenu}>ИГРАТЬ</Link>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

interface NavLinksProps {
  mobile?: boolean;
  onClick?: () => void;
}

const NavLinks = ({ mobile, onClick }: NavLinksProps) => {
  const links = [
    { name: "Сервера", icon: <ServerIcon size={18} />, path: "/servers" },
    { name: "Привилегии", icon: <Gamepad2 size={18} />, path: "/donate" },
    { name: "Правила", icon: <BookOpen size={18} />, path: "/rules" },
    { name: "Бонусы", icon: <GiftIcon size={18} />, path: "/rewards" },
  ];

  return (
    <>
      {links.map((link) => (
        <Link
          key={link.name}
          to={link.path}
          className={cn(
            "flex items-center gap-2 text-cubeworld-dark font-medium transition-colors hover:text-cubeworld-primary",
            mobile && "text-xl py-3 border-b border-gray-100"
          )}
          onClick={onClick}
        >
          {link.icon}
          <span>{link.name}</span>
        </Link>
      ))}
    </>
  );
};

export default Navbar;
