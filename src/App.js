import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import "./scss/App.scss";
import Carts from "./components/Carts";

const App = () => {
  const [products, setProducts] = useState([]);
  const [text, setText] = useState("");

  useEffect(() => {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", "http://localhost:3000/products");
    // request state change event
    xhr.onreadystatechange = function () {
      // request completed?
      if (xhr.readyState !== 4) return;
      if (xhr.status === 200) {
        // request successful - show response
        setProducts(JSON.parse(xhr.responseText));
      } else {
        // request error
        console.log("HTTP error", xhr.status, xhr.statusText);
      }
    };
    // start request
    xhr.send();
  }, []);

  const passText = (value) => {
    setText(value);
  };

  return (
    <div className="App">
      <Header products={products} passText={passText}/>
      <Sidebar products={products} />
      <Carts products={products} text={text} />
    </div>
  );
};

export default App;
