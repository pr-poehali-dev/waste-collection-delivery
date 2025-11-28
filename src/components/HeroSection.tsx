import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

interface HeroSectionProps {
  scrollToSection: (id: string) => void;
}

const HeroSection = ({ scrollToSection }: HeroSectionProps) => {
  return (
    <>
      <section id="hero" className="pt-32 pb-20 relative overflow-hidden">
        <div 
          className="absolute inset-0 z-0 opacity-10"
          style={{
            backgroundImage: `url(https://cdn.poehali.dev/projects/f23bc7f7-b741-42ba-9d34-bb343f48a754/files/5897cc84-1ff2-471a-8e0d-a33b12780633.jpg)`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Вывоз мусора и доставки по Ростову-на-Дону
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Быстро, надёжно и по честным ценам
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="text-lg px-8" onClick={() => scrollToSection('contacts')}>
                Заказать вывоз
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8" onClick={() => scrollToSection('pricing')}>
                Узнать цены
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <Card className="text-center">
              <CardContent className="pt-8">
                <Icon name="Clock" className="w-12 h-12 mx-auto mb-4 text-primary" />
                <h3 className="font-bold text-lg mb-2">Работаем 24/7</h3>
                <p className="text-muted-foreground">Вывезем мусор в любое удобное время</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="pt-8">
                <Icon name="Truck" className="w-12 h-12 mx-auto mb-4 text-primary" />
                <h3 className="font-bold text-lg mb-2">Свой автопарк</h3>
                <p className="text-muted-foreground">ГАЗели для любого объема</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="pt-8">
                <Icon name="Users" className="w-12 h-12 mx-auto mb-4 text-primary" />
                <h3 className="font-bold text-lg mb-2">Опытные грузчики</h3>
                <p className="text-muted-foreground">Аккуратно погрузим и вывезем всё</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="pt-8">
                <Icon name="ShieldCheck" className="w-12 h-12 mx-auto mb-4 text-primary" />
                <h3 className="font-bold text-lg mb-2">Гарантия качества</h3>
                <p className="text-muted-foreground">Официальный договор и чеки</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
