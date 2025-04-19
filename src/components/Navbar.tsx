import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Gamepad2, Users, MessageSquare, Server, Menu, X } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="sticky top-0 z-50 bg-minecraft-dark py-3 border-b-2 border-minecraft-green shadow-md">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <img src="/logo-b.svg" alt="MineLand" className="h-10" />
          <span className="text-xl font-bold text-white hidden sm:block">МайнЛенд</span>
        </Link>

        {/* Мобильная кнопка меню */}
        <button 
          className="md:hidden text-white"
          onClick={toggleMenu}
          aria-label="Меню"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Десктопное меню */}
        <div className="hidden md:flex items-center gap-6">
          <NavLinks />
          <Button asChild className="minecraft-btn">
            <Link to="/play">ИГРАТЬ</Link>
          </Button>
        </div>

        {/* Мобильное меню */}
        <div className={cn(
          "fixed inset-0 bg-minecraft-dark pt-20 px-4 md:hidden transition-transform duration-300",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}>
          <div className="flex flex-col gap-4">
            <NavLinks mobile onClick={toggleMenu} />
            <Button asChild className="minecraft-btn w-full mt-4">
              <Link to="/play" onClick={toggleMenu}>ИГРАТЬ</Link>
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
    { name: "Сервера", icon: <Server size={18} />, path: "/servers" },
    { name: "Донат", icon: <Gamepad2 size={18} />, path: "/donate" },
    { name: "Форум", icon: <MessageSquare size={18} />, path: "/forum" },
    { name: "Правила", icon: <Users size={18} />, path: "/rules" },
  ];

  return (
    <>
      {links.map((link) => (
        <Link
          key={link.name}
          to={link.path}
          className={cn(
            "flex items-center gap-2 text-white transition-colors hover:text-minecraft-green",
            mobile && "text-xl py-3 border-b border-gray-700"
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
