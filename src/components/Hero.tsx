import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="relative min-h-[600px] overflow-hidden">
      {/* Фоновый градиент */}
      <div className="absolute inset-0 bg-gradient-to-br from-cubeworld-primary via-cubeworld-secondary to-cubeworld-dark"></div>
      
      {/* Паттерн */}
      <div className="absolute inset-0 opacity-10 bg-[url('/placeholder.svg')] bg-repeat"></div>
      
      {/* Декоративные элементы */}
      <div className="absolute right-[10%] top-20 w-24 h-24 bg-white/10 rounded-lg animate-float opacity-70 rotate-12"></div>
      <div className="absolute left-[15%] bottom-32 w-16 h-16 bg-white/10 rounded-lg animate-float opacity-70 rotate-45" style={{ animationDelay: '1.5s' }}></div>
      <div className="absolute right-[20%] bottom-40 w-20 h-20 bg-white/10 rounded-lg animate-float opacity-70 -rotate-12" style={{ animationDelay: '2.2s' }}></div>
      
      <div className="container mx-auto px-4 relative z-10 h-full flex items-center">
        <div className="max-w-2xl text-white pt-10 md:pt-0">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
            Открой новый мир <span className="text-cubeworld-accent">кубических</span> приключений
          </h1>
          <p className="text-lg mb-8 text-white/90">
            CubeWorld — это сервер Minecraft, где каждый найдет себе занятие по душе. Разнообразные режимы игры, дружелюбное сообщество и регулярные обновления ждут тебя!
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="cube-btn">
              <Link to="/how-to-play">НАЧАТЬ ИГРАТЬ</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="bg-white/10 hover:bg-white/20 border border-white text-white">
              <Link to="/servers">НАШИ СЕРВЕРА</Link>
            </Button>
          </div>
          
          <div className="mt-8 flex items-center gap-4">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-10 h-10 rounded-full bg-white/20 border-2 border-white overflow-hidden">
                  <img src={`/placeholder.svg`} alt="Игрок" className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
            <p className="text-white/90">
              <span className="font-bold">1,200+</span> игроков онлайн
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
