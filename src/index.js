import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

/**
 * Two rules for React components:
 *
 * 1. Component names must start with a capital letter
 * 2. Components must return some markup (JSX) or null
 *
 */

function Pizza() {
  // Each component should only return one root element
  // Self-closing tags must have a closing slash (/) at the end
  return (
    <div>
      <img src="pizzas/spinaci.jpg" alt="Pizza Spinaci" />
      <h3>Pizza Spinaci</h3>
      <p>Tomato, mozarella, spinach, and ricotta cheese</p>
    </div>
  );
}

function Header() {
  return (
    <header className="header">
      <h1>Fast React Pizza CO.</h1>
    </header>
  );
}

function Menu() {
  return (
    <main className="menu">
      <h2>Our Menu</h2>
      <Pizza />
      <Pizza />
      <Pizza />
    </main>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openingHour = 12;
  const closingHour = 22;
  const isOpen = hour >= openingHour && hour < closingHour;

  //   if (hour >= openingHour && hour <= closingHour) {
  //     alert("We are open!"); // notice how we got the alert twice because React render the component twice
  //   } else {
  //     alert("We are closed!");
  //   }

  return (
    <footer className="footer">
      {new Date().toLocaleTimeString()}{" "}
      {isOpen ? "We're currently open" : "We're currently closed"}
    </footer>
  );

  //   return React.createElement("footer", null, "We're currently open");
}

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

// React 18+ root API
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // strict mode enables react during development to run components twice to check for bugs, and check if we are using outdated APIs
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// React before v18
// ReactDOM.render(<App />, document.getElementById("root")); // and the import is different
