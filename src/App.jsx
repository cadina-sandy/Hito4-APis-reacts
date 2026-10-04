import Navbar from "./components/Navbar.jsx";
// Respaldo del paso anterior: Home muestra todas las pizzas. No es un error.
// import Home from "./components/Home.jsx";
import Pizza from "./components/Pizza.jsx";
import Footer from "./components/Footer.jsx";

// Conservamos los formularios completos del Hito 2 para los próximos hitos.
// import Login from "./components/Login.jsx";
// import Registro from "./components/Registro.jsx";
// import Cart from "./components/Cart.jsx";


function App() {
  return (
    <div className="app">
      <Navbar />

      <main className="main-content">
        {/* Paso anterior: mostrábamos todas las pizzas obtenidas desde la API. */}
        {/* <Home /> */}
        {/* Paso actual: mostramos el detalle de p001, como pide el Hito 4. */}
        <Pizza />
        {/* <Login /> */}
        {/* <Registro /> */}

        {/* <Cart /> */}
      </main>

      <Footer />
    </div>
  );
}


export default App;
