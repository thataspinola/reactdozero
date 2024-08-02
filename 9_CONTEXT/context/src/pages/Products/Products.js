import { useContext } from "react";

import { CounterContext } from "../../context/CounterContext";

import { useTitleColorContext } from "../../hooks/useTitleColorContext";

const Products = () => {
  const { counter } = useContext(CounterContext);
  const { color } = useTitleColorContext();

  return (
    <div>
      <h1 style={{ color: color }}>Products</h1>
      <p>Valor contador: {counter}</p>
    </div>
  );
};

export default Products;
