import './App.css';

import { useState } from 'react';

import { useFetch } from './hook/useFetch';

const url = "http://localhost:3000/products";

function App() {
  // const [products, setProducts] = useState([]);

  const { data: items, httpConfig, loading, error } = useFetch(url);

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  /* useEffect(() => {
    async function fetchData() {
      const res = await fetch(url);
      const data = await res.json();
      setProducts(data);
    }

    fetchData();
  }, []); */

  const handleSubmit = async (e) => {
    e.preventDefault();

    const product = {
      name,
      price,
    };

    /*const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    });

    const addedProduct = await res.json();
    setProducts((prevProducts) => [...prevProducts, addedProduct]);*/

    httpConfig(product, "POST");
    setName("");
    setPrice("");
  };

  const handleRemove = (id) => {
    httpConfig(id, "DELETE");
  };

  return (
    <div className="App">
      <h1>Lista de Produtos</h1>
      {loading && <p>Carregando dados...</p>}
      {error && <p>{error}</p>}
      {!loading && (
        <ul>
          {items?.map((product) => (
            <li key={product.id}>
              {product.name} - R$: {product.price}
              <button onClick={() => handleRemove(product.id)}>Excluir</button>
            </li>
          ))}
        </ul>
      )}

      <div className="add-product">
        <p>Adicionar produto:</p>
        <form onSubmit={handleSubmit}>
          <label>
            Nome:
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <label>
            Preço:
            <input
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </label>
          {!loading && <input type="submit" value="Criar" />}
        </form>
      </div>
    </div>
  );
}

export default App;
