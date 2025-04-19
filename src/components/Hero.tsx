import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="relative min-h-[500px] bg-gradient-to-b from-minecraft-dark to-minecraft-blue flex items-center overflow-hidden">
      {/* Фоновый паттерн */}
      <div className="absolute inset-0 opacity-10 bg-[url('/placeholder.svg')] bg-repeat"></div>
      
      {/* Плавающие блоки Minecraft (декоративные элементы) */}
      <div className="absolute right-10 top-20 w-20 h-20 bg-minecraft-green animate-float opacity-70 rotate-12"></div>
      <div className="absolute left-[10%] bottom-20 w-16 h-16 bg-minecraft-blue animate-float opacity-70 rotate-45" style={{ animationDelay: '1s' }}></div>
      <div className="absolute right-[25%] bottom-40 w-12 h-12 bg-minecraft-red animate-float opacity-70 -rotate-12" style={{ animationDelay: '2s' }}></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-xl text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Добро пожаловать на МайнЛенд
          </h1>
          <p className="text-lg mb-8">
            Лучший игровой проект Minecraft в России. Уникальные режимы, 
            дружное сообщество и регулярные обновления ждут вас!
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="minecraft-btn">
              <Link to="/play">НАЧАТЬ ИГРАТЬ</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="bg-white/10 hover:bg-white/20 border-2 border-white text-white">
              <Link to="/servers">НАШИ СЕРВЕРА</Link>
            </Button>
          </div>
          
          <div className="mt-8 flex items-center gap-4">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-10 h-10 rounded-full bg-gray-300 border-2 border-white overflow-hidden">
                  <img src={`/placeholder.svg`} alt="Игрок" className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
            <p className="text-white/90">
              <span className="font-bold">1,500+</span> игроков онлайн
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
