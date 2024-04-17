# Яндекс-амбасадоры

Строим сообщество IT: знания, события, связи.


## Технологии:

### Фронтенд:

* React: 18.2.0
* React-dom: 18.2.0
* React-hook-form: 7.51.3,
* React-router-dom: 6.22.3,
* Typescript: 4.4.2,


### Сборка и инструменты:

- React Scripts, [Webpack](https://webpack.js.org/): Для сборки и управления модулями.
- [Sass и Sass Loader](https://sass-scss.ru/): Для работы с CSS и препроцессором Sass.
- [Prettier](https://prettier.io/), [ESLint](https://eslint.org/): Инструменты для форматирования кода.



## Команда

### Frontend:

Денис Манаев ( GitHub [Manaewd](https://github.com/Manaewd)) - Lead

Игорь Казаков (GitHub [FreyrsKept](https://github.com/FreyrsKept))


## Развёртывание проекта

- Клонируйте репозиторий через командную строку:

```
git clone git@github.com:Sphere-Ya/frontend.git
```

- Перейдите в локальную папку с проектом
- Установите зависимости командой:

```
npm i
```

- Запустите приложение:

```
npm run start
```


## Запуск среды разработки Docker

### 1. Клонировать docker_wrapper

```
git clone git@github.com:Sphere-Ya/docker-wrapper.git 
```
или
```
git clone https://github.com/Sphere-Ya/docker-wrapper.git
```


### 2. В папку 'docker_wrapper' склонировать backend

```
git clone git@github.com:Sphere-Ya/backend.git -b develop backend 
```
или
```
git clone https://github.com/Sphere-Ya/backend.git -b develop backend
```

### 3. В папку 'docker_wrapper' склонировать frontend

```
git clone git@github.com:Sphere-Ya/frontend.git -b develop frontend
```
или
```
git clone https://github.com/Sphere-Ya/frontend.git -b develop frontend 
```

### 4.  Скопируйте все из файла .env.example в файл .env и актуализируйте данные по необходимости

### 5. В папке 'docker_wrapper' запустить docker-compose.yml:

```
docker-compose up -d
```

### 6. Остановить:

```
docker-compose down
```

### 7. Пересобрать

```
docker-compose build --no-cache --pull
```