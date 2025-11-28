import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";

const ContactsSection = () => {
  return (
    <>
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
                <li>Работаем 24/7</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-700 pt-8 text-center text-sm text-gray-400">
            <p>© 2024 ДоставиК. Все права защищены. ИНН 7701234567</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default ContactsSection;