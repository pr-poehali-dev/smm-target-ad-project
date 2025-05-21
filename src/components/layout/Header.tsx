
import { Target } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="container mx-auto px-4 py-6 flex justify-between items-center">
      <div className="flex items-center">
        <Target className="h-8 w-8 text-violet-600 mr-2" />
        <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-violet-600 to-blue-500">
          ТаргетПро
        </span>
      </div>
      <nav className="hidden md:flex space-x-8">
        <a href="#services" className="text-gray-700 hover:text-violet-600 transition-colors">
          Услуги
        </a>
        <a href="#benefits" className="text-gray-700 hover:text-violet-600 transition-colors">
          Преимущества
        </a>
        <a href="#stats" className="text-gray-700 hover:text-violet-600 transition-colors">
          Результаты
        </a>
        <a href="#contact" className="text-gray-700 hover:text-violet-600 transition-colors">
          Контакты
        </a>
      </nav>
      <Button variant="outline" className="hidden md:flex">
        Связаться
      </Button>
    </header>
  );
};

export default Header;
