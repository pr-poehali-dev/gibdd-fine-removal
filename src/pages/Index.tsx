import { useState, useEffect } from 'react';
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
  
  const [fines, setFines] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<'active' | 'removed'>('active');
  const [removingFineId, setRemovingFineId] = useState<number | null>(null);
  
  const [searchType, setSearchType] = useState('uin');
  const [searchValue, setSearchValue] = useState('');
  const [searchResults, setSearchResults] = useState<any>(null);
  const [searching, setSearching] = useState(false);
  
  const [searchHistory, setSearchHistory] = useState<any[]>([]);
  const [showHistory, setShowHistory] = useState(false);
  
  const BACKEND_URL = 'https://functions.poehali.dev/6b4ad600-7fa0-4100-80f7-4cf11aec76a5';
  const SEARCH_URL = 'https://functions.poehali.dev/c27fa26d-7fb4-401f-b2f4-826e655715f1';
  const HISTORY_URL = 'https://functions.poehali.dev/97d56095-0136-4ebf-9bb9-8b7250d8ae2c';
  
  const loadFines = async (status: 'active' | 'removed') => {
    setLoading(true);
    try {
      const response = await fetch(`${BACKEND_URL}?status=${status}`);
      const data = await response.json();
      setFines(data.fines || []);
    } catch (error) {
      console.error('Ошибка загрузки штрафов:', error);
    } finally {
      setLoading(false);
    }
  };
  
  const removeFine = async (fineId: number) => {
    if (!confirm('Вы уверены, что хотите удалить этот штраф из базы?')) return;
    
    setRemovingFineId(fineId);
    try {
      const response = await fetch(BACKEND_URL, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fine_id: fineId,
          admin_id: 'admin',
          reason: 'Удалено через админ-панель'
        })
      });
      
      if (response.ok) {
        await loadFines(activeTab);
      }
    } catch (error) {
      console.error('Ошибка удаления штрафа:', error);
      alert('Произошла ошибка при удалении штрафа');
    } finally {
      setRemovingFineId(null);
    }
  };
  
  const searchFines = async () => {
    if (!searchValue.trim()) return;
    
    setSearching(true);
    try {
      const response = await fetch(`${SEARCH_URL}?search_type=${searchType}&search_value=${encodeURIComponent(searchValue)}`);
      const data = await response.json();
      setSearchResults(data);
    } catch (error) {
      console.error('Ошибка поиска:', error);
      alert('Произошла ошибка при поиске');
    } finally {
      setSearching(false);
    }
  };
  
  const clearSearch = () => {
    setSearchValue('');
    setSearchResults(null);
  };
  
  const loadSearchHistory = async () => {
    try {
      const response = await fetch(`${HISTORY_URL}?limit=50`);
      const data = await response.json();
      setSearchHistory(data.logs || []);
    } catch (error) {
      console.error('Ошибка загрузки истории:', error);
    }
  };
  
  const exportToExcel = () => {
    if (!searchResults || !searchResults.fines || searchResults.fines.length === 0) {
      alert('Нет данных для экспорта');
      return;
    }
    
    const headers = ['УИН', 'Водитель', 'Телефон', 'Госномер', 'Дата нарушения', 'Тип нарушения', 'Сумма', 'Статус'];
    const rows = searchResults.fines.map((fine: any) => [
      fine.fine_number,
      fine.driver_name,
      fine.driver_phone || '',
      fine.license_plate,
      new Date(fine.violation_date).toLocaleDateString('ru-RU'),
      fine.violation_type,
      fine.fine_amount,
      fine.status === 'active' ? 'В базе' : 'Удалён'
    ]);
    
    let csvContent = '\uFEFF';
    csvContent += headers.join(';') + '\n';
    rows.forEach((row: any[]) => {
      csvContent += row.join(';') + '\n';
    });
    
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    link.setAttribute('href', url);
    link.setAttribute('download', `штрафы_${new Date().toISOString().split('T')[0]}.csv`);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  
  useEffect(() => {
    loadFines(activeTab);
  }, [activeTab]);
  
  useEffect(() => {
    if (showHistory) {
      loadSearchHistory();
    }
  }, [showHistory]);

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
          <TabsList className="grid w-full max-w-2xl grid-cols-4">
            <TabsTrigger value="orders">Заказы</TabsTrigger>
            <TabsTrigger value="search">Пробив данных</TabsTrigger>
            <TabsTrigger value="fines">База штрафов</TabsTrigger>
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
          
          <TabsContent value="search">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Пробив данных по штрафам</CardTitle>
                    <CardDescription>Поиск штрафов по УИН, госномеру, телефону или ФИО водителя</CardDescription>
                  </div>
                  <div className="flex gap-2">
                    {searchResults && (
                      <Button onClick={exportToExcel} variant="outline">
                        <Icon name="Download" size={20} className="mr-2" />
                        Экспорт в Excel
                      </Button>
                    )}
                    <Button onClick={() => setShowHistory(!showHistory)} variant="outline">
                      <Icon name="History" size={20} className="mr-2" />
                      История
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                {showHistory ? (
                  <div className="space-y-4">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="font-bold text-lg">История пробивов</h3>
                      <Button onClick={() => setShowHistory(false)} variant="outline" size="sm">
                        <Icon name="X" size={16} className="mr-1" />
                        Закрыть
                      </Button>
                    </div>
                    {searchHistory.length === 0 ? (
                      <div className="text-center py-12">
                        <Icon name="FileText" size={48} className="text-muted-foreground mx-auto mb-4" />
                        <p className="text-muted-foreground">История пуста</p>
                      </div>
                    ) : (
                      <div className="space-y-2">
                        {searchHistory.map((log) => (
                          <Card key={log.id} className="border hover:shadow-md transition-shadow">
                            <CardContent className="pt-4">
                              <div className="flex items-center justify-between">
                                <div className="flex-1">
                                  <div className="flex items-center gap-2 mb-1">
                                    <Badge variant="outline">
                                      {log.search_type === 'uin' ? 'УИН' :
                                       log.search_type === 'license_plate' ? 'Госномер' :
                                       log.search_type === 'phone' ? 'Телефон' : 'ФИО'}
                                    </Badge>
                                    <span className="font-medium">{log.search_value}</span>
                                  </div>
                                  <div className="text-sm text-muted-foreground">
                                    {new Date(log.searched_at).toLocaleString('ru-RU')} • Найдено: {log.results_count} • Админ: {log.admin_id}
                                  </div>
                                </div>
                                <Button 
                                  size="sm" 
                                  variant="ghost"
                                  onClick={() => {
                                    setSearchType(log.search_type);
                                    setSearchValue(log.search_value);
                                    setShowHistory(false);
                                  }}
                                >
                                  <Icon name="RotateCcw" size={16} />
                                </Button>
                              </div>
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="md:col-span-1">
                      <label className="text-sm font-medium mb-2 block">Тип поиска</label>
                      <select 
                        value={searchType} 
                        onChange={(e) => setSearchType(e.target.value)}
                        className="w-full h-10 px-3 border rounded-md bg-white"
                      >
                        <option value="uin">По УИН (номер постановления)</option>
                        <option value="license_plate">По госномеру</option>
                        <option value="phone">По телефону</option>
                        <option value="driver_name">По ФИО водителя</option>
                      </select>
                    </div>
                    <div className="md:col-span-2">
                      <label className="text-sm font-medium mb-2 block">Значение для поиска</label>
                      <div className="flex gap-2">
                        <Input 
                          placeholder={
                            searchType === 'uin' ? 'Например: 18810177220415789012' :
                            searchType === 'license_plate' ? 'Например: А1234ВР177' :
                            searchType === 'phone' ? 'Например: +79991234567' :
                            'Например: Иванов'
                          }
                          value={searchValue}
                          onChange={(e) => setSearchValue(e.target.value)}
                          onKeyDown={(e) => e.key === 'Enter' && searchFines()}
                          className="flex-1"
                        />
                        <Button onClick={searchFines} disabled={searching || !searchValue.trim()}>
                          {searching ? (
                            <Icon name="Loader2" size={20} className="animate-spin" />
                          ) : (
                            <Icon name="Search" size={20} />
                          )}
                        </Button>
                        {searchResults && (
                          <Button onClick={clearSearch} variant="outline">
                            <Icon name="X" size={20} />
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                  
                  {searchResults && (
                    <div className="space-y-6">
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <Card className="border-l-4 border-l-blue-500">
                          <CardHeader className="pb-2">
                            <CardDescription>Найдено штрафов</CardDescription>
                            <CardTitle className="text-2xl">{searchResults.total_fines}</CardTitle>
                          </CardHeader>
                        </Card>
                        <Card className="border-l-4 border-l-red-500">
                          <CardHeader className="pb-2">
                            <CardDescription>Активных</CardDescription>
                            <CardTitle className="text-2xl">{searchResults.active_fines}</CardTitle>
                          </CardHeader>
                        </Card>
                        <Card className="border-l-4 border-l-gray-500">
                          <CardHeader className="pb-2">
                            <CardDescription>Удалённых</CardDescription>
                            <CardTitle className="text-2xl">{searchResults.removed_fines}</CardTitle>
                          </CardHeader>
                        </Card>
                        <Card className="border-l-4 border-l-primary">
                          <CardHeader className="pb-2">
                            <CardDescription>Сумма активных</CardDescription>
                            <CardTitle className="text-2xl">{searchResults.total_amount.toLocaleString('ru-RU')} ₽</CardTitle>
                          </CardHeader>
                        </Card>
                      </div>
                      
                      {searchResults.fines.length === 0 ? (
                        <div className="text-center py-12">
                          <Icon name="SearchX" size={48} className="text-muted-foreground mx-auto mb-4" />
                          <p className="text-muted-foreground">Штрафов не найдено</p>
                        </div>
                      ) : (
                        <div className="space-y-4">
                          <h3 className="font-bold text-lg">Результаты поиска:</h3>
                          {searchResults.fines.map((fine: any) => (
                            <Card key={fine.id} className="border-2 hover:shadow-lg transition-shadow">
                              <CardContent className="pt-6">
                                <div className="flex items-start justify-between mb-4">
                                  <div className="flex-1">
                                    <div className="flex items-center gap-3 mb-2">
                                      <div className="font-bold text-lg text-primary">УИН: {fine.fine_number}</div>
                                      <Badge className={fine.status === 'active' ? 'bg-red-500' : 'bg-gray-500'}>
                                        {fine.status === 'active' ? 'В базе' : 'Удалён'}
                                      </Badge>
                                    </div>
                                    <div className="text-sm text-muted-foreground">
                                      Добавлено: {new Date(fine.created_at).toLocaleDateString('ru-RU')}
                                    </div>
                                  </div>
                                  {fine.status === 'active' && (
                                    <Button 
                                      size="sm" 
                                      variant="destructive"
                                      onClick={() => removeFine(fine.id)}
                                      disabled={removingFineId === fine.id}
                                    >
                                      {removingFineId === fine.id ? (
                                        <Icon name="Loader2" size={16} className="mr-1 animate-spin" />
                                      ) : (
                                        <Icon name="Trash2" size={16} className="mr-1" />
                                      )}
                                      Удалить
                                    </Button>
                                  )}
                                </div>
                                
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                                  <div>
                                    <div className="text-muted-foreground mb-1">Водитель</div>
                                    <div className="font-medium">{fine.driver_name}</div>
                                  </div>
                                  <div>
                                    <div className="text-muted-foreground mb-1">Телефон</div>
                                    <div className="font-medium">{fine.driver_phone || '—'}</div>
                                  </div>
                                  <div>
                                    <div className="text-muted-foreground mb-1">Гос. номер</div>
                                    <div className="font-medium font-mono">{fine.license_plate}</div>
                                  </div>
                                  <div>
                                    <div className="text-muted-foreground mb-1">Дата нарушения</div>
                                    <div className="font-medium">{new Date(fine.violation_date).toLocaleDateString('ru-RU')}</div>
                                  </div>
                                </div>
                                
                                <div className="mt-4 pt-4 border-t grid grid-cols-2 gap-4">
                                  <div>
                                    <div className="text-muted-foreground text-sm mb-1">Тип нарушения</div>
                                    <div className="font-medium">{fine.violation_type}</div>
                                  </div>
                                  <div className="text-right">
                                    <div className="text-muted-foreground text-sm mb-1">Сумма штрафа</div>
                                    <div className="text-2xl font-bold text-primary">{fine.fine_amount.toLocaleString('ru-RU')} ₽</div>
                                  </div>
                                </div>
                                
                                {fine.removed_at && (
                                  <div className="mt-4 pt-4 border-t bg-muted/50 -mx-6 -mb-6 px-6 py-3 rounded-b-lg">
                                    <div className="flex items-center gap-2 text-sm">
                                      <Icon name="CheckCircle" size={16} className="text-green-600" />
                                      <span className="text-muted-foreground">
                                        Удалено {new Date(fine.removed_at).toLocaleDateString('ru-RU')} пользователем {fine.removed_by}
                                      </span>
                                    </div>
                                  </div>
                                )}
                              </CardContent>
                            </Card>
                          ))}
                        </div>
                      )}
                    </div>
                  )}
                  
                  {!searchResults && (
                    <div className="text-center py-12">
                      <Icon name="Search" size={48} className="text-muted-foreground mx-auto mb-4" />
                      <p className="text-muted-foreground">Введите данные для поиска штрафов</p>
                    </div>
                  )}
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="fines">
            <Card>
              <CardHeader>
                <CardTitle>База штрафов ГИБДД</CardTitle>
                <CardDescription>Управление записями о штрафах в базе данных</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex gap-2 mb-6">
                  <Button 
                    variant={activeTab === 'active' ? 'default' : 'outline'}
                    onClick={() => setActiveTab('active')}
                    className="flex-1"
                  >
                    <Icon name="AlertCircle" size={16} className="mr-2" />
                    Активные штрафы
                  </Button>
                  <Button 
                    variant={activeTab === 'removed' ? 'default' : 'outline'}
                    onClick={() => setActiveTab('removed')}
                    className="flex-1"
                  >
                    <Icon name="Trash2" size={16} className="mr-2" />
                    Удалённые
                  </Button>
                </div>
                
                {loading ? (
                  <div className="text-center py-12">
                    <Icon name="Loader2" size={48} className="text-primary mx-auto animate-spin mb-4" />
                    <p className="text-muted-foreground">Загрузка данных...</p>
                  </div>
                ) : fines.length === 0 ? (
                  <div className="text-center py-12">
                    <Icon name="FileX" size={48} className="text-muted-foreground mx-auto mb-4" />
                    <p className="text-muted-foreground">Штрафов не найдено</p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {fines.map((fine) => (
                      <Card key={fine.id} className="border-2 hover:shadow-lg transition-shadow">
                        <CardContent className="pt-6">
                          <div className="flex items-start justify-between mb-4">
                            <div className="flex-1">
                              <div className="flex items-center gap-3 mb-2">
                                <div className="font-bold text-lg text-primary">УИН: {fine.fine_number}</div>
                                <Badge className={fine.status === 'active' ? 'bg-red-500' : 'bg-gray-500'}>
                                  {fine.status === 'active' ? 'В базе' : 'Удалён'}
                                </Badge>
                              </div>
                              <div className="text-sm text-muted-foreground">
                                Добавлено: {new Date(fine.created_at).toLocaleDateString('ru-RU')}
                              </div>
                            </div>
                            {activeTab === 'active' && (
                              <Button 
                                size="sm" 
                                variant="destructive"
                                onClick={() => removeFine(fine.id)}
                                disabled={removingFineId === fine.id}
                              >
                                {removingFineId === fine.id ? (
                                  <Icon name="Loader2" size={16} className="mr-1 animate-spin" />
                                ) : (
                                  <Icon name="Trash2" size={16} className="mr-1" />
                                )}
                                Удалить
                              </Button>
                            )}
                          </div>
                          
                          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                            <div>
                              <div className="text-muted-foreground mb-1">Водитель</div>
                              <div className="font-medium">{fine.driver_name}</div>
                            </div>
                            <div>
                              <div className="text-muted-foreground mb-1">Телефон</div>
                              <div className="font-medium">{fine.driver_phone || '—'}</div>
                            </div>
                            <div>
                              <div className="text-muted-foreground mb-1">Гос. номер</div>
                              <div className="font-medium font-mono">{fine.license_plate}</div>
                            </div>
                            <div>
                              <div className="text-muted-foreground mb-1">Дата нарушения</div>
                              <div className="font-medium">{new Date(fine.violation_date).toLocaleDateString('ru-RU')}</div>
                            </div>
                          </div>
                          
                          <div className="mt-4 pt-4 border-t grid grid-cols-2 gap-4">
                            <div>
                              <div className="text-muted-foreground text-sm mb-1">Тип нарушения</div>
                              <div className="font-medium">{fine.violation_type}</div>
                            </div>
                            <div className="text-right">
                              <div className="text-muted-foreground text-sm mb-1">Сумма штрафа</div>
                              <div className="text-2xl font-bold text-primary">{fine.fine_amount.toLocaleString('ru-RU')} ₽</div>
                            </div>
                          </div>
                          
                          {fine.removed_at && (
                            <div className="mt-4 pt-4 border-t bg-muted/50 -mx-6 -mb-6 px-6 py-3 rounded-b-lg">
                              <div className="flex items-center gap-2 text-sm">
                                <Icon name="CheckCircle" size={16} className="text-green-600" />
                                <span className="text-muted-foreground">
                                  Удалено {new Date(fine.removed_at).toLocaleDateString('ru-RU')} пользователем {fine.removed_by}
                                </span>
                              </div>
                            </div>
                          )}
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                )}
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