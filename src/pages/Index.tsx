import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [showAdmin, setShowAdmin] = useState(false);

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {!showAdmin ? (
        <>
          <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
            <div className="container mx-auto px-4 py-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Icon name="Shield" size={32} className="text-primary" />
                  <span className="text-2xl font-bold text-secondary">ГИБДД.ЧИСТО</span>
                </div>
                <div className="hidden md:flex items-center gap-6">
                  <button onClick={() => scrollToSection('home')} className="text-sm font-medium hover:text-primary transition-colors">Главная</button>
                  <button onClick={() => scrollToSection('about')} className="text-sm font-medium hover:text-primary transition-colors">О услуге</button>
                  <button onClick={() => scrollToSection('how')} className="text-sm font-medium hover:text-primary transition-colors">Как работает</button>
                  <button onClick={() => scrollToSection('prices')} className="text-sm font-medium hover:text-primary transition-colors">Цены</button>
                  <button onClick={() => scrollToSection('reviews')} className="text-sm font-medium hover:text-primary transition-colors">Отзывы</button>
                  <button onClick={() => scrollToSection('contact')} className="text-sm font-medium hover:text-primary transition-colors">Контакты</button>
                  <Button onClick={() => setShowAdmin(true)} variant="outline" size="sm">
                    <Icon name="Lock" size={16} />
                  </Button>
                </div>
              </div>
            </div>
          </nav>

          <section id="home" className="pt-32 pb-20 px-4">
            <div className="container mx-auto text-center">
              <Badge className="mb-6 px-4 py-2 text-sm bg-accent/20 text-accent-foreground border-accent">
                ⚡ Быстро • Надежно • Конфиденциально
              </Badge>
              <h1 className="text-5xl md:text-7xl font-extrabold text-secondary mb-6 leading-tight">
                Удаление штрафов ГИБДД<br />
                <span className="text-primary">из базы данных</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Профессиональное решение проблем с административными штрафами. 
                Полная конфиденциальность и гарантия результата.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="text-lg px-8 py-6 bg-primary hover:bg-primary/90">
                  <Icon name="Zap" size={20} className="mr-2" />
                  Заказать услугу
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8 py-6" onClick={() => scrollToSection('how')}>
                  Как это работает
                </Button>
              </div>
              <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <Icon name="Clock" size={32} className="text-primary" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">Быстро</h3>
                  <p className="text-muted-foreground">От 24 до 72 часов</p>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <Icon name="ShieldCheck" size={32} className="text-primary" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">Надежно</h3>
                  <p className="text-muted-foreground">100% гарантия</p>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <Icon name="Lock" size={32} className="text-primary" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">Безопасно</h3>
                  <p className="text-muted-foreground">Полная конфиденциальность</p>
                </div>
              </div>
            </div>
          </section>

          <section id="about" className="py-20 px-4 bg-white">
            <div className="container mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-4">О нашей услуге</h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  Мы предоставляем профессиональные услуги по удалению штрафов из баз данных ГИБДД
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                <Card className="border-2 hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <Icon name="Target" size={40} className="text-primary mb-4" />
                    <CardTitle className="text-2xl">Что мы делаем</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <Icon name="Check" size={20} className="text-primary mt-1 flex-shrink-0" />
                        <span>Удаление штрафов за нарушение ПДД</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Icon name="Check" size={20} className="text-primary mt-1 flex-shrink-0" />
                        <span>Очистка записей в базе данных ГИБДД</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Icon name="Check" size={20} className="text-primary mt-1 flex-shrink-0" />
                        <span>Консультации по административным вопросам</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
                <Card className="border-2 hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <Icon name="Award" size={40} className="text-primary mb-4" />
                    <CardTitle className="text-2xl">Наши преимущества</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <Icon name="Check" size={20} className="text-primary mt-1 flex-shrink-0" />
                        <span>Опыт работы более 5 лет</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Icon name="Check" size={20} className="text-primary mt-1 flex-shrink-0" />
                        <span>Более 10 000 успешных кейсов</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Icon name="Check" size={20} className="text-primary mt-1 flex-shrink-0" />
                        <span>Гарантия возврата средств</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          <section id="how" className="py-20 px-4">
            <div className="container mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-4">Как это работает</h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  Простой процесс из 4 шагов к решению вашей проблемы
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
                {[
                  { number: '01', title: 'Заявка', desc: 'Оставьте заявку на сайте или свяжитесь с нами', icon: 'MessageSquare' },
                  { number: '02', title: 'Анализ', desc: 'Проверяем возможность удаления штрафа', icon: 'Search' },
                  { number: '03', title: 'Оплата', desc: 'Оплачиваете услугу после согласования', icon: 'CreditCard' },
                  { number: '04', title: 'Результат', desc: 'Получаете подтверждение удаления', icon: 'CheckCircle' }
                ].map((step, index) => (
                  <Card key={index} className="relative border-2 hover:shadow-xl transition-all hover:-translate-y-1">
                    <CardHeader>
                      <div className="text-6xl font-black text-primary/20 mb-2">{step.number}</div>
                      <Icon name={step.icon as any} size={40} className="text-primary mb-4" />
                      <CardTitle className="text-xl">{step.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{step.desc}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          <section id="prices" className="py-20 px-4 bg-white">
            <div className="container mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-4">Цены</h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  Прозрачное ценообразование без скрытых платежей
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                {[
                  { title: 'Базовый', price: '15 000', features: ['1 штраф', 'Срок: 72 часа', 'Базовая поддержка'], popular: false },
                  { title: 'Стандарт', price: '25 000', features: ['До 3 штрафов', 'Срок: 48 часов', 'Приоритетная поддержка', 'Гарантия 100%'], popular: true },
                  { title: 'Премиум', price: '45 000', features: ['До 5 штрафов', 'Срок: 24 часа', 'VIP поддержка 24/7', 'Гарантия 100%', 'Консультация юриста'], popular: false }
                ].map((plan, index) => (
                  <Card key={index} className={`relative border-2 hover:shadow-xl transition-all ${plan.popular ? 'border-primary shadow-lg scale-105' : ''}`}>
                    {plan.popular && (
                      <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-white">
                        Популярный
                      </Badge>
                    )}
                    <CardHeader className="text-center">
                      <CardTitle className="text-2xl mb-2">{plan.title}</CardTitle>
                      <div className="text-4xl font-bold text-primary mb-2">{plan.price} ₽</div>
                      <CardDescription>за услугу</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3 mb-6">
                        {plan.features.map((feature, i) => (
                          <li key={i} className="flex items-center gap-2">
                            <Icon name="Check" size={20} className="text-primary flex-shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <Button className={`w-full ${plan.popular ? 'bg-primary' : ''}`} variant={plan.popular ? 'default' : 'outline'}>
                        Выбрать план
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          <section id="reviews" className="py-20 px-4">
            <div className="container mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-4">Отзывы клиентов</h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  Более 10 000 довольных клиентов по всей России
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                {[
                  { name: 'Алексей М.', city: 'Москва', text: 'Отличный сервис! Удалили штраф за 48 часов. Все четко и профессионально.', rating: 5 },
                  { name: 'Мария К.', city: 'Санкт-Петербург', text: 'Долго сомневалась, но решилась. Результат превзошел ожидания. Рекомендую!', rating: 5 },
                  { name: 'Дмитрий С.', city: 'Казань', text: 'Быстро, качественно, без проблем. Уже рекомендовал друзьям.', rating: 5 }
                ].map((review, index) => (
                  <Card key={index} className="border-2 hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                          <Icon name="User" size={24} className="text-primary" />
                        </div>
                        <div>
                          <CardTitle className="text-lg">{review.name}</CardTitle>
                          <CardDescription>{review.city}</CardDescription>
                        </div>
                      </div>
                      <div className="flex gap-1">
                        {[...Array(review.rating)].map((_, i) => (
                          <Icon key={i} name="Star" size={16} className="text-accent fill-accent" />
                        ))}
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{review.text}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          <section id="contact" className="py-20 px-4 bg-white">
            <div className="container mx-auto max-w-2xl">
              <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-4">Свяжитесь с нами</h2>
                <p className="text-xl text-muted-foreground">
                  Оставьте заявку и мы свяжемся с вами в течение 15 минут
                </p>
              </div>
              <Card className="border-2">
                <CardContent className="pt-6">
                  <form className="space-y-4">
                    <div>
                      <Input placeholder="Ваше имя" className="h-12" />
                    </div>
                    <div>
                      <Input placeholder="Телефон" className="h-12" />
                    </div>
                    <div>
                      <Input placeholder="Email (необязательно)" className="h-12" />
                    </div>
                    <div>
                      <Input placeholder="Номер постановления (если есть)" className="h-12" />
                    </div>
                    <Button className="w-full h-12 text-lg bg-primary hover:bg-primary/90">
                      <Icon name="Send" size={20} className="mr-2" />
                      Отправить заявку
                    </Button>
                  </form>
                  <div className="mt-8 pt-8 border-t">
                    <div className="flex flex-col gap-4">
                      <div className="flex items-center gap-3">
                        <Icon name="Phone" size={24} className="text-primary" />
                        <span className="text-lg font-medium">+7 (999) 123-45-67</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Icon name="Mail" size={24} className="text-primary" />
                        <span className="text-lg font-medium">info@gibdd-clear.ru</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Icon name="MessageCircle" size={24} className="text-primary" />
                        <span className="text-lg font-medium">Telegram: @gibdd_clear</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          <footer className="bg-secondary text-white py-12 px-4">
            <div className="container mx-auto text-center">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Icon name="Shield" size={32} className="text-primary" />
                <span className="text-2xl font-bold">ГИБДД.ЧИСТО</span>
              </div>
              <p className="text-white/80 mb-4">Профессиональное удаление штрафов ГИБДД из базы данных</p>
              <p className="text-white/60 text-sm">© 2024 Все права защищены</p>
            </div>
          </footer>
        </>
      ) : (
        <AdminPanel onBack={() => setShowAdmin(false)} />
      )}
    </div>
  );
};

const AdminPanel = ({ onBack }: { onBack: () => void }) => {
  const [orders] = useState([
    { id: '001', client: 'Алексей М.', phone: '+7 999 123 45 67', status: 'В работе', amount: '25000', date: '2024-01-15' },
    { id: '002', client: 'Мария К.', phone: '+7 888 234 56 78', status: 'Выполнен', amount: '15000', date: '2024-01-14' },
    { id: '003', client: 'Дмитрий С.', phone: '+7 777 345 67 89', status: 'Новый', amount: '45000', date: '2024-01-16' }
  ]);

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-secondary text-white shadow-lg">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Icon name="Shield" size={32} className="text-primary" />
              <span className="text-2xl font-bold">Панель управления</span>
            </div>
            <Button variant="outline" onClick={onBack} className="text-white border-white hover:bg-white/10">
              <Icon name="LogOut" size={20} className="mr-2" />
              Выход
            </Button>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="border-l-4 border-l-primary">
            <CardHeader className="pb-2">
              <CardDescription>Всего заказов</CardDescription>
              <CardTitle className="text-3xl">248</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-2 text-sm text-green-600">
                <Icon name="TrendingUp" size={16} />
                <span>+12% за месяц</span>
              </div>
            </CardContent>
          </Card>
          <Card className="border-l-4 border-l-accent">
            <CardHeader className="pb-2">
              <CardDescription>В работе</CardDescription>
              <CardTitle className="text-3xl">18</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Icon name="Clock" size={16} />
                <span>Текущие заказы</span>
              </div>
            </CardContent>
          </Card>
          <Card className="border-l-4 border-l-green-500">
            <CardHeader className="pb-2">
              <CardDescription>Выполнено</CardDescription>
              <CardTitle className="text-3xl">230</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-2 text-sm text-green-600">
                <Icon name="CheckCircle" size={16} />
                <span>92.7% успеха</span>
              </div>
            </CardContent>
          </Card>
          <Card className="border-l-4 border-l-blue-500">
            <CardHeader className="pb-2">
              <CardDescription>Доход за месяц</CardDescription>
              <CardTitle className="text-3xl">5.2М ₽</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-2 text-sm text-green-600">
                <Icon name="TrendingUp" size={16} />
                <span>+18% к прошлому</span>
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="orders" className="space-y-6">
          <TabsList className="grid w-full max-w-md grid-cols-2">
            <TabsTrigger value="orders">Заказы</TabsTrigger>
            <TabsTrigger value="clients">Клиенты</TabsTrigger>
          </TabsList>
          
          <TabsContent value="orders">
            <Card>
              <CardHeader>
                <CardTitle>Последние заказы</CardTitle>
                <CardDescription>Управление текущими и завершенными заказами</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {orders.map((order) => (
                    <Card key={order.id} className="border-2">
                      <CardContent className="pt-6">
                        <div className="flex items-center justify-between mb-4">
                          <div>
                            <div className="font-bold text-lg">Заказ #{order.id}</div>
                            <div className="text-sm text-muted-foreground">{order.date}</div>
                          </div>
                          <Badge className={
                            order.status === 'Выполнен' ? 'bg-green-500' :
                            order.status === 'В работе' ? 'bg-blue-500' :
                            'bg-yellow-500'
                          }>
                            {order.status}
                          </Badge>
                        </div>
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div>
                            <div className="text-muted-foreground">Клиент</div>
                            <div className="font-medium">{order.client}</div>
                          </div>
                          <div>
                            <div className="text-muted-foreground">Телефон</div>
                            <div className="font-medium">{order.phone}</div>
                          </div>
                          <div>
                            <div className="text-muted-foreground">Сумма</div>
                            <div className="font-bold text-primary">{order.amount} ₽</div>
                          </div>
                          <div className="flex items-end justify-end">
                            <Button size="sm" variant="outline">
                              <Icon name="Eye" size={16} className="mr-1" />
                              Детали
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="clients">
            <Card>
              <CardHeader>
                <CardTitle>База клиентов</CardTitle>
                <CardDescription>Информация о клиентах и их заказах</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {orders.map((order) => (
                    <Card key={order.id} className="border-2">
                      <CardContent className="pt-6">
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                            <Icon name="User" size={24} className="text-primary" />
                          </div>
                          <div className="flex-1">
                            <div className="font-bold">{order.client}</div>
                            <div className="text-sm text-muted-foreground">{order.phone}</div>
                          </div>
                          <div className="text-right">
                            <div className="text-sm text-muted-foreground">Заказов</div>
                            <div className="font-bold">1</div>
                          </div>
                          <Button size="sm" variant="outline">
                            <Icon name="MessageSquare" size={16} />
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Index;
