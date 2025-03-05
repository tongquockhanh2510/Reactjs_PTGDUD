import React, { useState, useEffect } from 'react';
import './App.css';
import Product from './components/product';

function App() {
  const [arr, setArr] = useState([]);
  const url = 'https://67c846c20acf98d07085c782.mockapi.io/product/product';

  useEffect(() => {
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        if (Array.isArray(data)) {
          setArr(data);
        } else {
          console.error("Fetched data is not an array:", data);
        }
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div>
      <ul>
        {arr.map((e, i) => (
          <li key={e.id}>
            <Product id={e.id} name={e.name} image={e.image}  />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
