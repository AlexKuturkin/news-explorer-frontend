# news-explorer-frontend

# Фронтенд для новостного сайта

# Описание
News Explorer — это сервис поиска новостей, позволяющий их искать и сохранять себе на личную страницу. 

## Демо
https://alexkuturkin.github.io/news-explorer-frontend/index.html

## Стек
HTML, CSS, JS, Webpack, GIT, БЭМ

## Локальный запуск
Скопируйте проект на компьютер:
```
git clone https://github.com/AlexKuturkin/news-explorer-frontend.git
```

Установите зависимости:
```
npm install
```

## Работа Webpack
Режим development: сборка для разработки с сервером 
```
npm run dev
```

Режим production: готовая сборка 
```
npm run build
```

Режим Github Pages: проект собирается в production и зальется затем в ветку gh-pages 
```
npm run deploy
```

## О будущем
В скором времени планируется соединить front&backend при помощи [news-explorer-api](https://github.com/AlexKuturkin/news-explorer-api) и [News API](https://newsapi.org/)

Планирующийся функционал:
* создавать/регистрировать пользователя с именем, почтой и паролем;
* авторизовываться на сайта;
* искать новости по ключевым словам;
* сохранять понравившиеся новости на личную страницу;
* удалять новости с личной страницы.