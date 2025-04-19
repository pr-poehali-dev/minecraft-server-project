import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from "@/components/ui/accordion";

const Rules = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Заголовок */}
        <section className="bg-gradient-to-r from-cubeworld-primary to-cubeworld-secondary py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold text-white mb-4">Правила сервера</h1>
            <p className="text-white/90 max-w-2xl mx-auto">
              Для комфортной игры на CubeWorld, пожалуйста, ознакомьтесь с основными правилами нашего проекта
            </p>
          </div>
        </section>

        {/* Правила */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <div className="cube-card p-6 mb-8">
                <h2 className="text-2xl font-bold mb-4 gradient-text">Общие положения</h2>
                <p className="text-gray-600 mb-4">
                  Правила CubeWorld - это свод норм и ограничений, обязательных для соблюдения всеми игроками проекта.
                  Они направлены на поддержание комфортной игровой атмосферы и защиту интересов всех участников сообщества.
                </p>
                <p className="text-gray-600">
                  Незнание правил не освобождает от ответственности. Регистрация на сервере означает полное согласие с настоящими правилами.
                  Администрация оставляет за собой право вносить изменения в правила без предварительного уведомления.
                </p>
              </div>

              <Accordion type="single" collapsible className="mb-8">
                <AccordionItem value="general">
                  <AccordionTrigger>
                    <h3 className="text-xl font-semibold">Основные правила</h3>
                  </AccordionTrigger>
                  <AccordionContent>
                    <ul className="list-disc pl-5 space-y-2 text-gray-600 mb-4">
                      <li>Запрещено использование любых модификаций, дающих преимущество в игре (читы, хаки, автоклики и т.д.).</li>
                      <li>Запрещено использование багов игры или сервера. О найденных багах следует сообщать администрации.</li>
                      <li>Запрещена реклама сторонних проектов, сайтов, серверов в любой форме.</li>
                      <li>Запрещено выдавать себя за представителя администрации или модерации проекта.</li>
                      <li>Запрещено создание аккаунтов с целью обхода наказаний (мультиаккаунты).</li>
                    </ul>
                    <p className="text-gray-600">Нарушение этих правил может привести к блокировке аккаунта без возможности восстановления.</p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="chat">
                  <AccordionTrigger>
                    <h3 className="text-xl font-semibold">Правила чата</h3>
                  </AccordionTrigger>
                  <AccordionContent>
                    <ul className="list-disc pl-5 space-y-2 text-gray-600 mb-4">
                      <li>Запрещены оскорбления, угрозы, провокации, клевета и другие формы токсичного поведения.</li>
                      <li>Запрещен флуд, спам, чрезмерное использование CAPS LOCK и злоупотребление символами.</li>
                      <li>Запрещено обсуждение политических, религиозных и других потенциально конфликтных тем.</li>
                      <li>Запрещена публикация личной информации других игроков без их согласия.</li>
                      <li>Запрещены попытки обойти фильтрацию чата любыми способами.</li>
                    </ul>
                    <p className="text-gray-600">За нарушение правил чата могут быть применены временные ограничения на использование чата или бл
                    окировка аккаунта.</p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="gameplay">
                  <AccordionTrigger>
                    <h3 className="text-xl font-semibold">Правила игрового процесса</h3>
                  </AccordionTrigger>
                  <AccordionContent>
                    <ul className="list-disc pl-5 space-y-2 text-gray-600 mb-4">
                      <li>Запрещено создание построек и механизмов, вызывающих серьезные лаги сервера.</li>
                      <li>Запрещен гриферинг - намеренное разрушение чужих построек, кража ресурсов (кроме PvP-серверов).</li>
                      <li>Запрещено создание нецензурных, оскорбительных и провокационных построек.</li>
                      <li>Запрещено препятствовать нормальной игре других участников проекта.</li>
                      <li>Запрещено злоупотребление внутриигровыми механиками для получения нечестного преимущества.</li>
                    </ul>
                    <p className="text-gray-600">Нарушения игрового процесса рассматриваются модераторами с учетом обстоятельств и могут привести к различным наказаниям.</p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="economy">
                  <AccordionTrigger>
                    <h3 className="text-xl font-semibold">Правила экономики</h3>
                  </AccordionTrigger>
                  <AccordionContent>
                    <ul className="list-disc pl-5 space-y-2 text-gray-600 mb-4">
                      <li>Запрещена продажа или обмен внутриигровых ценностей на реальные деньги.</li>
                      <li>Запрещено создание монополий и искусственный контроль цен на предметы.</li>
                      <li>Запрещено мошенничество при торговле с другими игроками.</li>
                      <li>Запрещено создание альтернативных аккаунтов для обхода экономических ограничений.</li>
                    </ul>
                    <p className="text-gray-600">Нарушение экономических правил может привести к конфискации внутриигровых ценностей и временному или постоянному бану.</p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>

              <div className="cube-card p-6">
                <h2 className="text-2xl font-bold mb-4 gradient-text">Наказания и обжалования</h2>
                <p className="text-gray-600 mb-4">
                  В зависимости от тяжести нарушения и его повторности могут быть применены следующие наказания:
                </p>
                <ul className="list-disc pl-5 space-y-2 text-gray-600 mb-4">
                  <li>Предупреждение</li>
                  <li>Временный мут (ограничение использования чата)</li>
                  <li>Временный бан (от 1 часа до 30 дней)</li>
                  <li>Перманентный бан</li>
                </ul>
                <p className="text-gray-600 mb-4">
                  Если вы считаете, что наказание было применено ошибочно, вы можете подать апелляцию через наш Discord 
                  или форум в течение 7 дней с момента получения наказания.
                </p>
                <p className="text-gray-600">
                  Окончательное решение по апелляциям принимается администрацией проекта и не подлежит дальнейшему обжалованию.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Rules;
