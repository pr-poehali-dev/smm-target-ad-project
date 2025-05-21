
import { Card, CardContent } from "@/components/ui/card";
import { TestimonialCard } from "@/components/home/cards/TestimonialCard";

const Testimonials = () => {
  const testimonials = [
    {
      initial: "А",
      name: "Алексей Петров",
      company: "ООО \"Техностарт\"",
      text: "\"Благодаря работе с базами данных и точному таргетированию, нам удалось снизить стоимость привлечения клиента почти в 2 раза. Очень доволен результатами!\""
    },
    {
      initial: "М",
      name: "Мария Иванова",
      company: "Интернет-магазин \"Стильный дом\"",
      text: "\"Команда профессионалов, которая точно знает, как найти именно вашу аудиторию. За первый месяц работы конверсия выросла на 34%.\""
    },
    {
      initial: "С",
      name: "Сергей Николаев",
      company: "Сеть ресторанов \"Вкусно и точка\"",
      text: "\"Впечатлен качеством аналитики и детализацией отчетов. Наконец-то мы понимаем, как работает наша реклама и куда идут деньги.\""
    }
  ];

  return (
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
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="shadow-md">
              <CardContent className="pt-6">
                <TestimonialCard
                  initial={testimonial.initial}
                  name={testimonial.name}
                  company={testimonial.company}
                  text={testimonial.text}
                />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
