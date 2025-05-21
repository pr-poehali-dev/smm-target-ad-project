
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
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
  );
};

export default Hero;
