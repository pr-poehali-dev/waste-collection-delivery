import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

interface ServicesSectionProps {
  scrollToSection: (id: string) => void;
}

const ServicesSection = ({ scrollToSection }: ServicesSectionProps) => {
  return (
    <>
      <section id="services" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">Наши услуги</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Вывозим любые виды мусора быстро и по честным ценам
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <Icon name="Home" className="w-10 h-10 mb-4 text-primary" />
                <h3 className="text-xl font-bold mb-3">Бытовой мусор</h3>
                <p className="text-muted-foreground mb-4">
                  Вывоз бытового мусора из квартир, домов и дач. Старая мебель, техника, одежда.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <Icon name="Check" className="w-4 h-4 text-secondary" />
                    Мебель и бытовая техника
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" className="w-4 h-4 text-secondary" />
                    Одежда и текстиль
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" className="w-4 h-4 text-secondary" />
                    Картон и упаковка
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <Icon name="Hammer" className="w-10 h-10 mb-4 text-primary" />
                <h3 className="text-xl font-bold mb-3">Строительный мусор</h3>
                <p className="text-muted-foreground mb-4">
                  Вывоз строительного и ремонтного мусора любого объема после ремонта.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <Icon name="Check" className="w-4 h-4 text-secondary" />
                    Кирпич, бетон, штукатурка
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" className="w-4 h-4 text-secondary" />
                    Гипсокартон и плитка
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" className="w-4 h-4 text-secondary" />
                    Окна, двери, сантехника
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <Icon name="Trees" className="w-10 h-10 mb-4 text-primary" />
                <h3 className="text-xl font-bold mb-3">Садовый мусор</h3>
                <p className="text-muted-foreground mb-4">
                  Вывоз веток, листвы, травы и другого растительного мусора с участка.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <Icon name="Check" className="w-4 h-4 text-secondary" />
                    Ветки и листва
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" className="w-4 h-4 text-secondary" />
                    Трава и сорняки
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" className="w-4 h-4 text-secondary" />
                    Спиленные деревья
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <Icon name="Building" className="w-10 h-10 mb-4 text-primary" />
                <h3 className="text-xl font-bold mb-3">Офисный мусор</h3>
                <p className="text-muted-foreground mb-4">
                  Вывоз мусора из офисов при переезде или закрытии. Мебель, техника, документы.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <Icon name="Check" className="w-4 h-4 text-secondary" />
                    Офисная мебель
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" className="w-4 h-4 text-secondary" />
                    Компьютеры и техника
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" className="w-4 h-4 text-secondary" />
                    Архивы документов
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <Icon name="Warehouse" className="w-10 h-10 mb-4 text-primary" />
                <h3 className="text-xl font-bold mb-3">Крупногабаритный</h3>
                <p className="text-muted-foreground mb-4">
                  Вывоз крупногабаритного мусора: диваны, шкафы, холодильники и другое.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <Icon name="Check" className="w-4 h-4 text-secondary" />
                    Мебель любых размеров
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" className="w-4 h-4 text-secondary" />
                    Бытовая техника
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" className="w-4 h-4 text-secondary" />
                    Сантехника
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="pricing" className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">Наши цены</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Прозрачное ценообразование без скрытых платежей
          </p>
          
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <Icon name="Truck" className="w-12 h-12 mx-auto mb-4 text-primary" />
                  <h3 className="text-2xl font-bold mb-2">ГАЗель</h3>
                  <p className="text-muted-foreground text-sm">До 2 тонн, 10 м³</p>
                </div>
                <div className="text-center mb-6">
                  <span className="text-4xl font-bold">3 500₽</span>
                  <span className="text-muted-foreground">/выезд</span>
                </div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center gap-2">
                    <Icon name="Check" className="w-5 h-5 text-secondary" />
                    <span>Квартирный мусор</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" className="w-5 h-5 text-secondary" />
                    <span>Старая мебель</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" className="w-5 h-5 text-secondary" />
                    <span>Бытовая техника</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" className="w-5 h-5 text-secondary" />
                    <span>До 5 этажа</span>
                  </li>
                </ul>
                <Button className="w-full" onClick={() => scrollToSection('contacts')}>
                  Заказать
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-primary border-2 relative">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-white px-4 py-1 rounded-full text-sm font-semibold">
                Популярный
              </div>
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <Icon name="Truck" className="w-12 h-12 mx-auto mb-4 text-primary" />
                  <h3 className="text-2xl font-bold mb-2">ГАЗель + грузчики</h3>
                  <p className="text-muted-foreground text-sm">До 2 тонн, 10 м³</p>
                </div>
                <div className="text-center mb-6">
                  <span className="text-4xl font-bold">5 500₽</span>
                  <span className="text-muted-foreground">/выезд</span>
                </div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center gap-2">
                    <Icon name="Check" className="w-5 h-5 text-secondary" />
                    <span>Всё включено</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" className="w-5 h-5 text-secondary" />
                    <span>2 грузчика</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" className="w-5 h-5 text-secondary" />
                    <span>Погрузка и вывоз</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" className="w-5 h-5 text-secondary" />
                    <span>Любой этаж</span>
                  </li>
                </ul>
                <Button className="w-full" onClick={() => scrollToSection('contacts')}>
                  Заказать
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <p className="text-muted-foreground mb-4">
              * Окончательная цена зависит от объема, веса и дальности вывоза
            </p>
            <Button variant="outline" size="lg" onClick={() => scrollToSection('contacts')}>
              Рассчитать точную стоимость
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesSection;
