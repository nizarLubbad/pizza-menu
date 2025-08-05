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

function Pizza({ pizza }) {
  // Each component should only return one root element
  // Self-closing tags must have a closing slash (/) at the end

  if (pizza.soldOut) {
    return null;
  }

  return (
    <li className="pizza">
      <img src={pizza.photoName} alt={pizza.name} />
      <div>
        <h3>{pizza.name}</h3>
        <p>{pizza.ingredients}</p>
        <span>${pizza.price}</span>
      </div>
    </li>
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
  // We pass data to the Pizza component using props.
  // We pass the data as attributes to the child component via the parent component (Parent -> Menu, Child -> Pizza)

  const pizzas = pizzaData;

  return (
    <main className="menu">
      <h2>Our Menu</h2>

      {pizzas.length > 0 ? (
        // React Fragment is a way to group a list of children without adding extra nodes to the DOM
        <>
          <p>
            Authentic Italian cuisine. 6 creative dishes to choose from. All
            from our stone oven, all organic, all delicious.
          </p>
          <ul className="pizzas">
            {pizzas.map((pizza) => (
              /**
               *
               * We use map function instead of forEach because we need to return an array
               * of JSX elements.
               *
               * We use the key prop to help React identify which items have changed, are
               * added, or are removed.
               *
               * the key prop should be unique for each item in the list
               * (in our case pizza's name is unique).
               *
               */

              <Pizza pizza={pizza} key={pizza.name} />
            ))}
          </ul>
        </>
      ) : (
        <p>We're still working on our menu, please come back later :)</p>
      )}
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
      {isOpen ? (
        <Order closingHour={closingHour} />
      ) : (
        <p>
          We're happy to welcome you between {openingHour}:00 and {closingHour}
          :00.
        </p>
      )}
    </footer>
  );

  //   return React.createElement("footer", null, "We're currently open");
}

function Order({ closingHour }) {
  return (
    <div className="order">
      <p>We're open until {closingHour}:00. Come visit us or order online.</p>
      <button className="btn">Order</button>
    </div>
  );
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
  // Strict mode enables react during development to run components twice to check for bugs, and check if we are using outdated APIs
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// React before v18
// ReactDOM.render(<App />, document.getElementById("root")); // and the import is different
