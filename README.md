# Портфолио — Ильгизар Хамидуллин

Одностраничный сайт-портфолио на **React + Vite**. Деплой на GitHub Pages.

## Запуск локально

```bash
cd portfolio
npm install
npm run dev        # http://localhost:5173
```

## Как править контент

Весь текст — в одном файле: `src/data.js` (опыт, метрики, стек, кейсы, контакты).
Код и стили трогать не нужно.

## Деплой на GitHub Pages

1. Создай репозиторий `portfolio` на GitHub (аккаунт: github.com/iriiv)
2. Инициализируй и запушь:

```bash
cd portfolio
git init
git add .
git commit -m "feat: portfolio v1"
git branch -M main
git remote add origin https://github.com/iriiv/portfolio.git
git push -u origin main
```

3. Опубликуй:

```bash
npm run deploy     # соберёт dist/ и запушит в ветку gh-pages
```

4. На GitHub: **Settings → Pages → Source: ветка `gh-pages`**
5. Через пару минут сайт будет доступен:
   **https://iriiv.github.io/portfolio/**

## Обновление контента

```bash
# правишь src/data.js → коммитишь → деплоишь
git add . && git commit -m "update: content"
git push
npm run deploy
```

## Стек сайта

- React 18 + Vite 5
- Рукописный CSS (без UI-китов) — как демо насмотренности
- Google Fonts: Unbounded / Manrope / JetBrains Mono (все с кириллицей)
- IntersectionObserver для скролл-анимаций, prefers-reduced-motion поддержан
