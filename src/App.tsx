import { useEffect, useState } from "react";
import { ArrowDownRight, ArrowRight, Check, Menu, MessageCircle, X } from "lucide-react";

const telegramUrl = "https://t.me/Alexey_Tarabanov";
const emailAddress = "tarabanov.alexey@gmail.com";
const emailUrl = `mailto:${emailAddress}`;
const audiences = ["Психологи", "Репетиторы", "Консультанты", "Фотографы", "Тренеры", "Мастера", "Эксперты", "Малый бизнес"];
const servicePlans = [
  {
    title: "Сайт-визитка",
    label: "У вас уже есть тексты и фотографии",
    price: "от 10 000 ₽",
    description:
        "Подойдёт, если у вас уже есть основные материалы и понимание того, что должно быть на сайте.",
    items: [
      "Одна страница",
      "До 5–6 основных смысловых блоков",
      "Адаптация под телефон, планшет и компьютер",
      "Размещение ваших текстов и фотографий",
      "Кнопки связи и контакты",
      "Подключение домена",
      "HTTPS",
      "Размещение сайта в интернете",
      "До двух раундов небольших правок",
    ],
  },
  {
    title: "Индивидуальный сайт под ключ",
    label: "Помогаю со структурой и подачей",
    price: "от 15 000 ₽",
    description:
        "Подойдёт, если нужно помочь со структурой, подачей материалов и оформить сайт под вашу деятельность и аудиторию.",
    items: [
      "Помощь с определением структуры сайта",
      "Проработка порядка и содержания блоков",
      "Помощь с формулировками и подачей материалов",
      "Индивидуальное визуальное оформление",
      "Адаптация под телефон, планшет и компьютер",
      "Размещение текстов и фотографий",
      "Кнопки связи и контакты",
      "Подключение домена",
      "HTTPS",
      "Размещение сайта в интернете",
      "До трёх раундов правок",
    ],
  },
];
const steps = [
  ["Обсуждаем", "Вы рассказываете о своей деятельности, клиентах и о том, какую задачу должен решать сайт."],
  ["Делаю концепцию", "Продумываю структуру, внешний вид, содержание и основной сценарий посетителя."],
  ["Собираю сайт", "Разрабатываю полноценную desktop- и mobile-версии и показываю результат."],
  ["Запускаю", "Подключаю домен, HTTPS и размещаю сайт в интернете."],
];
const benefits = [
  ["Всё под ключ", "От структуры страницы до размещения сайта в интернете."],
  ["Адаптация под телефон", "Сайт удобно выглядит и работает на смартфонах, планшетах и компьютерах."],
  ["Сайт принадлежит вам", "Домен оформляется на заказчика, а после завершения работы я передаю исходный код сайта. Проект не привязан к конкретному конструктору и при необходимости может быть передан другому разработчику."],
  ["Без обязательной ежемесячной подписки", "Для таких сайтов не требуется обязательная ежемесячная плата за конструктор или размещение."],
];
const faq = [
  ["У меня нет технического задания. Можно обратиться?", "Да. Достаточно рассказать о себе, своей деятельности и о том, для чего нужен сайт. Структуру и формат можно определить вместе."],
  ["Что потребуется от меня для запуска сайта?", "Минимум технических действий. Я помогу подготовить и разместить сайт, подключить домен и настроить HTTPS. От вас потребуется согласовать содержание сайта и оплатить домен."],
  ["Можно будет потом изменить текст или фотографии?", "Да. После запуска можно менять тексты, фотографии, блоки и другие элементы сайта. Объём дальнейших изменений обсуждается отдельно."],
  ["Сайт будет нормально работать на телефоне?", "Да. Все сайты делаются адаптивными."],
];

function Logo() {
  return <a className="logo" href="#top"><span>Алексей Тарабанов</span><small>Создание сайтов</small></a>;
}

