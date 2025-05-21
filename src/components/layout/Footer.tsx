
import { Target } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="mb-8 md:mb-0">
            <div className="flex items-center mb-4">
              <Target className="h-8 w-8 text-violet-400 mr-2" />
              <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-violet-400 to-blue-400">
                ТаргетПро
              </span>
            </div>
            <p className="text-gray-400 max-w-xs">
              Эффективная таргетированная реклама на основе профессионального анализа баз данных
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h4 className="font-bold text-lg mb-4">Услуги</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Таргетированная реклама</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Аналитика баз данных</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Сегментация аудитории</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Отчеты и аналитика</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold text-lg mb-4">Компания</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">О нас</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Кейсы</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Блог</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Контакты</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold text-lg mb-4">Контакты</h4>
              <ul className="space-y-2">
                <li className="text-gray-400">info@targetpro.ru</li>
                <li className="text-gray-400">+7 (495) 123-45-67</li>
                <li className="text-gray-400">Москва, ул. Примерная, 123</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 mb-4 md:mb-0">
            © 2025 ТаргетПро. Все права защищены.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              Условия использования
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              Политика конфиденциальности
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
