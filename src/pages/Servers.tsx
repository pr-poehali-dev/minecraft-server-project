import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServerCard from "@/components/ServerCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Данные серверов
const allServers = [
  {
    id: 1,
    name: "Выживание",
    version: "1.19.2",
    description: "Классический режим выживания с приватами, кланами и дружелюбным PvP.",
    imageSrc: "/placeholder.svg",
    players: {
      online: 280,
      max: 500,
    },
    status: "online",
    tags: ["PvP", "Кланы", "Приваты"],
    isNew: false,
    category: "survival"
  },
  {
    id: 2,
    name: "CubeSky",
    version: "1.19.2",
    description: "Создайте свой остров в небе и развивайте его, соревнуясь с другими игроками.",
    imageSrc: "/placeholder.svg",
    players: {
      online: 195,
      max: 300,
    },
    status: "online",
    tags: ["Острова", "Рейтинг", "Экономика"],
    isNew: false,
    category: "skyblock"
  },
  {
    id: 3,
    name: "Creative+",
    version: "1.19.2",
    description: "Полная свобода творчества с расширенными возможностями строительства и редактором.",
    imageSrc: "/placeholder.svg",
    players: {
      online: 120,
      max: 250,
    },
    status: "online",
    tags: ["Строительство", "WorldEdit"],
    isNew: false,
    category: "creative"
  },
  {
    id: 4,
    name: "CubeGames",
    version: "1.19.2",
    description: "Множество увлекательных мини-игр на любой вкус. Соревнуйтесь и побеждайте!",
    imageSrc: "/placeholder.svg",
    players: {
      online: 245,
      max: 400,
    },
    status: "online",
    tags: ["PvP", "Мини-игры", "Командные игры"],
    isNew: false,
    category: "minigames"
  },
  {
    id: 5,
    name: "Hi-Tech",
    version: "1.19.2",
    description: "Продвинутый сервер с модами, технологиями и автоматизацией процессов.",
    imageSrc: "/placeholder.svg",
    players: {
      online: 150,
      max: 300,
    },
    status: "restarting",
    tags: ["Моды", "Техника", "Автоматизация"],
    isNew: true,
    category: "mods"
  },
  {
    id: 6,
    name: "RPG Мир",
    version: "1.19.2",
    description: "Уникальный мир с квестами, подземельями и особой прокачкой персонажей.",
    imageSrc: "/placeholder.svg",
    players: {
      online: 175,
      max: 300,
    },
    status: "online",
    tags: ["RPG", "Квесты", "PvE"],
    isNew: true,
    category: "rpg"
  },
];

const Servers = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Заголовок */}
        <section className="bg-gradient-to-r from-cubeworld-primary to-cubeworld-secondary py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold text-white mb-4">Игровые серверы CubeWorld</h1>
            <p className="text-white/90 max-w-2xl mx-auto">
              Выберите режим игры по своему вкусу и присоединяйтесь к тысячам игроков в увлекательном мире кубических приключений
            </p>
          </div>
        </section>

        {/* Список серверов с фильтрацией */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <Tabs defaultValue="all" className="mb-8">
              <TabsList className="mb-6 flex flex-wrap justify-center">
                <TabsTrigger value="all">Все серверы</TabsTrigger>
                <TabsTrigger value="survival">Выживание</TabsTrigger>
                <TabsTrigger value="skyblock">SkyBlock</TabsTrigger>
                <TabsTrigger value="creative">Творчество</TabsTrigger>
                <TabsTrigger value="minigames">Мини-игры</TabsTrigger>
                <TabsTrigger value="mods">С модами</TabsTrigger>
                <TabsTrigger value="rpg">РПГ</TabsTrigger>
              </TabsList>
              
              <TabsContent value="all">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {allServers.map((server) => (
                    <ServerCard
                      key={server.id}
                      name={server.name}
                      version={server.version}
                      description={server.description}
                      imageSrc={server.imageSrc}
                      players={server.players}
                      status={server.status as "online" | "offline" | "restarting"}
                      tags={server.tags}
                      isNew={server.isNew}
                    />
                  ))}
                </div>
              </TabsContent>

              {["survival", "skyblock", "creative", "minigames", "mods", "rpg"].map((category) => (
                <TabsContent key={category} value={category}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {allServers
                      .filter((server) => server.category === category)
                      .map((server) => (
                        <ServerCard
                          key={server.id}
                          name={server.name}
                          version={server.version}
                          description={server.description}
                          imageSrc={server.imageSrc}
                          players={server.players}
                          status={server.status as "online" | "offline" | "restarting"}
                          tags={server.tags}
                          isNew={server.isNew}
                        />
                      ))}
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </section>

        {/* Информация о серверах */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-6 gradient-text text-center">Подробнее о наших серверах</h2>
              
              <div className="space-y-8">
                <div className="cube-card p-6">
                  <h3 className="text-xl font-bold mb-3">Инфраструктура</h3>
                  <p className="text-gray-600 mb-4">
                    Все серверы CubeWorld работают на мощном выделенном оборудовании с SSD-накопителями и высокоскоростным подключением.
                    Это обеспечивает минимальные задержки и стабильную работу даже при большом количестве одновременных игроков.
                  </p>
                  <p className="text-gray-600">
                    Наша команда технических специалистов круглосуточно следит за работой серверов, оперативно устраняя
                    любые возникающие проблемы.
                  </p>
                </div>
                
                <div className="cube-card p-6">
                  <h3 className="text-xl font-bold mb-3">Защита и безопасность</h3>
                  <p className="text-gray-600 mb-4">
                    Мы используем современные анти-чит плагины и системы обнаружения нечестной игры, чтобы обеспечить 
                    честные и комфортные условия для всех игроков.
                  </p>
                  <p className="text-gray-600">
                    Каждый сервер защищен от DDoS-атак и других угроз, что гарантирует стабильность и безопасность вашего игрового процесса.
                  </p>
                </div>
                
                <div className="cube-card p-6">
                  <h3 className="text-xl font-bold mb-3">Поддержка и обновления</h3>
                  <p className="text-gray-600 mb-4">
                    Мы регулярно обновляем все серверы, добавляя новые возможности и функции. Следите за новостями в нашем 
                    Discord и группе ВКонтакте, чтобы не пропустить важные обновления.
                  </p>
                  <p className="text-gray-600">
                    Команда модераторов и администраторов всегда готова помочь с любыми вопросами и проблемами, возникающими в игре.
                  </p>
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

export default Servers;
