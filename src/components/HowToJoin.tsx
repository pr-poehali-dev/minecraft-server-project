import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Copy } from "lucide-react";
import { useState } from "react";

const HowToJoin = () => {
  const [copied, setCopied] = useState(false);
  const serverAddress = "play.cubeworld.ru";

  const copyServerAddress = () => {
    navigator.clipboard.writeText(serverAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="py-16 bg-gray-50 relative overflow-hidden">
      {/* Декоративные элементы */}
      <div className="absolute inset-0 opacity-5 bg-[url('/placeholder.svg')] bg-repeat"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-4 gradient-text">Как начать играть</h2>
            <p className="text-gray-600">
              Присоединиться к CubeWorld очень просто! Следуйте инструкции ниже, и вы окажетесь в мире кубических приключений.
            </p>
          </div>

          <div className="cube-card p-8 mb-8">            
            <div className="space-y-6 mb-8">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-cubeworld-primary text-white rounded-full flex items-center justify-center font-bold mr-4">1</div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Установите Minecraft</h3>
                  <p className="text-gray-600">Убедитесь, что у вас установлена версия игры 1.19.2 (Java Edition)</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-cubeworld-secondary text-white rounded-full flex items-center justify-center font-bold mr-4">2</div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Добавьте наш сервер</h3>
                  <p className="text-gray-600">В главном меню выберите "Мультиплеер" → "Добавить сервер"</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-cubeworld-accent text-white rounded-full flex items-center justify-center font-bold mr-4">3</div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Введите адрес сервера</h3>
                  <p className="text-gray-600">Скопируйте наш IP и вставьте в поле адреса</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg mb-6">
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <div className="relative w-full sm:w-auto flex-1">
                  <div className="bg-white border border-gray-200 p-3 rounded-lg text-center font-mono">
                    {serverAddress}
                  </div>
                  <button 
                    onClick={copyServerAddress}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-cubeworld-primary"
                  >
                    <Copy size={18} />
                  </button>
                </div>
                <Button onClick={copyServerAddress} className="cube-btn w-full sm:w-auto whitespace-nowrap">
                  {copied ? "Скопировано!" : "Скопировать IP"}
                </Button>
              </div>
            </div>

            <div className="text-center">
              <p className="text-gray-600 mb-6">
                После подключения вы можете выбрать любой из доступных режимов и начать игру!
              </p>
              <Button asChild size="lg" className="cube-btn">
                <Link to="/how-to-play">ПОДРОБНАЯ ИНСТРУКЦИЯ</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowToJoin;
