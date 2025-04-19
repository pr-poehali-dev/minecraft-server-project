import { Shield, Award, Users, Zap, Server, Gift } from "lucide-react";

const features = [
  {
    icon: <Server className="h-12 w-12 text-minecraft-green" />,
    title: "Стабильная работа",
    description: "Наши сервера работают 24/7 с минимальными техническими перерывами",
  },
  {
    icon: <Users className="h-12 w-12 text-minecraft-green" />,
    title: "Дружное сообщество",
    description: "Тысячи игроков уже выбрали нас. Присоединяйтесь к нашей семье!",
  },
  {
    icon: <Shield className="h-12 w-12 text-minecraft-green" />,
    title: "Защита от читеров",
    description: "Современная защита от любых видов читов и нечестной игры",
  },
  {
    icon: <Award className="h-12 w-12 text-minecraft-green" />,
    title: "Уникальные режимы",
    description: "Эксклюзивные игровые режимы, которых нет на других серверах",
  },
  {
    icon: <Zap className="h-12 w-12 text-minecraft-green" />,
    title: "Быстрая поддержка",
    description: "Наша команда поддержки работает круглосуточно и готова помочь",
  },
  {
    icon: <Gift className="h-12 w-12 text-minecraft-green" />,
    title: "Регулярные события",
    description: "Конкурсы, турниры и акции с ценными призами каждую неделю",
  },
];

const Features = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Почему выбирают нас</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            МайнЛенд - это не просто сервер Minecraft, это целое сообщество единомышленников
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg pixel-border">
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
