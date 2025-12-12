import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

const Index = () => {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    phone: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="min-h-screen bg-background text-foreground font-inter">
      <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-lg border-b border-border">
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="font-montserrat text-2xl font-bold glow-text">
            ИИ-Боты
          </div>
          <div className="hidden md:flex gap-8">
            <a href="#solution" className="hover:text-primary transition-colors">Решение</a>
            <a href="#features" className="hover:text-primary transition-colors">Возможности</a>
            <a href="#cases" className="hover:text-primary transition-colors">Кейсы</a>
            <a href="#contact" className="hover:text-primary transition-colors">Контакты</a>
          </div>
          <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
            Связаться
          </Button>
        </nav>
      </header>

      <section className="pt-32 pb-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 pointer-events-none" />
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <h1 className="font-montserrat text-5xl md:text-7xl font-black leading-tight">
                ИИ-боты для вашего 
                <span className="text-primary glow-text"> бизнеса</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Автоматизируем коммерческий отдел с помощью умных ИИ-ботов. 
                Повышаем конверсию, снимаем рутину с сотрудников.
              </p>
              <div className="flex flex-wrap gap-6 pt-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                    <Icon name="TrendingUp" className="text-primary" size={24} />
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-primary">+30%</div>
                    <div className="text-sm text-muted-foreground">конверсия</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                    <Icon name="Zap" className="text-accent" size={24} />
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-accent">15 сек</div>
                    <div className="text-sm text-muted-foreground">ответ</div>
                  </div>
                </div>
              </div>
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-6">
                Получить консультацию
              </Button>
            </div>
            <div className="relative animate-fade-in">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-accent/30 blur-3xl rounded-full" />
              <img 
                src="https://cdn.poehali.dev/projects/7e53e6e0-eae1-43cf-b426-127fc1c73d4b/files/75bacf00-2d7c-4a31-8e63-f5d3d8fe7955.jpg" 
                alt="AI Bot"
                className="relative z-10 rounded-2xl glow-card"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="solution" className="py-20 px-6 bg-card/50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="font-montserrat text-4xl md:text-5xl font-bold text-center mb-4">
            Внедрение за <span className="text-primary glow-text">4 этапа</span>
          </h2>
          <p className="text-center text-muted-foreground mb-16 text-lg">
            Прозрачный процесс от анализа до запуска
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: "Search", title: "Сбор информации", days: "3 дня", desc: "Анализ бизнес-процессов и требований к боту" },
              { icon: "Code", title: "Разработка", days: "10 дней", desc: "Создание и настройка ИИ-бота под ваши задачи" },
              { icon: "TestTube", title: "Тестирование", days: "7 дней", desc: "Проверка всех сценариев и доработка" },
              { icon: "Rocket", title: "Внедрение", days: "3 дня", desc: "Запуск и обучение вашей команды" }
            ].map((step, index) => (
              <Card key={index} className="p-6 gradient-border hover:scale-105 transition-transform duration-300">
                <div className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center mb-4">
                  <Icon name={step.icon as any} className="text-primary" size={28} />
                </div>
                <div className="text-sm text-accent font-semibold mb-2">{step.days}</div>
                <h3 className="font-montserrat text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-muted-foreground text-sm">{step.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="features" className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="font-montserrat text-4xl md:text-5xl font-bold text-center mb-4">
            Возможности <span className="text-accent glow-text">ИИ-бота</span>
          </h2>
          <p className="text-center text-muted-foreground mb-16 text-lg">
            Технологии, которые работают на ваш результат
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: "Languages", title: "Русский и Кыргызский", desc: "Поддержка двух языков для работы с любыми клиентами" },
              { icon: "Mic", title: "Аудио сообщения", desc: "Распознавание и ответы на голосовые сообщения" },
              { icon: "Image", title: "Анализ изображений", desc: "Понимание и обработка визуального контента" },
              { icon: "Database", title: "Интеграция с CRM", desc: "Подключение к Amo CRM, Битрикс24, Yclients, Altegio" },
              { icon: "FileText", title: "Работа по скрипту", desc: "Движение клиента по воронке по вашему сценарию" },
              { icon: "Shield", title: "Не заменяет людей", desc: "Снимает рутину, оставляя энергию на важные задачи" }
            ].map((feature, index) => (
              <Card key={index} className="p-6 gradient-border hover:glow-card transition-all duration-300">
                <div className="w-14 h-14 rounded-xl bg-accent/20 flex items-center justify-center mb-4">
                  <Icon name={feature.icon as any} className="text-accent" size={28} />
                </div>
                <h3 className="font-montserrat text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-card/50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="font-montserrat text-4xl md:text-5xl font-bold text-center mb-4">
            Почему <span className="text-primary glow-text">выбирают нас</span>
          </h2>
          <p className="text-center text-muted-foreground mb-16 text-lg">
            Опыт продаж + технологии = результат
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8 gradient-border">
              <Icon name="Award" className="text-primary mb-4" size={40} />
              <h3 className="font-montserrat text-2xl font-bold mb-4">Опыт в продажах</h3>
              <p className="text-muted-foreground leading-relaxed">
                Мы не студенты-программисты. За плечами реальный опыт работы в отделах продаж. 
                Понимаем, как прописать скрипты, чтобы бот не дал клиенту остыть, но и не ответил 
                на все вопросы сразу — конверсия происходит в живом общении.
              </p>
            </Card>
            <Card className="p-8 gradient-border">
              <Icon name="CheckCircle" className="text-accent mb-4" size={40} />
              <h3 className="font-montserrat text-2xl font-bold mb-4">Без типичных ошибок</h3>
              <p className="text-muted-foreground leading-relaxed">
                Наши боты не здороваются по несколько раз, не спрашивают имя дважды, 
                не пишут много лишнего текста. Когда нет понимания продаж, боты работают 
                как автоответчики и раздражают клиентов.
              </p>
            </Card>
          </div>
        </div>
      </section>

      <section id="cases" className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="font-montserrat text-4xl md:text-5xl font-bold text-center mb-4">
            Для кого подойдет <span className="text-accent glow-text">ИИ-бот</span>
          </h2>
          <p className="text-center text-muted-foreground mb-16 text-lg">
            Проверьте, подходит ли решение вашему бизнесу
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { icon: "Users", text: "Ежедневно получаете от 20 входящих обращений" },
              { icon: "MessageSquare", text: "Клиенты задают одни и те же вопросы, приводя к выгоранию сотрудников" },
              { icon: "Clock", text: "Менеджеры разрываются между новыми и постоянными клиентами" },
              { icon: "BookOpen", text: "В продуктах много деталей, много времени уходит на ответы" },
              { icon: "Database", text: "В компании есть CRM система или система бронирования" }
            ].map((item, index) => (
              <Card key={index} className="p-6 gradient-border flex items-start gap-4 hover:scale-105 transition-transform duration-300">
                <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <Icon name={item.icon as any} className="text-primary" size={24} />
                </div>
                <p className="text-lg pt-2">{item.text}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-6 bg-card/50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="font-montserrat text-4xl md:text-5xl font-bold text-center mb-4">
            Готовы <span className="text-primary glow-text">начать?</span>
          </h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Оставьте заявку, и мы свяжемся с вами в течение дня
          </p>
          <Card className="p-8 gradient-border animate-glow-pulse">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Ваше имя</label>
                  <Input 
                    placeholder="Петр" 
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="bg-background border-border"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Компания</label>
                  <Input 
                    placeholder="ООО «Компания»" 
                    value={formData.company}
                    onChange={(e) => setFormData({...formData, company: e.target.value})}
                    className="bg-background border-border"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Телефон</label>
                <Input 
                  placeholder="+7 (999) 123-45-67" 
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="bg-background border-border"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Сообщение</label>
                <Textarea 
                  placeholder="Расскажите о вашем бизнесе и задачах" 
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="bg-background border-border min-h-32"
                />
              </div>
              <Button type="submit" size="lg" className="w-full bg-primary text-primary-foreground hover:bg-primary/90 text-lg">
                Отправить заявку
              </Button>
            </form>
          </Card>
        </div>
      </section>

      <footer className="py-12 px-6 border-t border-border">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="font-montserrat text-2xl font-bold glow-text">
              ИИ-Боты
            </div>
            <div className="text-muted-foreground text-center md:text-left">
              <p className="mb-2">Петр Тен</p>
              <p>Внедрение ИИ-технологий для бизнеса</p>
            </div>
            <div className="flex gap-4">
              <Button variant="outline" size="icon" className="border-border hover:border-primary">
                <Icon name="Mail" size={20} />
              </Button>
              <Button variant="outline" size="icon" className="border-border hover:border-primary">
                <Icon name="Phone" size={20} />
              </Button>
            </div>
          </div>
          <div className="mt-8 text-center text-muted-foreground text-sm">
            © 2024 ИИ-Боты. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
