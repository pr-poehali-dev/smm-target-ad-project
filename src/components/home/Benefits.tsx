
import { Database, Target, BarChart3 } from "lucide-react";
import { BenefitCard } from "@/components/home/cards/BenefitCard";

const Benefits = () => {
  const benefits = [
    {
      icon: <Database className="h-12 w-12 text-violet-600 mb-4" />,
      title: "Глубокий анализ данных",
      description: "Используем большие массивы данных для выявления точных портретов вашей целевой аудитории"
    },
    {
      icon: <Target className="h-12 w-12 text-violet-600 mb-4" />,
      title: "Точное таргетирование",
      description: "Показываем рекламу только тем, кто действительно заинтересован в вашем предложении"
    },
    {
      icon: <BarChart3 className="h-12 w-12 text-violet-600 mb-4" />,
      title: "Детальная аналитика",
      description: "Предоставляем подробные отчеты о результатах каждой рекламной кампании"
    }
  ];

  return (
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
          {benefits.map((benefit, index) => (
            <BenefitCard 
              key={index} 
              icon={benefit.icon} 
              title={benefit.title} 
              description={benefit.description} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
