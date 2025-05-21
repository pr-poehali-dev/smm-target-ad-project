
import { useState } from "react";
import { ChevronDown, BarChart3, Target, Database, Users, Zap, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Index = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // В реальном проекте здесь будет отправка данных на сервер
    alert("Спасибо за сообщение! Мы скоро с вами свяжемся.");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-violet-50 to-blue-50">
      {/* Header */}
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

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 md:pr-12">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Таргетированная реклама с <span className="text-violet-600">точностью</span> до клиента
              </h1>
              <p className="text-xl text-gray-700 mb-8">
                Используем базы данных и аналитику для создания рекламных кампаний, 
                которые находят именно <span className="font-semibold">вашу</span> аудиторию.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-gradient-to-r from-violet-600 to-blue-500 hover:from-violet-700 hover:to-blue-600">
                  Начать сейчас
                </Button>
                <Button size="lg" variant="outline" className="gap-2">
                  Узнать больше <ChevronDown className="h-4 w-4" />
                </Button>
              </div>
            </div>
            <div className="md:w-1/2 mt-12 md:mt-0 flex justify-center">
              <img
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000"
                alt="Аналитика рекламных кампаний"
                className="rounded-2xl shadow-2xl max-w-full h-auto"
                width={600}
                height={400}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Почему наш подход работает лучше
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Мы используем продвинутые технологии анализа баз данных для достижения максимальной эффективности рекламы
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 rounded-xl bg-gradient-to-br from-violet-50 to-blue-50 shadow-sm border border-violet-100 hover:shadow-md transition-shadow">
              <Database className="h-12 w-12 text-violet-600 mb-4" />
              <h3 className="text-xl font-bold mb-3">Глубокий анализ данных</h3>
              <p className="text-gray-700">
                Используем большие массивы данных для выявления точных портретов вашей целевой аудитории
              </p>
            </div>

            <div className="p-6 rounded-xl bg-gradient-to-br from-violet-50 to-blue-50 shadow-sm border border-violet-100 hover:shadow-md transition-shadow">
              <Target className="h-12 w-12 text-violet-600 mb-4" />
              <h3 className="text-xl font-bold mb-3">Точное таргетирование</h3>
              <p className="text-gray-700">
                Показываем рекламу только тем, кто действительно заинтересован в вашем предложении
              </p>
            </div>

            <div className="p-6 rounded-xl bg-gradient-to-br from-violet-50 to-blue-50 shadow-sm border border-violet-100 hover:shadow-md transition-shadow">
              <BarChart3 className="h-12 w-12 text-violet-600 mb-4" />
              <h3 className="text-xl font-bold mb-3">Детальная аналитика</h3>
              <p className="text-gray-700">
                Предоставляем подробные отчеты о результатах каждой рекламной кампании
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 bg-gradient-to-b from-violet-900 to-blue-900 text-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Наши услуги
            </h2>
            <p className="text-xl opacity-80 max-w-3xl mx-auto">
              Комплексный подход к продвижению вашего бизнеса в социальных сетях
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-white/10 backdrop-blur-sm border-none text-white hover:bg-white/20 transition-colors">
              <CardHeader>
                <Target className="h-8 w-8 mb-2" />
                <CardTitle>Таргетированная реклама</CardTitle>
                <CardDescription className="text-white/70">
                  Настройка и ведение рекламных кампаний в социальных сетях
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <div className="mr-2 h-5 w-5 text-violet-400">✓</div>
                    <span>Индивидуальная стратегия продвижения</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 h-5 w-5 text-violet-400">✓</div>
                    <span>Создание креативов для рекламы</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 h-5 w-5 text-violet-400">✓</div>
                    <span>A/B тестирование аудиторий</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-none text-white hover:bg-white/20 transition-colors">
              <CardHeader>
                <Database className="h-8 w-8 mb-2" />
                <CardTitle>Сегментация баз данных</CardTitle>
                <CardDescription className="text-white/70">
                  Анализ и разделение аудитории на ценные сегменты
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <div className="mr-2 h-5 w-5 text-violet-400">✓</div>
                    <span>Сбор и анализ данных о клиентах</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 h-5 w-5 text-violet-400">✓</div>
                    <span>Выделение целевых сегментов</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 h-5 w-5 text-violet-400">✓</div>
                    <span>Персонализированные рекламные предложения</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-none text-white hover:bg-white/20 transition-colors">
              <CardHeader>
                <BarChart3 className="h-8 w-8 mb-2" />
                <CardTitle>Аналитика и отчетность</CardTitle>
                <CardDescription className="text-white/70">
                  Детальная аналитика эффективности рекламных кампаний
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <div className="mr-2 h-5 w-5 text-violet-400">✓</div>
                    <span>Еженедельные отчеты о результатах</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 h-5 w-5 text-violet-400">✓</div>
                    <span>Рекомендации по оптимизации</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 h-5 w-5 text-violet-400">✓</div>
                    <span>Прогнозирование результатов</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section id="stats" className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Результаты нашей работы
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Цифры говорят сами за себя
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 rounded-xl bg-gradient-to-br from-violet-50 to-blue-50 shadow-sm border border-violet-100">
              <div className="text-5xl font-bold text-violet-600 mb-3">+216%</div>
              <p className="text-gray-700 font-medium">Средний рост ROI</p>
            </div>
            
            <div className="text-center p-6 rounded-xl bg-gradient-to-br from-violet-50 to-blue-50 shadow-sm border border-violet-100">
              <div className="text-5xl font-bold text-violet-600 mb-3">45+</div>
              <p className="text-gray-700 font-medium">Успешных клиентов</p>
            </div>
            
            <div className="text-center p-6 rounded-xl bg-gradient-to-br from-violet-50 to-blue-50 shadow-sm border border-violet-100">
              <div className="text-5xl font-bold text-violet-600 mb-3">-30%</div>
              <p className="text-gray-700 font-medium">Снижение стоимости лида</p>
            </div>
            
            <div className="text-center p-6 rounded-xl bg-gradient-to-br from-violet-50 to-blue-50 shadow-sm border border-violet-100">
              <div className="text-5xl font-bold text-violet-600 mb-3">5М+</div>
              <p className="text-gray-700 font-medium">Обработанных контактов</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-blue-50 to-violet-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Что говорят наши клиенты
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Отзывы от компаний, которые уже работают с нами
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="shadow-md">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-violet-500 to-blue-500 flex items-center justify-center text-white font-bold text-xl">
                    А
                  </div>
                  <div className="ml-4">
                    <h4 className="font-bold">Алексей Петров</h4>
                    <p className="text-sm text-gray-500">ООО "Техностарт"</p>
                  </div>
                </div>
                <p className="text-gray-700">
                  "Благодаря работе с базами данных и точному таргетированию, нам удалось снизить стоимость привлечения клиента почти в 2 раза. Очень доволен результатами!"
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-md">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-violet-500 to-blue-500 flex items-center justify-center text-white font-bold text-xl">
                    М
                  </div>
                  <div className="ml-4">
                    <h4 className="font-bold">Мария Иванова</h4>
                    <p className="text-sm text-gray-500">Интернет-магазин "Стильный дом"</p>
                  </div>
                </div>
                <p className="text-gray-700">
                  "Команда профессионалов, которая точно знает, как найти именно вашу аудиторию. За первый месяц работы конверсия выросла на 34%."
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-md">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-violet-500 to-blue-500 flex items-center justify-center text-white font-bold text-xl">
                    С
                  </div>
                  <div className="ml-4">
                    <h4 className="font-bold">Сергей Николаев</h4>
                    <p className="text-sm text-gray-500">Сеть ресторанов "Вкусно и точка"</p>
                  </div>
                </div>
                <p className="text-gray-700">
                  "Впечатлен качеством аналитики и детализацией отчетов. Наконец-то мы понимаем, как работает наша реклама и куда идут деньги."
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact" className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Готовы начать привлекать <span className="text-violet-600">целевых клиентов</span>?
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Оставьте заявку, и мы свяжемся с вами для обсуждения вашего проекта
              </p>
              
              <div className="flex items-center mb-8">
                <div className="bg-violet-100 p-3 rounded-full mr-4">
                  <Mail className="h-6 w-6 text-violet-600" />
                </div>
                <div>
                  <h4 className="font-bold">Email</h4>
                  <p className="text-gray-600">info@targetpro.ru</p>
                </div>
              </div>
              
              <div className="flex items-center mb-8">
                <div className="bg-violet-100 p-3 rounded-full mr-4">
                  <Zap className="h-6 w-6 text-violet-600" />
                </div>
                <div>
                  <h4 className="font-bold">Быстрый старт</h4>
                  <p className="text-gray-600">Запуск кампании за 48 часов</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="bg-violet-100 p-3 rounded-full mr-4">
                  <Users className="h-6 w-6 text-violet-600" />
                </div>
                <div>
                  <h4 className="font-bold">Персональный подход</h4>
                  <p className="text-gray-600">Индивидуальная стратегия для каждого клиента</p>
                </div>
              </div>
            </div>
            
            <div className="md:w-1/2 w-full max-w-md">
              <form onSubmit={handleSubmit} className="bg-white shadow-xl rounded-xl p-8 border border-gray-100">
                <h3 className="text-2xl font-bold mb-6">Отправить заявку</h3>
                
                <div className="mb-6">
                  <label htmlFor="name" className="block mb-2 font-medium">
                    Ваше имя
                  </label>
                  <Input 
                    id="name" 
                    placeholder="Как к вам обращаться" 
                    required 
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="email" className="block mb-2 font-medium">
                    Email
                  </label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="example@company.com" 
                    required 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block mb-2 font-medium">
                    Сообщение
                  </label>
                  <Textarea 
                    id="message" 
                    placeholder="Расскажите кратко о вашем проекте" 
                    rows={4} 
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-violet-600 to-blue-500 hover:from-violet-700 hover:to-blue-600"
                  size="lg"
                >
                  Отправить заявку
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
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
    </div>
  );
};

export default Index;
