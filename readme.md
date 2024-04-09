## React + Vite + TW APPLICATION

#### !Настройки проекта осуществлены через TAILWIND_CLI, без использования TW как плагина post-css

#### УСТАНОВКА ДЛЯ Vanilla JS приложений:

1. npm install -D tailwindcss
2. npx tailwindcss init
3. tailwind.config.js
4. Tailwind directives to your main CSS:

```css
`/* Указываю конкретный путь до конфига */
@config "../tailwind.config.js";
@tailwind base;
@tailwind components;
@tailwind utilities;`
```

5. npx tailwindcss -i ./src/input.css -o ./src/output.css --watch
6. in the head tag of HTML:

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link href="./output.css" rel="stylesheet" />
  </head>
  <body>
    <h1 class="text-3xl font-bold underline">Hello world!</h1>
  </body>
</html>
```

#### При сборке проекта, TW использует встроенные методы оптимизации и минификации сss, т.о. в финальную сборку не попадает неиспользуемый CSS-код!

```javascript
// Команда оптимизации и минификации
  npx tailwindcss -o gri.css --minify
```

#### Файл package.json:

```javascript
// package.json for tailwind
{
  "scripts": {
    "css-min": "tailwindcss -o gri.css --minify",
    "config": "tailwindcss init tailwindcss-config.js"
  },
"devDependencies": {
    "autoprefixer": "^10.4.19",
    "@tailwindcss/forms": "^0.5.7",
    "postcss": "^8.4.38",
    "tailwindcss": "^3.4.3"
  }
}
```

#### Пример файла tailwind.config.js проекта:

```javascript
// Если применимо, указывайте помимо отдельных js и css-файлов точку входа по html (cвойство content)
// Никогда не включайте файлы CSS в конфигурацию вашего cвойства content!
// Мы не используем префикс, а также не отключаем базовые утилиты (классы) в разделе corePlugins

export default {
  // prefix: 'tw-',
  // corePlugins: {
  //   margin: false,
  //   padding: false,
  //   backgroundColor: false,
  //   backgroundPosition: false,
  //   borderColor: false,
  //   borderWidth: false,
  //   borderRadius: false,
  //   colors: false,
  //   padding: false,
  //   fontFamily: false,
  //   fontSize: false,
  // },
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: "Montserrat",
        roboto: "Roboto",
      },
      colors: {
        red: "#dc2626",
        teal: "#115e59",
        sky: "#0369a1",
        indigo: "#4338ca",
      },
      spacing: {
        "1gri": "0.5rem",
        "2gri": "0.75rem",
        "3gri": "1rem",
        "4gri": "24px",
        "5gri": "2rem",
        "6gri": "3rem",
      },
      screens: {
        xl: { max: "1399.98px" },
        lg: { max: "1199.98px" },
        md: { max: "991.98px" },
        sm: { max: "767.98px" },
        xs: { max: "575.98" },
      },
    },
  },
  plugins: [
    require("tailwindcss"),
    require("@tailwindcss/forms"),
    require("autoprefixer"),
  ],
};
```

#### Tailwind plugins (в нашей конфигурации мы используем @tailwindcss/forms, autoprefixer, tailwindcss и т.д.):

**@tailwindcss/forms** - позволяет стилизовать элементы **SHADOW-DOM** (inputs, selects):

```html
<!-- Фактически вы можете настроить отступы для выбранного элемента: -->
<select class="px-4 py-3 rounded-full">
  <!-- ... -->
</select>

<!-- Или измените цвет флажка с помощью утилит для настройки цвета текста: -->
<input type="checkbox" class="rounded text-pink-500" />
```

#### Кастомизация СSS-свойств без наследования, объект theme в составе tailwind.config.js:

```javascript
// Кастомизируем свойства font-family и colors, перезатираем все предустановленные TW-утилиты по обозначенным свойствам: text-slate-400 не существует!

export default {
  theme: {
    fontFamily: {
      montserrat: "Montserrat",
      roboto: "Roboto",
    },
    colors: {
      red: "#dc2626",
      teal: "#115e59",
      sky: "#0369a1",
      indigo: "#4338ca",
    },
  },
};
```

- В разметке HTML (JSX) c ключом **colors**:

```html
<!-- Работает, такие цвета есть в нашей кастомной палитре -->
<h1 className="text-teal bg-sky">Hello world!</h1>
```

- В файлах СSS при помощи функции **theme()** c ключом **fontFamily**:

```css
/* Используем для доступа к объекту theme - функцию theme */

