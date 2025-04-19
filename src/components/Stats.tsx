import { Clock, Users, Star, Settings } from "lucide-react";

const statsItems = [
  {
    icon: <Users className="h-8 w-8 text-white" />,
    value: "40,000+",
    label: "Игроков",
  },
  {
    icon: <Settings className="h-8 w-8 text-white" />,
    value: "6",
    label: "Режимов игры",
  },
  {
    icon: <Clock className="h-8 w-8 text-white" />,
    value: "4+ года",
    label: "Онлайн",
  },
  {
    icon: <Star className="h-8 w-8 text-white" />,
    value: "97%",
    label: "Положительных отзывов",
  },
];

const Stats = () => {
  return (
    <section className="bg-gradient-to-r from-cubeworld-primary to-cubeworld-secondary py-14">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {statsItems.map((item, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="bg-white/10 p-4 rounded-full mb-4">
                {item.icon}
              </div>
              <h3 className="text-3xl font-bold text-white mb-1">{item.value}</h3>
              <p className="text-white text-lg">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
