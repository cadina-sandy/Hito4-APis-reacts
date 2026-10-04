# 🍕 Hito 3 de Pizzería Mamma Mía - Carrito

Proyecto realizado para el desafío **Hito 3 - Pizzería Mamma Mía**, donde se continúa el proyecto del Hito 2 agregando la renderización dinámica de componentes y un carrito de compras en React.

## 🚀 Deploy

[Ver sitio web en GitHub Pages](https://cadina-sandy.github.io/Hito3-carrito-reacts/)

## 📝 Descripción

La aplicación muestra un carrito de compras con las pizzas del archivo de apoyo `pizzas.js`. Permite modificar las cantidades y calcular el total del pedido.

También incluye el componente `Home`, que recorre un arreglo de seis pizzas y muestra una tarjeta por cada una. Para este hito, el carrito es la vista principal y `Home` queda comentado en `App.jsx`.

## ✨ Funcionalidades

- Mostrar seis tarjetas de pizzas en el componente Home.
- Enviar el nombre, precio, ingredientes e imagen mediante props.
- Mostrar cada ingrediente en un elemento de lista.
- Mostrar la imagen, nombre, precio y cantidad de cada pizza del carrito.
- Aumentar y disminuir la cantidad de pizzas.
- Eliminar una pizza cuando su cantidad llega a cero.
- Calcular el total de la compra según las cantidades.
- Mostrar un mensaje cuando el carrito está vacío.
- Mostrar los precios con separador de miles.
- Incluir el botón Pagar sin funcionalidad por ahora.
- Mantener el total del Navbar estático, como indica la pauta.
- Adaptar la interfaz a pantallas de escritorio y dispositivos móviles.

## 🛠️ Tecnologías utilizadas

- HTML5
- CSS3
- JavaScript
- React
- Vite (configuración del Hito 2)

## 📁 Estructura del proyecto

```text
Hito3-carrito-reacts/
├── .github/
│   └── workflows/
│       └── deploy.yml
├── src/
│   ├── components/
│   │   ├── CardPizza.jsx
│   │   ├── Cart.jsx
│   │   ├── Footer.jsx
│   │   ├── Home.jsx
│   │   ├── Inicio.jsx
│   │   ├── Login.jsx
│   │   ├── Navbar.jsx
│   │   └── Registro.jsx
│   ├── data/
│   │   └── pizzas.js
│   ├── App.jsx
│   ├── main.jsx
│   └── styles.css
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
└── README.md
```

## ⚙️ Cómo funciona

En `App.jsx` se muestran los componentes `Navbar`, `Cart` y `Footer`. Los componentes `Home`, `Login` y `Registro` quedan comentados, conservando los formularios y sus validaciones del Hito 2.

En `Home.jsx` se importa el arreglo `pizzas` y se utiliza `map()` para crear un componente `CardPizza` por cada pizza. Cada tarjeta recibe la información mediante props y recorre los ingredientes para mostrarlos en una lista.

En `Cart.jsx` se utiliza el hook `useState` para guardar el arreglo `pizzaCart`. Los botones permiten aumentar o disminuir la cantidad de cada pizza. Al llegar a cero, se utiliza `filter()` para quitarla del carrito.

El total se calcula con `reduce()`, sumando el precio de cada pizza multiplicado por su cantidad. Los valores se muestran con separador de miles utilizando `toLocaleString("es-CL")`.

Los datos provienen del archivo de apoyo `pizzas.js`. Las imágenes originales se reemplazaron por fotografías ilustrativas guardadas en `public/images` para evitar enlaces rotos. Se conservan los formularios de registro e inicio de sesión del Hito 2, junto con sus validaciones, sus estilos y el pie de página **Hecho por Sandy Cadin**.

## 💻 Ejecutar el proyecto

Se conserva la configuración de React y Vite del Hito 2.

Para instalar las dependencias:

```bash
npm install
```

Para iniciar el servidor de desarrollo:

```bash
npm run dev
```

Para compilar el proyecto:

```bash
npm run build
```

Para revisar Home o los formularios, descomenta su importación y su componente en `App.jsx`, y comenta `<Cart />`. Para la evaluación del Hito 3, se deja visible el carrito.

## ⬆️ Subida del proyecto

El código fue guardado y subido a GitHub en la rama `main`. Las carpetas `node_modules` y `dist` no se suben al repositorio. GitHub Actions compila el proyecto y publica el resultado en GitHub Pages al subir cambios a `main`.

## 🔗 Repositorio

[Ver repositorio en GitHub](https://github.com/cadina-sandy/Hito3-carrito-reacts) link: https://cadina-sandy.github.io/Hito3-carrito-reacts/

## 👩‍💻 Autora

**Sandy Cadin**

## 📷 Imágenes

Se utiliza una fotografía ilustrativa de pizza en las tarjetas y el carrito, guardada en `public/images/pizza.jpg`.

Fuente: [Pepperoni pizza](https://commons.wikimedia.org/wiki/File:Pepperoni_pizza.jpg), de Jon Sullivan, dominio público.
