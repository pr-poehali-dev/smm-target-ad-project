
import { Target, Database, BarChart3 } from "lucide-react";
import { Card, CardHeader, CardContent, CardTitle, CardDescription } from "@/components/ui/card";
import { ServiceFeatureList } from "@/components/home/cards/ServiceFeatureList";

const Services = () => {
  const services = [
    {
      icon: <Target className="h-8 w-8 mb-2" />,
      title: "Таргетированная реклама",
      description: "Настройка и ведение рекламных кампаний в социальных сетях",
      features: [
        "Индивидуальная стратегия продвижения",
        "Создание креативов для рекламы",
        "A/B тестирование аудиторий"
      ]
    },
    {
      icon: <Database className="h-8 w-8 mb-2" />,
      title: "Сегментация баз данных",
      description: "Анализ и разделение аудитории на ценные сегменты",
      features: [
        "Сбор и анализ данных о клиентах",
        "Выделение целевых сегментов",
        "Персонализированные рекламные предложения"
      ]
    },
    {
      icon: <BarChart3 className="h-8 w-8 mb-2" />,
      title: "Аналитика и отчетность",
      description: "Детальная аналитика эффективности рекламных кампаний",
      features: [
        "Еженедельные отчеты о результатах",
        "Рекомендации по оптимизации",
        "Прогнозирование результатов"
      ]
    }
  ];

  return (
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
          {services.map((service, index) => (
            <Card key={index} className="bg-white/10 backdrop-blur-sm border-none text-white hover:bg-white/20 transition-colors">
              <CardHeader>
                {service.icon}
                <CardTitle>{service.title}</CardTitle>
                <CardDescription className="text-white/70">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ServiceFeatureList features={service.features} />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
