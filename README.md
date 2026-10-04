# 🍕 Hito 4 de Pizzería Mamma Mía - Consumo de APIs

Proyecto realizado para el desafío **Hito 4 - Pizzería Mamma Mía**, donde se continúa el proyecto del Hito 3 conectando la aplicación React con la API de pizzas del material de apoyo.

## 🚀 Deploy

Este hito se ejecuta **localmente**, con el frontend de React y el backend de apoyo encendidos al mismo tiempo. El backend utiliza `http://localhost:5000`.

GitHub Pages solo publica archivos del frontend; no ejecuta el backend de Node. Por eso no se presenta un enlace de Pages como una aplicación completa funcionando. Se conserva el flujo de publicación del hito anterior como opción manual, que requiere configurar Pages en el repositorio.

## 📝 Descripción

`Home.jsx` obtiene un arreglo de pizzas desde la API y muestra sus tarjetas. Ya no importa el arreglo local de `pizzas.js`.

`Pizza.jsx` obtiene el detalle de la pizza `p001` y muestra su nombre, precio, ingredientes, imagen y descripción. Como indica el enunciado, esta es la vista principal y `Home` queda comentado en `App.jsx`.

## ✨ Funcionalidades

- Consultar las seis pizzas con `fetch` y `useEffect` en Home.
- Guardar los datos recibidos con `useState`.
- Crear las tarjetas con `map()` y pasar sus datos mediante props.
- Consultar una pizza con el id fijo `p001` en Pizza.
- Mostrar nombre, precio, ingredientes, imagen y descripción.
- Mostrar mensajes de carga y de error de conexión.
- Cancelar peticiones pendientes al salir del componente.
- Mostrar precios con separador de miles usando `toLocaleString("es-CL")`.
- Mostrar una foto ilustrativa de respaldo en el detalle si falla la imagen externa.
- Mantener el botón Añadir sin funcionalidad, como pide este hito.
- Conservar el carrito y los formularios de hitos anteriores.
- Incluir comentarios en español para explicar el código.

## 🛠️ Tecnologías utilizadas

- HTML5
- CSS3
- JavaScript
- React: `useState` y `useEffect`
- Fetch API
- Vite
- Node.js y Express (backend proporcionado en el material de apoyo)

## 📁 Estructura del proyecto

```text
Hito4-APis-reacts/
├── .github/workflows/deploy.yml
├── notas/
│   ├── README-Hito3-respaldo.md
│   └── registro-de-cambios.md
├── public/images/pizza.jpg
├── src/
│   ├── components/
│   │   ├── CardPizza.jsx
│   │   ├── Cart.jsx
│   │   ├── Footer.jsx
│   │   ├── Home.jsx
│   │   ├── Inicio.jsx
│   │   ├── Login.jsx
│   │   ├── Navbar.jsx
│   │   ├── Pizza.jsx
│   │   └── Registro.jsx
│   ├── data/pizzas.js
│   ├── App.jsx
│   ├── main.jsx
│   └── styles.css
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
└── README.md
```

El backend se mantiene por separado: corresponde al ZIP **Material de apoyo - Backend Pizzas** del curso y no está incluido en este repositorio.

## ⚙️ Cómo funciona

En `App.jsx` se muestran `Navbar`, `Pizza` y `Footer`. Home y los componentes anteriores quedan comentados para poder revisarlos sin borrarlos.

En `Home.jsx`, `useState([])` comienza con un arreglo vacío. `useEffect` ejecuta la petición a `http://localhost:5000/api/pizzas`; `respuesta.json()` convierte la respuesta y `setPizzas` guarda los datos. React actualiza las tarjetas creadas con `map()`.

En `Pizza.jsx`, el estado comienza con `null`, porque esperamos un objeto. La consulta se realiza a `http://localhost:5000/api/pizzas/p001`. Mientras llega la respuesta mostramos un mensaje de carga, evitando leer propiedades de un objeto que todavía no existe. La descripción está en la propiedad `desc`.

El arreglo vacío de dependencias de `useEffect` evita repetir la petición por cada actualización del estado. La limpieza del efecto cancela peticiones pendientes con `AbortController`.

## 💻 Ejecutar el proyecto

Se necesitan Node.js, npm y el ZIP del backend entregado por el curso.

### 1. Encender el backend

Descomprime el material de apoyo. Abre una terminal dentro de la carpeta que contiene su `package.json` y ejecuta:

```bash
npm install
npm start
```

Debe indicar que está funcionando en `http://localhost:5000`. Mantén esa terminal abierta.

Comprueba en el navegador:

- Todas las pizzas: `http://localhost:5000/api/pizzas`
- Una pizza: `http://localhost:5000/api/pizzas/p001`

### 2. Encender React

En otra terminal:

```bash
git clone https://github.com/cadina-sandy/Hito4-APis-reacts.git
cd Hito4-APis-reacts
npm ci
npm run dev
```

Abre la dirección que muestre Vite. El puerto puede variar si ya hay otro proyecto abierto; la ruta del proyecto es `/Hito4-APis-reacts/`.

### 3. Compilar

```bash
npm run build
```

### 4. Revisar Home

En `src/App.jsx`, descomenta la importación de Home y `<Home />`, y comenta `<Pizza />`. Para volver al detalle, realiza el cambio inverso. Para la entrega se deja visible Pizza.

## 🧩 Problemas encontrados y correcciones

- **Puerto 5000 ocupado:** apareció `EADDRINUSE` porque un servicio del Mac utilizaba ese puerto. Se probó temporalmente con 5001. Después de desactivar Receptor AirPlay, el backend inició en 5000 y se actualizaron ambas consultas. Las direcciones anteriores quedaron comentadas.
- **Imagen externa del detalle sin cargar:** se conservó la primera versión comentada y se agregó una foto local ilustrativa como respaldo si falla la imagen de la API.
- **Cambio de vista:** Home no fue eliminado; quedó comentado para mostrar Pizza según la pauta. Este cambio no fue un error.

El registro conserva los intentos previos y sus resultados en `notas/registro-de-cambios.md`. El README anterior se conserva en `notas/README-Hito3-respaldo.md`.

## ⬆️ Subida del proyecto

Repositorio del Hito 4, separado del Hito 3. Se conservan los commits previos como historial. Las carpetas `node_modules` y `dist` no se suben. La publicación en Pages es manual y no sustituye al backend local.

## 🔗 Repositorio

[Ver repositorio en GitHub](https://github.com/cadina-sandy/Hito4-APis-reacts)

## 👩‍💻 Autora

**Sandy Cadin**

## 📷 Imágenes

Las pizzas reciben la URL de su imagen desde la API del material de apoyo. En el detalle, si esa imagen falla, se utiliza la fotografía ilustrativa `public/images/pizza.jpg`; no representa necesariamente la variedad consultada.

Fuente de la imagen de respaldo: [Pepperoni pizza](https://commons.wikimedia.org/wiki/File:Pepperoni_pizza.jpg), de Jon Sullivan, dominio público.
