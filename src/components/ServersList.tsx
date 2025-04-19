import ServerCard from "@/components/ServerCard";

// Данные серверов
const servers = [
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
  },
];

const ServersList = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 gradient-text">Наши серверы</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            У нас есть игровые режимы для любых предпочтений – от классического выживания до технологичных модов и командных игр.
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
              isNew={server.isNew}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServersList;
