// ============================================================
//  ВЕСЬ КОНТЕНТ ПОРТФОЛИО — правь здесь, код трогать не нужно
// ============================================================

export const hero = {
  name: 'Ильгизар Хамидулин',
  firstName: 'Ильгизар',
  lastName: 'Хамидулин',
  initials: 'ИХ',
  role: 'Senior Frontend Engineer',
  tagline: 'Две экосистемы в продакшене — Angular и React. Микрофронтенды, архитектура, performance.',
  location: 'Казань · удалённо по РФ',
  status: 'открыт к офферам',
  salary: 'от 350 000 ₽',
  currentCompany: 'Т-Банк',
}

export const nav = [
  { id: 'about', label: 'Профиль' },
  { id: 'experience', label: 'Опыт' },
  { id: 'stack', label: 'Стек' },
  { id: 'cases', label: 'Кейсы' },
  { id: 'contacts', label: 'Контакты' },
]

export const terminal = {
  title: 'career.config.ts',
  lines: [
    { p: '$', t: 'npm run build:career' },
    { p: '✓', t: 'shell: Angular + React в production' },
    { p: '✓', t: 'remotes: Module Federation' },
    { p: '✓', t: 'ts strict — 0 errors' },
    { p: '✓', t: 'legacy ~100k LOC → FSD' },
    { p: '→', t: 'ready · 812ms' },
  ],
}

export const about = 'Проектирую масштабируемые фронтенды для enterprise и B2B: высоконагруженные продукты (3000+ магазинов, 5000+ POS-касс), realtime-архитектура, SLA и регулярные релизы. Специализация — микрофронтенды, FSD, управляемый data-flow и производительность.'

export const metrics = [
  { value: '5+', label: 'лет коммерческого опыта в enterprise' },
  { value: '100k+', label: 'LOC отрефакторено и переведено на FSD' },
  { value: '9', label: 'разработчиков в команде под моим лидством' },
  { value: '5000+', label: 'POS-касс работают с моим кодом' },
]

export const mfDiagram = {
  title: 'Архитектура, которую строю',
  shell: 'Shell',
  remotes: ['Back-Office', 'POS', 'Portal'],
  note: 'Module Federation · независимые деплои · shared-контракты',
}

export const bentoExtra = [
  { k: 'Английский', v: 'B2 — Professional Working' },
  { k: 'Локация', v: 'Казань · удалённо по РФ' },
  { k: 'Опыт в найме', v: 'собеседования и онбординг разработчиков' },
]

export const experience = [
  {
    company: 'Т-Банк',
    role: 'Senior Frontend-разработчик',
    period: '05.2026 — сейчас',
    place: 'Москва · удалённо',
    points: [
      'Разработка продуктов банка на React + TypeScript',
      'Развитие микрофронтенд-архитектуры (Module Federation)',
      'Высоконагруженный финтех с SLA и регулярными релизами',
    ],
    tags: ['React', 'TypeScript', 'Module Federation', 'финтех'],
    current: true,
  },
  {
    company: 'ICL Services',
    role: 'Frontend-разработчик → Tech Lead',
    period: '07.2021 — 05.2026',
    place: 'Казань · 5 лет',
    points: [
      'Enterprise-продукты: ритейл, нефтегаз, фарма — Back-Office, POS, корпоративные порталы',
      'Полностью отрефакторил legacy-приложение (~100k+ LOC), перевёл на FSD',
      'Проектировал микрофронтенд-архитектуру на Module Federation',
      'Tech Lead: команда из 9 разработчиков — декомпозиция, оценка, code review',
      'Оптимизировал сложные формы и таблицы: меньше перерендеров, отзывчивее UI',
      'Проводил собеседования, менторил и онбордил новых разработчиков',
    ],
    tags: ['Angular', 'React', 'NgRx', 'GraphQL', 'WebSockets', 'CI/CD', 'Tech Lead'],
    current: false,
  },
]

export const stack = [
  { group: 'Фреймворки', items: ['Angular', 'React', 'RxJS', 'Vue (базово)'] },
  { group: 'Архитектура', items: ['Module Federation', 'Микрофронтенды', 'FSD', 'Nx', 'SOLID'] },
  { group: 'Состояние', items: ['NgRx', 'Redux', 'MobX', 'Apollo Client'] },
  { group: 'Данные и сеть', items: ['REST', 'GraphQL', 'WebSockets', 'WebWorkers'] },
  { group: 'Качество', items: ['Vitest', 'Jest', 'Selenium', 'unit + e2e', 'code review'] },
  { group: 'Инструменты', items: ['TypeScript', 'Vite', 'Webpack', 'Git / GitFlow', 'GitLab CI', 'Azure DevOps'] },
]

export const marquee = [
  ['Angular', 'React', 'TypeScript', 'Module Federation', 'Micro-frontends', 'FSD', 'Nx', 'RxJS'],
  ['NgRx', 'Redux', 'MobX', 'GraphQL', 'WebSockets', 'Vite', 'Webpack', 'Vitest', 'Jest', 'CI/CD'],
]

export const cases = [
  {
    id: '01',
    title: 'Монолит → микрофронтенды',
    subtitle: 'рефакторинг legacy ~100k+ LOC под независимую разработку команд',
    steps: [
      { n: '01', t: 'Аудит', d: 'карта связей монолита, боли релизов, точки интеграций' },
      { n: '02', t: 'Архитектура', d: 'FSD-слои, границы модулей, контракт shared-библиотек' },
      { n: '03', t: 'Federation', d: 'Webpack Module Federation: shell + remotes, независимые деплои' },
      { n: '04', t: 'Результат', d: 'ускорение вывода фич, параллельная работа команд, меньше регрессий' },
    ],
    tags: ['Module Federation', 'FSD', 'Webpack', 'Nx'],
  },
  {
    id: '02',
    title: 'Performance: формы и таблицы',
    subtitle: 'сложные enterprise-гриды и формы без фризов',
    steps: [
      { n: '01', t: 'Профилирование', d: 'DevTools, Lighthouse — карта перерендеров и баттлинга' },
      { n: '02', t: 'Оптимизация', d: 'стратегии детекции изменений, мемоизация, виртуализация' },
      { n: '03', t: 'Data-flow', d: 'нормализация стора, селекторы, устранение каскадов' },
      { n: '04', t: 'Результат', d: 'отзывчивый UI под production-нагрузкой' },
    ],
    tags: ['OnPush', 'memo', 'Lighthouse', 'DevTools'],
  },
]

export const education = [
  { title: 'Магистратура', place: 'КГЭУ, Казань', year: '2025', detail: 'Информатика и вычислительная техника' },
]

export const contacts = [
  { label: 'email', value: 'khamidulin.ilgizar@gmail.com', href: 'mailto:khamidulin.ilgizar@gmail.com' },
  { label: 'telegram', value: '@ilgizarKh', href: 'https://t.me/ilgizarKh' },
  { label: 'github', value: 'github.com/iriiv', href: 'https://github.com/iriiv' },
  { label: 'linkedin', value: 'in/iriiv', href: 'https://www.linkedin.com/in/iriiv/' },
]
