import { Link } from "react-router-dom";
import Logo from "@/components/Logo";

const Footer = () => {
  return (
    <footer className="bg-cubeworld-dark py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Лого и описание */}
          <div>
            <Logo className="mb-4" />
            <p className="text-gray-300 mb-4">
              CubeWorld — современный сервер Minecraft с уникальными режимами, дружным сообществом и регулярными обновлениями.
            </p>
            <div className="flex gap-4">
              <a href="https://vk.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-cubeworld-accent transition-colors">
                <span className="text-2xl">📱</span>
              </a>
              <a href="https://discord.gg" target="_blank" rel="noopener noreferrer" className="text-white hover:text-cubeworld-accent transition-colors">
                <span className="text-2xl">💬</span>
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-cubeworld-accent transition-colors">
                <span className="text-2xl">📺</span>
              </a>
            </div>
          </div>

          {/* Быстрые ссылки */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4">Навигация</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/servers" className="text-gray-300 hover:text-cubeworld-accent transition-colors">Сервера</Link>
              </li>
              <li>
                <Link to="/donate" className="text-gray-300 hover:text-cubeworld-accent transition-colors">Привилегии</Link>
              </li>
              <li>
                <Link to="/rules" className="text-gray-300 hover:text-cubeworld-accent transition-colors">Правила</Link>
              </li>
              <li>
                <Link to="/rewards" className="text-gray-300 hover:text-cubeworld-accent transition-colors">Бонусы</Link>
              </li>
              <li>
                <Link to="/how-to-play" className="text-gray-300 hover:text-cubeworld-accent transition-colors">Как начать играть</Link>
              </li>
            </ul>
          </div>

          {/* Контакты */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4">Контакты</h3>
            <p className="text-gray-300 mb-2">Техническая поддержка: support@cubeworld.ru</p>
            <p className="text-gray-300 mb-2">Для партнеров: admin@cubeworld.ru</p>
            <p className="text-gray-300">Время работы: 24/7</p>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-4">
          <p className="text-gray-400 text-center">
            © {new Date().getFullYear()} CubeWorld. Все права защищены. Не является официальным продуктом Mojang.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
