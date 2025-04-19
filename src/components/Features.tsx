import { Shield, Award, Users, Zap, GiftIcon, Layers } from "lucide-react";

const features = [
  {
    icon: <Layers className="h-12 w-12 text-cubeworld-primary" />,
    title: "Стабильная работа",
    description: "Наши серверы размещены на мощном оборудовании, обеспечивающем бесперебойную работу 24/7",
  },
  {
    icon: <Users className="h-12 w-12 text-cubeworld-secondary" />,
    title: "Активное сообщество",
    description: "Тысячи игроков уже выбрали CubeWorld. Присоединяйтесь к нашей дружной семье!",
  },
  {
    icon: <Shield className="h-12 w-12 text-cubeworld-primary" />,
    title: "Безопасная игра",
    description: "Надежная защита от читеров и гриферов обеспечивает комфортную игру для всех",
  },
  {
    icon: <Award className="h-12 w-12 text-cubeworld-secondary" />,
    title: "Уникальные режимы",
    description: "Авторские игровые режимы с эксклюзивными механиками и возможностями",
  },
  {
    icon: <Zap className="h-12 w-12 text-cubeworld-primary" />,
    title: "Оперативная поддержка",
    description: "Команда модераторов и техподдержки всегда на связи и готова помочь",
  },
  {
    icon: <GiftIcon className="h-12 w-12 text-cubeworld-secondary" />,
    title: "Бонусы и акции",
    description: "Регулярные мероприятия, конкурсы и раздачи ценных призов для игроков",
  },
];

const Features = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 gradient-text">Преимущества CubeWorld</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Мы создали комфортную игровую экосистему, где каждый игрок найдет что-то по душе
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="cube-card-alt p-6">
              <div className="flex flex-col items-center text-center">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
