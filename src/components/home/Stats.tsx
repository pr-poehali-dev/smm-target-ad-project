
import { StatCard } from "@/components/home/cards/StatCard";

const Stats = () => {
  const stats = [
    { value: "+216%", label: "Средний рост ROI" },
    { value: "45+", label: "Успешных клиентов" },
    { value: "-30%", label: "Снижение стоимости лида" },
    { value: "5М+", label: "Обработанных контактов" }
  ];

  return (
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
          {stats.map((stat, index) => (
            <StatCard key={index} value={stat.value} label={stat.label} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
