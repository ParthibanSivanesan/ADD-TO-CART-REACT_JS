import Taskbar from "./Components/Task Bar";
import Header from "./Components/Header";
import Body from "./Components/Body";
import Footer from "./Components/Footer";
import React, { useState } from "react";

import "./App.css";

function App() {
  const [cart, setCart] = useState(0);
  const [items, setItems] = useState([
    {
      id: 1,
      tag: false,
      name: "Fancy Product",
      stars: false,
      originalprice: "",
      price: "$40.00 - $80.00",
      bttn: "View Options",
      isadded: false,
    },
    {
      id: 2,
      tag: true,
      name: "Special Item",
      stars: true,
      originalprice: "$20.00",
      price: "$18.00",
      bttn: "Add to Cart",
      isadded: false,
    },
    {
      id: 3,
      tag: true,
      name: "Sale Item",
      stars: false,
      originalprice: "$50.00",
      price: "$25.00",
      bttn: "Add to Cart",
      isadded: false,
    },
    {
      id: 4,
      tag: false,
      name: "Popular Item",
      stars: true,
      originalprice: "",
      price: "$40.00",
      bttn: "Add to Cart",
      isadded: false,
    },
    {
      id: 5,
      tag: true,
      name: "Sale Item",
      stars: false,
      originalprice: "$50.00",
      price: "$25.00",
      bttn: "Add to Cart",
      isadded: false,
    },
    {
      id: 6,
      tag: false,
      name: "Fancy Product",
      stars: false,
      originalprice: "",
      price: "$120.00 - $280.00",
      bttn: "View Options",
      isadded: false,
    },
    {
      id: 7,
      tag: true,
      name: "Special Item",
      stars: true,
      originalprice: "$20.00",
      price: "$18.00",
      bttn: "Add to Cart",
      isadded: false,
    },
    {
      id: 8,
      tag: false,
      name: "Popular Item",
      stars: true,
      originalprice: "",
      price: "$40.00",
      bttn: "Add to Cart",
      isadded: false,
    },
  ]);

  return (
    <div className="App">
      <Taskbar cart={cart} setCart={setCart} />
      <Header />

      <Body items={items} setItems={setItems} cart={cart} setCart={setCart} />

      <Footer />
    </div>
  );
}

export default App;
