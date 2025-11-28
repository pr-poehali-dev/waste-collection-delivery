import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";

const Index = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen">
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
              <button onClick={() => scrollToSection('about')} className="text-foreground hover:text-primary transition-colors font-semibold">
                О компании
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
              Быстро, надежно и по честным ценам. Работаем 24/7 без выходных. Более 10 лет на рынке.
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
                <p className="text-muted-foreground">ГАЗели и КамАЗы для любого объема</p>
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

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <Icon name="Trash2" className="w-10 h-10 mb-4 text-primary" />
                <h3 className="text-xl font-bold mb-3">Контейнерный вывоз</h3>
                <p className="text-muted-foreground mb-4">
                  Установка контейнеров на период ремонта или стройки с регулярным вывозом.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <Icon name="Check" className="w-4 h-4 text-secondary" />
                    Контейнеры 8-20 м³
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" className="w-4 h-4 text-secondary" />
                    Регулярный вывоз
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" className="w-4 h-4 text-secondary" />
                    Аренда на любой срок
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
          
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
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

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <Icon name="Truck" className="w-12 h-12 mx-auto mb-4 text-primary" />
                  <h3 className="text-2xl font-bold mb-2">КамАЗ</h3>
                  <p className="text-muted-foreground text-sm">До 6 тонн, 20 м³</p>
                </div>
                <div className="text-center mb-6">
                  <span className="text-4xl font-bold">12 000₽</span>
                  <span className="text-muted-foreground">/выезд</span>
                </div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center gap-2">
                    <Icon name="Check" className="w-5 h-5 text-secondary" />
                    <span>Строительный мусор</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" className="w-5 h-5 text-secondary" />
                    <span>Большой объем</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" className="w-5 h-5 text-secondary" />
                    <span>4 грузчика</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" className="w-5 h-5 text-secondary" />
                    <span>Полный комплекс</span>
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

      <section id="about" className="py-20 relative">
        <div 
          className="absolute inset-0 z-0 opacity-5"
          style={{
            backgroundImage: `url(https://cdn.poehali.dev/projects/f23bc7f7-b741-42ba-9d34-bb343f48a754/files/fc0d0169-1504-4f6c-8673-25a84b3b9d80.jpg)`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-4">О компании ДоставиК</h2>
            <p className="text-center text-muted-foreground mb-12 text-lg">
              Более 10 лет помогаем избавиться от мусора быстро и без проблем
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div>
                <h3 className="text-2xl font-bold mb-4">Почему нам доверяют?</h3>
                <ul className="space-y-4">
                  <li className="flex gap-3">
                    <Icon name="CheckCircle2" className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                    <div>
                      <strong className="block mb-1">Лицензия и документы</strong>
                      <span className="text-muted-foreground">Официальная компания с полным пакетом разрешений на вывоз и утилизацию отходов</span>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <Icon name="CheckCircle2" className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                    <div>
                      <strong className="block mb-1">Собственный автопарк</strong>
                      <span className="text-muted-foreground">15 автомобилей ГАЗель и КамАЗ всегда готовы к выезду</span>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <Icon name="CheckCircle2" className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                    <div>
                      <strong className="block mb-1">Опытная команда</strong>
                      <span className="text-muted-foreground">Квалифицированные грузчики с опытом работы от 3 лет</span>
                    </div>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-4">Наши преимущества</h3>
                <ul className="space-y-4">
                  <li className="flex gap-3">
                    <Icon name="Star" className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <strong className="block mb-1">Быстрый выезд</strong>
                      <span className="text-muted-foreground">Приедем через 1-2 часа после заказа, работаем круглосуточно</span>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <Icon name="Star" className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <strong className="block mb-1">Честные цены</strong>
                      <span className="text-muted-foreground">Фиксируем стоимость до начала работ, никаких доплат</span>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <Icon name="Star" className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <strong className="block mb-1">Чистота после вывоза</strong>
                      <span className="text-muted-foreground">Уберём мусор и подметём территорию после погрузки</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div className="grid md:grid-cols-4 gap-6 text-center">
              <div className="p-6 bg-white rounded-lg shadow-sm">
                <div className="text-4xl font-bold text-primary mb-2">10+</div>
                <div className="text-muted-foreground">лет на рынке</div>
              </div>
              <div className="p-6 bg-white rounded-lg shadow-sm">
                <div className="text-4xl font-bold text-primary mb-2">5000+</div>
                <div className="text-muted-foreground">довольных клиентов</div>
              </div>
              <div className="p-6 bg-white rounded-lg shadow-sm">
                <div className="text-4xl font-bold text-primary mb-2">15</div>
                <div className="text-muted-foreground">единиц техники</div>
              </div>
              <div className="p-6 bg-white rounded-lg shadow-sm">
                <div className="text-4xl font-bold text-primary mb-2">24/7</div>
                <div className="text-muted-foreground">круглосуточно</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">Контакты</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Оставьте заявку и мы перезвоним в течение 5 минут
          </p>

          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div>
              <Card>
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-6">Заказать вывоз мусора</h3>
                  <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                    <div>
                      <label className="block text-sm font-semibold mb-2">Ваше имя</label>
                      <Input placeholder="Иван" />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold mb-2">Телефон</label>
                      <Input placeholder="+7 (999) 123-45-67" type="tel" />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold mb-2">Адрес вывоза</label>
                      <Input placeholder="г. Москва, ул. Примерная, д. 1" />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold mb-2">Комментарий</label>
                      <Textarea 
                        placeholder="Опишите объем и тип мусора, нужны ли грузчики" 
                        rows={4}
                      />
                    </div>
                    <Button className="w-full" size="lg">
                      Отправить заявку
                    </Button>
                    <p className="text-xs text-center text-muted-foreground">
                      Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                    </p>
                  </form>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold mb-6">Как нас найти</h3>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <Icon name="Phone" className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <strong className="block mb-1">Телефон</strong>
                      <a href="tel:+74951234567" className="text-lg text-primary hover:underline">
                        +7 (495) 123-45-67
                      </a>
                      <p className="text-sm text-muted-foreground">Круглосуточно без выходных</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Icon name="Mail" className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <strong className="block mb-1">Email</strong>
                      <a href="mailto:info@dostavik.ru" className="text-primary hover:underline">
                        info@dostavik.ru
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Icon name="Clock" className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <strong className="block mb-1">График работы</strong>
                      <p className="text-muted-foreground">
                        Вывоз мусора: 24/7<br />
                        Офис: Пн-Пт 9:00-18:00
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <Card className="bg-secondary text-white">
                <CardContent className="p-6">
                  <h4 className="text-xl font-bold mb-3">Срочный вывоз?</h4>
                  <p className="mb-4">
                    Позвоните нам и мы приедем в течение 1-2 часов в любое время суток!
                  </p>
                  <Button 
                    variant="outline" 
                    className="w-full bg-white text-secondary hover:bg-white/90"
                    size="lg"
                  >
                    <Icon name="Phone" className="w-5 h-5 mr-2" />
                    +7 (495) 123-45-67
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-foreground text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <img 
                  src="https://cdn.poehali.dev/files/a96f026e-4bd2-43c0-9e5f-84c8128a1265.jpg" 
                  alt="ДоставиК" 
                  className="h-10 w-10 object-contain"
                />
                <span className="text-xl font-bold">ДоставиК</span>
              </div>
              <p className="text-sm text-gray-400">
                Профессиональный вывоз мусора в Москве и области с 2014 года
              </p>
            </div>

            <div>
              <h4 className="font-bold mb-4">Услуги</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>Вывоз бытового мусора</li>
                <li>Строительный мусор</li>
                <li>Крупногабаритный мусор</li>
                <li>Контейнерный вывоз</li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Компания</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>О нас</li>
                <li>Наш автопарк</li>
                <li>Лицензии</li>
                <li>Отзывы клиентов</li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Контакты</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>+7 (495) 123-45-67</li>
                <li>info@dostavik.ru</li>
                <li>Москва, ул. Промышленная, 15</li>
                <li>Работаем 24/7</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-700 pt-8 text-center text-sm text-gray-400">
            <p>© 2024 ДоставиК. Все права защищены. ИНН 7701234567</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;