h1,
h2,
h3,
h4,
h5,
h6 {
  @apply text-4xl font-bold text-center;
  font-family: theme("fontFamily.roboto");
}
```

#### Кастомизация СSS-свойств с наследованием, объект theme в составе tailwind.config.js:

```javascript
// Кастомизируем свойства font-family и colors, наследуя все предустановленные TW-утилиты
// ключевое свойство extend:

export default {
  theme: {
    extend: {
      fontFamily: {
        montserrat: "Montserrat",
        roboto: "Roboto",
      },
      colors: {
        red: "#dc2626",
        teal: "#115e59",
        sky: "#0369a1",
        indigo: "#4338ca",
      },
      spacing: {
        "1gri": "0.5rem",
        "2gri": "0.75rem",
        "3gri": "1rem",
        "4gri": "24px",
        "5gri": "2rem",
        "6gri": "3rem",
      },
      screens: {
        xl: { max: "1399.98px" },
        lg: { max: "1199.98px" },
        md: { max: "991.98px" },
        sm: { max: "767.98px" },
        xs: { max: "575.98" },
      },
    },
  },
};
```

- В разметке HTML (JSX) c ключом **colors**:

```html
<!-- Работает, унаследовались от Предустановленных TW-утилит -->
<h1 className="text-slate-500">Hello world!</h1>
```

- В разметке HTML (JSX) c ключом **spacing**:
  1. **spacing** работает с классами: m-, p-, h-, min-h-, max-h- translate-x-, translate-y-, gap- и т.д.

```html
<!-- Работает, унаследовались от Предустановленных TW-утилит -->
<h1 className="text-slate-500 bg-teal p-3gri">Hello world!</h1>
```

- В разметке HTML (JSX) c ключом **screens**:

```html
<!-- Работает, значение md берем из 'theme.screens.md' -->
<h1 className="text-slate-500 bg-teal p-3gri md:text-yellow-500">
  Hello world!
</h1>
```

## Функции и Директивы:

- **screen**

```css
/* В функцию передаем значение из 'theme.screens.sm'
    Вверху должен быть импорт конфига tailwind.config.js
*/
@media screen(sm) {
  form {
    background: red;
  }
}
```

- **theme(params)**
  Важно, в аргументе функции theme игнорируется ключ **extend**!!

```css
h1,
h2,
h3,
h4,
h5,
h6 {
  @apply text-3xl font-bold text-center;
  font-family: theme("fontFamily.roboto");
}
```

- **@config**

```css
/* Your main css-file: */
/* The path you provide to the @config directive is relative to that CSS file */
@config "./tailwind.site.config.js";

@tailwind base;
@tailwind components;
@tailwind utilities;
```

- **@apply**

```css
/* Можно писать утилитарные tw-классы прямо в кастомном CSS-файле */
.btn {
  @apply font-bold py-2 px-4 rounded !important;
}
```

- **@layer**
  Корректными названиямислоев служат:
  1.  base - для базовых стилей
  2.  components - для компонентов

```css
@layer base {
  @font-face {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url(/fonts/Roboto.woff2) format("woff2");
  }

  :root {
    --color-primary: 255 115 179;
    --color-secondary: 111 114 185;
  }

  h1 {
    @apply text-2xl;
  }
  h2 {
    @apply text-xl;
  }
}

@layer components {
  .btn-blue {
    @apply bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded;
  }
}
```

#### Ссылка на другие значения в конфиге:

```javascript
module.exports = {
  theme: {
    spacing: {
      // ...
    },
    backgroundSize: ({ theme }) => ({
      auto: "auto",
      cover: "cover",
      contain: "contain",
      ...theme("spacing"),
    }),
  },
};
```

#### Используем встроенный в tailwind объект colors для формирования кастомной цветовой палитры:

```javascript
// ПЕРЕХОДИМ В ФАЙЛ **tailwind.config.js**

const colors = require("tailwindcss/colors");

module.exports = {
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      emerald: colors.emerald,
      indigo: colors.indigo,
      yellow: colors.yellow,
    },
  },
};
```

#### Отключение утилитарных классов в конфиге:

```javascript
// Отключаем все утилиты bg-(ошибка, не работает!)

module.exports = {
  corePlugins: {
    backgroundColor: false,
  },
};
```

#### Включение избранных утилитарных классов в конфиг:

```javascript
// Будут включены утилитарные классы, присутствующие в массиве при использовании других возникнет ошибка

module.exports = {
  corePlugins: [
    "margin",
    "padding",
    "backgroundColor",
    // ...
  ],
};
```
