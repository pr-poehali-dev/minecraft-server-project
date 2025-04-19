import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow flex items-center justify-center py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-md mx-auto">
            <h1 className="text-7xl font-bold text-minecraft-green mb-6">404</h1>
            <h2 className="text-3xl font-bold mb-4">Страница не найдена</h2>
            <p className="text-gray-600 mb-8">
              Кажется, вы потерялись в мире Minecraft. Эта страница не существует или была удалена.
            </p>
            <div className="flex justify-center">
              <Button asChild className="minecraft-btn">
                <Link to="/">Вернуться на главную</Link>
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
