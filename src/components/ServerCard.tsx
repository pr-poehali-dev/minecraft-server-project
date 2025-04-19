import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
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
  isNew?: boolean;
}

const ServerCard = ({
  name,
  version,
  description,
  imageSrc,
  players,
  status,
  tags = [],
  isNew = false,
}: ServerCardProps) => {
  const statusColors = {
    online: "bg-cubeworld-success",
    offline: "bg-cubeworld-danger",
    restarting: "bg-cubeworld-warning",
  };

  const statusLabels = {
    online: "Онлайн",
    offline: "Оффлайн",
    restarting: "Перезагрузка",
  };

  const playersPercentage = (players.online / players.max) * 100;

  return (
    <div className="cube-card group transition-all duration-300 hover:shadow-xl">
      {/* Изображение сервера */}
      <div className="relative h-[180px] overflow-hidden">
        <img
          src={imageSrc}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        
        {isNew && (
          <Badge className="absolute top-2 right-2 bg-cubeworld-accent text-white border-none">
            Новый
          </Badge>
        )}
        
        <div className="absolute top-2 left-2 flex items-center gap-2">
          <div className={cn("h-3 w-3 rounded-full", statusColors[status])} />
          <span className="text-white text-xs font-medium bg-cubeworld-dark/70 px-2 py-1 rounded-sm">
            {statusLabels[status]}
          </span>
        </div>
      </div>
      
      {/* Информация о сервере */}
      <div className="p-5">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-xl font-bold text-cubeworld-dark">{name}</h3>
          <Badge variant="outline" className="text-xs border-cubeworld-secondary text-cubeworld-secondary">
            {version}
          </Badge>
        </div>
        
        <p className="text-gray-600 mb-4">{description}</p>
        
        {/* Теги */}
        {tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="text-xs bg-gray-100 text-gray-700 hover:bg-gray-200">
                {tag}
              </Badge>
            ))}
          </div>
        )}
        
        {/* Статистика игроков */}
        <div className="space-y-2 mb-4">
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">Игроки</span>
            <span className="font-medium text-cubeworld-dark">
              {players.online}/{players.max}
            </span>
          </div>
          <Progress 
            value={playersPercentage} 
            className="h-2" 
            indicatorClassName={cn(
              players.online > players.max * 0.8 ? "bg-cubeworld-success" : 
              players.online > players.max * 0.4 ? "bg-cubeworld-accent" : 
              "bg-cubeworld-secondary"
            )}
          />
        </div>

        {/* Кнопка подключения */}
        <Button className="w-full cube-btn text-sm">
          ПОДКЛЮЧИТЬСЯ
        </Button>
      </div>
    </div>
  );
};

export default ServerCard;
