import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";

interface ServerCardProps {
  name: string;
  version: string;
  description: string;
  imageSrc: string;
  players: {
    online: number;
    max: number;
  };
  status: "online" | "offline" | "restarting";
  tags?: string[];
  newServer?: boolean;
}

const ServerCard = ({
  name,
  version,
  description,
  imageSrc,
  players,
  status,
  tags = [],
  newServer = false,
}: ServerCardProps) => {
  const statusColors = {
    online: "bg-minecraft-green",
    offline: "bg-minecraft-red",
    restarting: "bg-minecraft-blue",
  };

  const playersPercentage = (players.online / players.max) * 100;

  return (
    <div className="pixel-border bg-white overflow-hidden group transition-all duration-300 hover:translate-y-[-5px]">
      {/* Изображение сервера */}
      <div className="relative h-[150px] overflow-hidden">
        <img
          src={imageSrc}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        
        {newServer && (
          <Badge className="absolute top-2 right-2 bg-minecraft-blue text-white border-none">
            Новый
          </Badge>
        )}
        
        <div className="absolute top-2 left-2 flex items-center gap-2">
          <div className={cn("h-3 w-3 rounded-full", statusColors[status])} />
          <span className="text-white text-xs font-medium bg-minecraft-dark/70 px-2 py-1 rounded">
            {status === "online" ? "Онлайн" : status === "offline" ? "Оффлайн" : "Перезагрузка"}
          </span>
        </div>
      </div>
      
      {/* Информация о сервере */}
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-bold">{name}</h3>
          <Badge variant="outline" className="text-xs">v{version}</Badge>
        </div>
        
        <p className="text-sm text-gray-600 mb-4">{description}</p>
        
        {/* Теги */}
        {tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>
        )}
        
        {/* Статистика игроков */}
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span>Игроки</span>
            <span className="font-medium">
              {players.online}/{players.max}
            </span>
          </div>
          <Progress value={playersPercentage} className="h-2" />
        </div>
      </div>
    </div>
  );
};

export default ServerCard;
