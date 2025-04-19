import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Copy } from "lucide-react";
import { useState } from "react";

const JoinSection = () => {
  const [copied, setCopied] = useState(false);
  const serverAddress = "play.mineland.ru";

  const copyServerAddress = () => {
    navigator.clipboard.writeText(serverAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="py-16 bg-minecraft-dark relative overflow-hidden">
      {/* Декоративные элементы */}
      <div className="absolute inset-0 opacity-5 bg-[url('/placeholder.svg')] bg-repeat"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Готовы начать приключение?
          </h2>
          <p className="text-gray-300 mb-8">
            Присоединяйтесь к нашему серверу Minecraft прямо сейчас. Вас ждет увлекательное приключение, море возможностей и дружное сообщество.
          </p>

          <div className="bg-white/10 p-8 rounded-lg pixel-border mb-8">
            <h3 className="text-2xl font-bold text-white mb-4">Как начать играть?</h3>
            
            <div className="space-y-4 text-left mb-6">
              <div className="flex items-start">
                <span className="flex-shrink-0 w-8 h-8 bg-minecraft-green text-white rounded-full flex items-center justify-center font-bold mr-3">1</span>
                <p className="text-gray-300">Запустите Minecraft версии 1.19.2</p>
              </div>
              <div className="flex items-start">
                <span className="flex-shrink-0 w-8 h-8 bg-minecraft-green text-white rounded-full flex items-center justify-center font-bold mr-3">2</span>
                <p className="text-gray-300">Перейдите в раздел "Сетевая игра" и нажмите "Добавить сервер"</p>
              </div>
              <div className="flex items-start">
                <span className="flex-shrink-0 w-8 h-8 bg-minecraft-green text-white rounded-full flex items-center justify-center font-bold mr-3">3</span>
                <p className="text-gray-300">Введите адрес сервера и подключитесь</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <div className="relative w-full sm:w-auto flex-1">
                <div className="bg-white/5 border border-gray-700 p-3 rounded-lg text-white text-center font-mono">
                  {serverAddress}
                </div>
                <button 
                  onClick={copyServerAddress}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
                >
                  <Copy size={20} />
                </button>
              </div>
              <Button onClick={copyServerAddress} className="minecraft-btn w-full sm:w-auto">
                {copied ? "Скопировано!" : "Скопировать IP"}
              </Button>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg" className="minecraft-btn">
              <Link to="/play">НАЧАТЬ ИГРАТЬ</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="bg-white/10 hover:bg-white/20 border-2 border-white text-white">
              <Link to="/donate">ПОДДЕРЖАТЬ ПРОЕКТ</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinSection;