function ProjectMockup({ kind }: { kind: "psychology" | "english" }) {
  const psychology = kind === "psychology";
  return (
    <div className={`project-visual ${kind}`} aria-label={psychology ? "Макет сайта психолога" : "Макет сайта преподавателя английского"}>
      <div className="browser">
        <div className="browser-bar"><i/><i/><i/><span>{psychology ? "jeanna-psy.ru" : "pureli.ru"}</span></div>
        <div className="browser-content">
          <div className="preview-copy">
            <small>{psychology ? "Психолог · консультации" : "English for life"}</small>
            <strong>{psychology ? <>Место, где<br/>можно быть собой</> : <>Английский,<br/><em>который работает</em></>}</strong>
            <span>{psychology ? "Записаться на встречу" : "Начать заниматься"}</span>
          </div>
          <div className="preview-art"><div/><i/></div>
        </div>
      </div>
      <div className="phone">
        <b/>
        <div className="phone-screen">
          <small>{psychology ? "Жанна" : "Lina.English"}</small>
          <strong>{psychology ? "Бережно к себе" : "Speak with confidence"}</strong>
          <i/><span>Подробнее</span>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const nodes = document.querySelectorAll<HTMLElement>("[data-reveal]");
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    }), { threshold: 0.12 });
    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.classList.toggle("menu-open", menuOpen);
    return () => document.body.classList.remove("menu-open");
  }, [menuOpen]);

  return (
    <main id="top">
      <header className="site-header">
        <div className="shell header-inner">
          <Logo/>
          <nav className="desktop-nav">
            <a href="#works">Работы</a><a href="#price">Стоимость</a>
            <a href="#process">Как работаем</a><a href="#contact">Контакты</a>
            <a className="button small" href={telegramUrl} target="_blank" rel="noopener noreferrer">Обсудить сайт</a>
          </nav>
          <button className="menu-button" type="button" aria-label="Открыть меню" aria-expanded={menuOpen} onClick={() => setMenuOpen(true)}><Menu size={22}/></button>
          {menuOpen && <div className="mobile-menu-layer" role="presentation" onClick={() => setMenuOpen(false)}>
            <aside className="mobile-sheet" role="dialog" aria-modal="true" aria-label="Навигация" onClick={(event) => event.stopPropagation()}>
              <div className="mobile-sheet-header"><div><strong>Алексей Тарабанов</strong><span>Создание сайтов под ключ</span></div><button type="button" aria-label="Закрыть меню" onClick={() => setMenuOpen(false)}><X size={22}/></button></div>
              <nav className="mobile-nav">
                {[["Работы","#works"],["Стоимость","#price"],["Как работаем","#process"],["Контакты","#contact"]].map(([label,href]) => (
                  <a href={href} key={href} onClick={() => setMenuOpen(false)}>{label}</a>
                ))}
                <a className="button" href={telegramUrl} target="_blank" rel="noopener noreferrer" onClick={() => setMenuOpen(false)}>Обсудить сайт</a>
              </nav>
            </aside>
          </div>}
        </div>
      </header>

      <section className="hero shell">
        <div className="hero-copy" data-reveal>
          <p className="eyebrow">Сайты для специалистов и малого бизнеса</p>
          <h1>Сайты, которые помогают рассказать о вашем деле.</h1>
          <p className="hero-lead">Создаю современные сайты-визитки и небольшие лендинги для специалистов и малого бизнеса — от идеи до готовой ссылки.</p>
          <p className="muted">Вам не нужно разбираться в дизайне, доменах и технических настройках. Я беру эту часть на себя.</p>
          <div className="hero-actions">
            <a className="button" href={telegramUrl} target="_blank" rel="noopener noreferrer">Обсудить сайт <ArrowRight size={18}/></a>
            <a className="text-link" href="#works">Посмотреть работы <ArrowDownRight size={18}/></a>
          </div>
          <div className="price-note"><span>Сайт-визитка под ключ</span><strong>от 10 000 ₽</strong></div>
        </div>
        <div className="hero-stage" data-reveal>
          <div className="hero-browser">
            <div className="browser-bar"><i/><i/><i/><span>ваш-сайт.ru</span></div>
            <div className="studio-preview"><small>ВАШЕ ДЕЛО</small><strong>Понятно о главном.<br/>Красиво о вас.</strong><span>Записаться →</span><i/></div>
          </div>
          <div className="hero-phone"><b/><div><small>ВАШЕ ДЕЛО</small><strong>Сайт, который работает</strong><i/><span>Узнать больше</span></div></div>
          <div className="floating-label">Дизайн · запуск · поддержка</div>
        </div>
      </section>

      <section className="audience section-pad">
        <div className="shell" data-reveal>
          <div className="section-heading centered">
            <p className="eyebrow">Для кого</p><h2>Если вам нужен свой сайт</h2>
            <p>Помогаю специалистам и небольшим проектам получить современное представительство в интернете без конструкторов и технической головной боли.</p>
          </div>
          <div className="audience-list">{audiences.map((item) => <span key={item}>{item}</span>)}</div>
        </div>
      </section>

      <section className="works section-pad shell" id="works">
        <div className="section-heading" data-reveal><p className="eyebrow">Портфолио</p><h2>Последние работы</h2><p>Несколько сайтов, которые уже можно открыть и посмотреть вживую.</p></div>
        <article className="project-card warm" data-reveal>
          <ProjectMockup kind="psychology"/>
          <div className="project-copy"><span>01</span>
            <h3>Жанна — психолог</h3>
            <p>Персональный сайт психолога: услуги, информация о специалисте, подход к работе и удобный переход к записи на консультацию.</p>
            <small>Дизайн · Адаптивная версия · Разработка · Размещение · HTTPS</small>
            <a className="project-link"
                href="https://jeanna-psy.ru/"
                target="_blank"
                rel="noopener noreferrer">
              Посмотреть сайт <ArrowRight size={18}/>
            </a>
          </div>
        </article>
        <article className="project-card blue" data-reveal>
          <ProjectMockup kind="english"/>
          <div className="project-copy"><span>02</span>
            <h3>Лина — преподаватель английского</h3>
            <p>Сайт для преподавателя английского языка. Основная задача — понятно представить услуги для родителей и школьников и привести посетителя к записи на занятие.</p>
            <small>Дизайн · Адаптивная версия · Разработка · Размещение · HTTPS</small>
            <a className="project-link"
               href="https://pureli.ru/"
               target="_blank"
               rel="noreferrer">Посмотреть сайт <ArrowRight size={18}/>
            </a>
          </div>
        </article>
      </section>

      <section className="specialization shell" data-reveal>
        <p className="eyebrow">Специализация</p>
        <div><h2>Небольшие сайты без лишней сложности</h2><p>Моя специализация — сайты-визитки и небольшие лендинги для частных специалистов и малого бизнеса. Такой формат позволяет сосредоточиться на дизайне, содержании и быстром запуске сайта без лишней технической сложности.</p></div>
      </section>

      <section className="pricing section-pad" id="price">
        <div className="shell" data-reveal>
          <div className="pricing-heading"><p className="eyebrow light">Стоимость</p><h2>Два понятных формата</h2></div>
          <div className="plans">
            {servicePlans.map((plan) => <article className="plan" key={plan.title}>
              <span className="plan-label">{plan.label}</span><h3>{plan.title}</h3><div className="plan-price">{plan.price}</div><p>{plan.description}</p>
              <div className="plan-list">{plan.items.map((item) => <span key={item}><Check size={17}/>{item}</span>)}</div>
            </article>)}
          </div>
          <div className="pricing-footer">
            <p>
              Итоговая стоимость зависит от количества блоков, материалов и объёма работы над структурой и дизайном.
              Перед началом работы фиксируем стоимость.
            </p>
            <small>
              Раунд правок — один согласованный список изменений после просмотра версии сайта.
            </small>
            <small>
              Домен оплачивается отдельно и принадлежит заказчику.
            </small>

            <a className="button light-button" href={telegramUrl} target="_blank" rel="noopener noreferrer">Обсудить сайт <ArrowRight size={18}/></a></div>
        </div>
      </section>

      <section className="process section-pad shell" id="process">
        <div className="section-heading" data-reveal><p className="eyebrow">Как проходит работа</p><h2>От идеи до рабочего сайта</h2></div>
        <div className="steps" data-reveal>{steps.map(([title,text], index) => <article key={title}><span>0{index+1}</span><h3>{title}</h3><p>{text}</p></article>)}</div>
        <div className="result-banner" data-reveal><MessageCircle size={28}/><p>В результате вы получаете не архив с файлами, а полностью работающий сайт, который можно сразу отправлять клиентам.</p></div>
      </section>

      <section className="benefits section-pad">
        <div className="shell">
          <div className="section-heading wide" data-reveal><p className="eyebrow">Простой процесс</p><h2>Вам не придётся становиться техническим специалистом</h2></div>
          <div className="benefit-grid" data-reveal>{benefits.map(([title,text], index) => <article key={title}><span>0{index+1}</span><h3>{title}</h3><p>{text}</p></article>)}</div>
        </div>
      </section>

      <section className="about section-pad shell" data-reveal>
        <div><p className="eyebrow">Немного обо мне</p><h2>Кто делает ваш сайт</h2></div>
        <div className="about-copy"><p>Меня зовут Алексей. Я разработчик и занимаюсь созданием и техническим запуском сайтов. Моя задача — сделать процесс максимально простым для заказчика: обсудить идею, собрать сайт, разместить его и передать уже готовый результат.</p><strong>Работаю напрямую, без менеджеров и посредников.</strong></div>
      </section>

      <section className="faq section-pad">
        <div className="shell faq-grid">
          <div className="section-heading" data-reveal><p className="eyebrow">FAQ</p><h2>Частые вопросы</h2><p>Если вашего вопроса нет в списке — просто напишите мне.</p></div>
          <div className="faq-list" data-reveal>{faq.map(([question,answer]) => <details key={question}><summary>{question}<span>+</span></summary><p>{answer}</p></details>)}</div>
        </div>
      </section>

      <section className="final-cta shell" id="contact" data-reveal>
        <div><p className="eyebrow light">Можно без готового ТЗ</p><h2>Есть идея сайта?</h2><p>Напишите пару слов о себе и своей деятельности. Я предложу, каким может быть сайт и с чего лучше начать.</p><small>Можно написать даже без готового технического задания.</small></div>
        <div className="cta-actions"><a className="button light-button" href={telegramUrl} target="_blank" rel="noopener noreferrer">Написать в Telegram <ArrowRight size={18}/></a><a href="#works">Посмотреть работы</a></div>
      </section>

      <footer><div className="shell footer-inner"><div><strong>Алексей Тарабанов</strong><p>Создание сайтов для специалистов и малого бизнеса</p></div><div><a href={telegramUrl} target="_blank" rel="noopener noreferrer">Telegram</a><a href={emailUrl} target="_blank" rel="noopener noreferrer">Email</a></div><span>© {new Date().getFullYear()}</span></div></footer>
    </main>
  );
}
