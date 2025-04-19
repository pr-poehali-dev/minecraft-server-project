import ServerCard from "@/components/ServerCard";

// Примеры данных серверов
const servers = [
  {
    id: 1,
    name: "Выживание",
    version: "1.19.2",
    description: "Классический режим выживания с экономикой, приватами и PvP-аренами.",
    imageSrc: "/placeholder.svg",
    players: {
      online: 320,
      max: 500,
    },
    status: "online",
    tags: ["PvP", "Экономика", "Приваты"],
    newServer: false,
  },
  {
    id: 2,
    name: "SkyBlock",
    version: "1.19.2",
    description: "Постройте свой остров в небе, развивайте его и соревнуйтесь с другими игроками.",
    imageSrc: "/placeholder.svg",
    players: {
      online: 245,
      max: 400,
    },
    status: "online",
    tags: ["Острова", "Рейтинг", "PvE"],
    newServer: false,
  },
  {
    id: 3,
    name: "Креатив",
    version: "1.19.2",
    description: "Безграничные возможности для творчества и строительства вместе с друзьями.",
    imageSrc: "/placeholder.svg",
    players: {
      online: 103,
      max: 300,
    },
    status: "online",
    tags: ["Строительство", "WorldEdit"],
    newServer: false,
  },
  {
    id: 4,
    name: "Мини-игры",
    version: "1.19.2",
    description: "Десятки уникальных мини-игр для развлечения с друзьями в любое время.",
    imageSrc: "/placeholder.svg",
    players: {
      online: 280,
      max: 450,
    },
    status: "online",
    tags: ["PvP", "Командные игры"],
    newServer: false,
  },
  {
    id: 5,
    name: "Техника",
    version: "1.19.2",
    description: "Продвинутый сервер с механизмами, автоматизацией и современными технологиями.",
    imageSrc: "/placeholder.svg",
    players: {
      online: 187,
      max: 350,
    },
    status: "restarting",
    tags: ["Моды", "Техника", "Автоматизация"],
    newServer: true,
  },
];

const ServersList = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-4">Наши серверы</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            У нас есть серверы на любой вкус. Выбирайте подходящий режим и начинайте свое приключение прямо сейчас!
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {servers.map((server) => (
            <ServerCard
              key={server.id}
              name={server.name}
              version={server.version}
              description={server.description}
              imageSrc={server.imageSrc}
              players={server.players}
              status={server.status as "online" | "offline" | "restarting"}
              tags={server.tags}
              newServer={server.newServer}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServersList;
