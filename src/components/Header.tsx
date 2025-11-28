import { Button } from "@/components/ui/button";

interface HeaderProps {
  scrollToSection: (id: string) => void;
}

const Header = ({ scrollToSection }: HeaderProps) => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-3">
            <img 
              src="https://cdn.poehali.dev/files/a96f026e-4bd2-43c0-9e5f-84c8128a1265.jpg" 
              alt="ДоставиК" 
              className="h-12 w-12 object-contain"
            />
            <span className="text-2xl font-bold text-primary">ПроСервис</span>
          </div>
          
          <nav className="hidden md:flex gap-8">
            <button onClick={() => scrollToSection('hero')} className="text-foreground hover:text-primary transition-colors font-semibold">
              Главная
            </button>
            <button onClick={() => scrollToSection('services')} className="text-foreground hover:text-primary transition-colors font-semibold">
              Услуги
            </button>
            <button onClick={() => scrollToSection('pricing')} className="text-foreground hover:text-primary transition-colors font-semibold">
              Цены
            </button>
            <button onClick={() => scrollToSection('contacts')} className="text-foreground hover:text-primary transition-colors font-semibold">
              Контакты
            </button>
          </nav>

          <Button onClick={() => scrollToSection('contacts')} className="hidden md:block">
            Заказать вывоз
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;