import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Copy } from "lucide-react";
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const HowToPlay = () => {
  const [copied, setCopied] = useState(false);
  const serverAddress = "play.cubeworld.ru";

  const copyServerAddress = () => {
    navigator.clipboard.writeText(serverAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Заголовок */}
        <section className="bg-gradient-to-r from-cubeworld-primary to-cubeworld-secondary py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold text-white mb-4">Как начать играть на CubeWorld</h1>
            <p className="text-white/90 max-w-2xl mx-auto">
              Подробная инструкция для новых игроков: от установки Minecraft до первых шагов на сервере
            </p>
          </div>
        </section>

        {/* Инструкция */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <Tabs defaultValue="java" className="mb-8">
                <TabsList className="w-full mb-8">
                  <TabsTrigger value="java" className="flex-1">Java Edition</TabsTrigger>
                  <TabsTrigger value="bedrock" className="flex-1">Bedrock Edition</TabsTrigger>
                </TabsList>
                
                <TabsContent value="java">
                  <div className="cube-card p-8 mb-8">
                    <h2 className="text-2xl font-bold mb-6 gradient-text">Подключение на Java Edition</h2>
                    
                    <div className="space-y-8">
                      <div className="flex flex-col md:flex-row gap-6">
                        <div className="flex-shrink-0 w-full md:w-32 h-32 bg-gray-200 rounded-lg overflow-hidden flex items-center justify-center">
                          <img src="/placeholder.svg" alt="Установка Minecraft" className="w-full h-full object-cover" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold mb-2">1. Установите Minecraft: Java Edition</h3>
                          <p className="text-gray-600">
                            Убедитесь, что у вас установлена официальная версия Minecraft: Java Edition. 
                            Наш сервер поддерживает версию 1.19.2 (рекомендуемая) и другие версии через ViaVersion.
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex flex-col md:flex-row gap-6">
                        <div className="flex-shrink-0 w-full md:w-32 h-32 bg-gray-200 rounded-lg overflow-hidden flex items-center justify-center">
                          <img src="/placeholder.svg" alt="Запуск Minecraft" className="w-full h-full object-cover" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold mb-2">2. Запустите игру и перейдите в раздел "Мультиплеер"</h3>
                          <p className="text-gray-600">
                            После запуска Minecraft нажмите на кнопку "Мультиплеер" в главном меню. Затем выберите 
                            "Добавить сервер" для добавления CubeWorld в список ваших серверов.
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex flex-col md:flex-row gap-6">
                        <div className="flex-shrink-0 w-full md:w-32 h-32 bg-gray-200 rounded-lg overflow-hidden flex items-center justify-center">
                          <img src="/placeholder.svg" alt="Добавление сервера" className="w-full h-full object-cover" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold mb-2">3. Введите данные сервера</h3>
                          <p className="text-gray-600 mb-4">
                            В поле "Название сервера" введите любое удобное для вас название (например, "CubeWorld").
                            В поле "Адрес сервера" введите наш IP-адрес:
                          </p>
                          
                          <div className="bg-gray-50 p-4 rounded-lg mb-4 flex items-center justify-between">
                            <code className="font-mono text-lg">{serverAddress}</code>
                            <Button 
                              onClick={copyServerAddress} 
                              variant="ghost" 
                              size="sm"
                              className="text-cubeworld-primary hover:text-cubeworld-secondary hover:bg-gray-100"
                            >
                              <Copy size={16} className="mr-1" />
                              {copied ? "Скопировано!" : "Копировать"}
                            </Button>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex flex-col md:flex-row gap-6">
                        <div className="flex-shrink-0 w-full md:w-32 h-32 bg-gray-200 rounded-lg overflow-hidden flex items-center justify-center">
                          <img src="/placeholder.svg" alt="Подключение к серверу" className="w-full h-full object-cover" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold mb-2">4. Подключитесь к серверу</h3>
                          <p className="text-gray-600">
                            Нажмите "Готово", чтобы сохранить сервер. Теперь выберите CubeWorld в списке серверов и 
                            нажмите "Присоединиться к серверу". Дождитесь загрузки и наслаждайтесь игрой!
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="bedrock">
                  <div className="cube-card p-8 mb-8">
                    <h2 className="text-2xl font-bold mb-6 gradient-text">Подключение на Bedrock Edition</h2>
                    
                    <div className="space-y-8">
                      <div className="flex flex-col md:flex-row gap-6">
                        <div className="flex-shrink-0 w-full md:w-32 h-32 bg-gray-200 rounded-lg overflow-hidden flex items-center justify-center">
                          <img src="/placeholder.svg" alt="Установка Minecraft" className="w-full h-full object-cover" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold mb-2">1. Установите Minecraft: Bedrock Edition</h3>
                          <p className="text-gray-600">
                            Убедитесь, что у вас установлена последняя версия Minecraft для Windows 10/11, 
                            мобильных устройств или игровых консолей.
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex flex-col md:flex-row gap-6">
                        <div className="flex-shrink-0 w-full md:w-32 h-32 bg-gray-200 rounded-lg overflow-hidden flex items-center justify-center">
                          <img src="/placeholder.svg" alt="Запуск Minecraft" className="w-full h-full object-cover" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold mb-2">2. Перейдите в раздел "Серверы"</h3>
                          <p className="text-gray-600">
                            После запуска Minecraft перейдите в раздел "Играть" и выберите вкладку "Серверы". 
                            Прокрутите вниз до раздела "Добавить сервер".
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex flex-col md:flex-row gap-6">
                        <div className="flex-shrink-0 w-full md:w-32 h-32 bg-gray-200 rounded-lg overflow-hidden flex items-center justify-center">
                          <img src="/placeholder.svg" alt="Добавление сервера" className="w-full h-full object-cover" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold mb-2">3. Введите данные сервера</h3>
                          <p className="text-gray-600 mb-4">
                            В поле "Название сервера" введите "CubeWorld". В поле "Адрес сервера" введите наш 
                            Bedrock IP-адрес и порт:
                          </p>
                          
                          <div className="bg-gray-50 p-4 rounded-lg mb-4 flex items-center justify-between">
                            <code className="font-mono text-lg">bedrock.cubeworld.ru:19132</code>
                            <Button 
                              onClick={() => {
                                navigator.clipboard.writeText("bedrock.cubeworld.ru:19132");
                                setCopied(true);
                                setTimeout(() => setCopied(false), 2000);
                              }} 
                              variant="ghost" 
                              size="sm"
                              className="text-cubeworld-primary hover:text-cubeworld-secondary hover:bg-gray-100"
                            >
                              <Copy size={16} className="mr-1" />
                              {copied ? "Скопировано!" : "Копировать"}
                            </Button>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex flex-col md:flex-row gap-6">
                        <div className="flex-shrink-0 w-full md:w-32 h-32 bg-gray-200 rounded-lg overflow-hidden flex items-center justify-center">
                          <img src="/placeholder.svg" alt="Подключение к серверу" className="w-full h-full object-cover" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold mb-2">4. Подключитесь к серверу</h3>
                          <p className="text-gray-600">
                            Нажмите "Сохранить", чтобы добавить сервер в список. Теперь выберите CubeWorld и нажмите 
                            "Присоединиться к серверу". Дождитесь загрузки и наслаждайтесь игрой!
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>

              {/* Первые шаги на сервере */}
              <div className="cube-card p-8">
                <h2 className="text-2xl font-bold mb-6 gradient-text">Первые шаги на сервере</h2>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-bold mb-2">Выбор режима игры</h3>
                    <p className="text-gray-600 mb-4">
                      После входа на сервер вы окажетесь в главном лобби. Здесь вы можете выбрать один из доступных режимов 
                      игры с помощью специального меню или NPC.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold mb-2">Основные команды</h3>
                    <ul className="list-disc pl-5 space-y-2 text-gray-600">
                      <li><code className="bg-gray-100 px-2 py-1 rounded">/spawn</code> - телепортация в начальную точку</li>
                      <li><code className="bg-gray-100 px-2 py-1 rounded">/help</code> - список доступных команд</li>
                      <li><code className="bg-gray-100 px-2 py-1 rounded">/sethome</code> - установить точку дома</li>
                      <li><code className="bg-gray-100 px-2 py-1 rounded">/home</code> - телепортация домой</li>
                      <li><code className="bg-gray-100 px-2 py-1 rounded">/tpa &lt;игрок&gt;</code> - запрос на телепортацию к игроку</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold mb-2">Общение и чат</h3>
                    <p className="text-gray-600 mb-4">
                      Для общения с другими игроками используйте глобальный чат. Личные сообщения можно отправлять 
                      командой <code className="bg-gray-100 px-2 py-1 rounded">/msg &lt;игрок&gt; &lt;сообщение&gt;</code>.
                    </p>
                    <p className="text-gray-600">
                      Присоединяйтесь к нашему Discord-серверу для общения вне игры и получения последних новостей о CubeWorld.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold mb-2">Получение помощи</h3>
                    <p className="text-gray-600">
                      Если у вас возникли вопросы или проблемы, вы всегда можете обратиться к модераторам в игре 
                      (их ники отмечены специальным префиксом) или написать в техническую поддержку через Discord.
                    </p>
                  </div>
                </div>

                <div className="mt-8 text-center">
                  <Button asChild size="lg" className="cube-btn">
                    <a href="https://discord.gg/cubeworld" target="_blank" rel="noopener noreferrer">
                      ПРИСОЕДИНИТЬСЯ К DISCORD
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default HowToPlay;
