
import { useState } from "react";
import { Mail, Zap, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ContactInfoItem } from "@/components/home/ContactInfoItem";

const ContactForm = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // В реальном проекте здесь будет отправка данных на сервер
    alert("Спасибо за сообщение! Мы скоро с вами свяжемся.");
    setEmail("");
    setMessage("");
  };

  const contactInfoItems = [
    {
      icon: <Mail className="h-6 w-6 text-violet-600" />,
      title: "Email",
      description: "info@targetpro.ru"
    },
    {
      icon: <Zap className="h-6 w-6 text-violet-600" />,
      title: "Быстрый старт",
      description: "Запуск кампании за 48 часов"
    },
    {
      icon: <Users className="h-6 w-6 text-violet-600" />,
      title: "Персональный подход",
      description: "Индивидуальная стратегия для каждого клиента"
    }
  ];

  return (
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
            
            {contactInfoItems.map((item, index) => (
              <ContactInfoItem
                key={index}
                icon={item.icon}
                title={item.title}
                description={item.description}
              />
            ))}
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
  );
};

export default ContactForm;
