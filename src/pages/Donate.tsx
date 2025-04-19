import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const privileges = [
  {
    id: "starter",
    name: "Стартовый",
    price: "199 ₽",
    oldPrice: "299 ₽",
    color: "#6C757D",
    features: [
      "Доступ к команде /kit vip",
      "Префикс [VIP] в чате",
      "3 точки дома",
      "Цветные сообщения в чате",
      "Доступ к /fly на креативе"
    ],
    popular: false
  },
  {
    id: "premium",
    name: "Премиум",
    price: "499 ₽",
    oldPrice: "699 ₽",
    color: "#3498DB",
    features: [
      "Все возможности VIP",
      "Доступ к команде /kit premium",
      "5 точек дома",
      "Доступ к /enderchest",
      "Приоритетный вход на сервер",
      "Питомец на выбор",
      "Защита от PvP (/pvp toggle)"
    ],
    popular: true
  },
  {
    id: "elite",
    name: "Элитный",
    price: "999 ₽",
    oldPrice: "1299 ₽",
    color: "#8E44AD",
    features: [
      "Все возможности Премиум",
      "Доступ к команде /kit elite",
      "10 точек дома",
      "Доступ к /workbench",
      "Полет в режиме выживания (/fly)",
      "Эксклюзивные частицы и эффекты",
      "Возможность изменять время (/ptime)",
      "Бесплатные жетоны на ивентах"
    ],
    popular: false
  }
];

const Donate = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Заголовок */}
        <section className="bg-gradient-to-r from-cubeworld-primary to-cubeworld-secondary py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold text-white mb-4">Привилегии и поддержка проекта</h1>
            <p className="text-white/90 max-w-2xl mx-auto">
              Поддержите развитие CubeWorld и получите дополнительные возможности для комфортной игры на наших серверах
            </p>
          </div>
        </section>

        {/* Привилегии */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 gradient-text">Игровые привилегии</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Выберите подходящий набор возможностей для комфортной игры на всех наших серверах
              </p>
            </div>

            <Tabs defaultValue="all" className="mb-8">
              <TabsList className="mb-8 flex flex-wrap justify-center">
                <TabsTrigger value="all">Все серверы</TabsTrigger>
                <TabsTrigger value="survival">Выживание</TabsTrigger>
                <TabsTrigger value="skyblock">CubeSky</TabsTrigger>
                <TabsTrigger value="minigames">CubeGames</TabsTrigger>
              </TabsList>
              
              <TabsContent value="all">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {privileges.map((privilege) => (
                    <PrivilegeCard key={privilege.id} privilege={privilege} />
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="survival">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {privileges.map((privilege) => (
                    <PrivilegeCard key={privilege.id} privilege={privilege} serverPrefix="Выживание" />
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="skyblock">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {privileges.map((privilege) => (
                    <PrivilegeCard key={privilege.id} privilege={privilege} serverPrefix="CubeSky" />
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="minigames">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {privileges.map((privilege) => (
                    <PrivilegeCard key={privilege.id} privilege={privilege} serverPrefix="CubeGames" />
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Информация о донате */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-6 gradient-text text-center">Часто задаваемые вопросы</h2>
              
              <div className="space-y-6">
                <div className="cube-card p-6">
                  <h3 className="text-xl font-bold mb-2">Как приобрести привилегию?</h3>
                  <p className="text-gray-600">
                    Для покупки привилегии выберите интересующий вас пакет, нажмите кнопку "Купить" и следуйте инструкциям.
                    Оплата принимается через банковские карты, электронные кошельки и другие популярные способы.
                  </p>
                </div>
                
                <div className="cube-card p-6">
                  <h3 className="text-xl font-bold mb-2">Как долго действует привилегия?</h3>
                  <p className="text-gray-600">
                    Все привилегии на CubeWorld выдаются навсегда. После покупки вы получаете постоянный доступ к указанным 
                    возможностям на всех наших серверах.
                  </p>
                </div>
                
                <div className="cube-card p-6">
                  <h3 className="text-xl font-bold mb-2">Можно ли перейти на более высокую привилегию?</h3>
                  <p className="text-gray-600">
                    Да, вы можете обновить свою привилегию, доплатив разницу между текущим и желаемым пакетом. 
                    Для этого напишите в поддержку через личный кабинет.
                  </p>
                </div>
                
                <div className="cube-card p-6">
                  <h3 className="text-xl font-bold mb-2">Что делать, если возникли проблемы с активацией?</h3>
                  <p className="text-gray-600">
                    В случае любых проблем с покупкой или активацией привилегии обратитесь в нашу техническую поддержку 
                    через Discord или группу ВКонтакте. Мы обязательно поможем решить вашу проблему.
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

interface PrivilegeCardProps {
  privilege: {
    id: string;
    name: string;
    price: string;
    oldPrice: string;
    color: string;
    features: string[];
    popular: boolean;
  };
  serverPrefix?: string;
}

const PrivilegeCard = ({ privilege, serverPrefix }: PrivilegeCardProps) => {
  const displayName = serverPrefix ? `${privilege.name} ${serverPrefix}` : privilege.name;
  
  return (
    <div className="cube-card relative overflow-hidden transition-all hover:shadow-xl">
      {/* Полоска сверху с цветом привилегии */}
      <div className="h-2" style={{ backgroundColor: privilege.color }}></div>
      
      {/* Бейдж популярного пакета */}
      {privilege.popular && (
        <div className="absolute top-6 right-0 bg-cubeworld-accent text-white py-1 px-4 text-sm font-bold shadow-md transform rotate-45 translate-x-[30%]">
          Популярный
        </div>
      )}
      
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-2">{displayName}</h3>
        
        {/* Цена */}
        <div className="flex items-baseline mb-6">
          <span className="text-3xl font-bold text-cubeworld-primary">{privilege.price}</span>
          {privilege.oldPrice && (
            <span className="ml-2 text-sm text-gray-500 line-through">{privilege.oldPrice}</span>
          )}
        </div>
        
        {/* Список преимуществ */}
        <ul className="space-y-3 mb-8">
          {privilege.features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <Check className="h-5 w-5 text-cubeworld-success flex-shrink-0 mr-2" />
              <span className="text-gray-600">{feature}</span>
            </li>
          ))}
        </ul>
        
        {/* Кнопка покупки */}
        <Button className="w-full cube-btn" style={{ backgroundColor: privilege.color }}>
          КУПИТЬ
        </Button>
      </div>
    </div>
  );
};

export default Donate;
