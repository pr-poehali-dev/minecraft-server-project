import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-minecraft-dark py-8 border-t-2 border-minecraft-green">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Лого и описание */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img src="/logo-b.svg" alt="МайнЛенд" className="h-10" />
              <h3 className="text-xl font-bold text-white">МайнЛенд</h3>
            </div>
            <p className="text-gray-300 mb-4">
              Лучший игровой проект для всех любителей Minecraft в России. Присоединяйтесь к нашему сообществу прямо сейчас!
            </p>
            <div className="flex gap-4">
              <a href="https://vk.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-minecraft-green transition-colors">
                <span className="text-2xl">📱</span>
              </a>
              <a href="https://discord.gg" target="_blank" rel="noopener noreferrer" className="text-white hover:text-minecraft-green transition-colors">
                <span className="text-2xl">💬</span>
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-minecraft-green transition-colors">
                <span className="text-2xl">📺</span>
              </a>
            </div>
          </div>

          {/* Быстрые ссылки */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4">Навигация</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/servers" className="text-gray-300 hover:text-minecraft-green transition-colors">Сервера</Link>
              </li>
              <li>
                <Link to="/donate" className="text-gray-300 hover:text-minecraft-green transition-colors">Донат</Link>
              </li>
              <li>
                <Link to="/forum" className="text-gray-300 hover:text-minecraft-green transition-colors">Форум</Link>
              </li>
              <li>
                <Link to="/rules" className="text-gray-300 hover:text-minecraft-green transition-colors">Правила</Link>
              </li>
              <li>
                <Link to="/play" className="text-gray-300 hover:text-minecraft-green transition-colors">Начать играть</Link>
              </li>
            </ul>
          </div>

          {/* Контакты */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4">Контакты</h3>
            <p className="text-gray-300 mb-2">Техническая поддержка: support@mineland.ru</p>
            <p className="text-gray-300 mb-2">Для сотрудничества: admin@mineland.ru</p>
            <p className="text-gray-300">Онлайн 24/7</p>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-4">
          <p className="text-gray-400 text-center">
            © {new Date().getFullYear()} МайнЛенд. Все права защищены. Не является официальным ресурсом Minecraft.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
