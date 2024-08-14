import { useEffect, useState } from "react";

const HookUseEffect = () => {
  useEffect(() => {
    console.log("Estou sendo executado");
  });

  const [number, setNumber] = useState(1);
  const [anotherNumber, setAnotherNumber] = useState(0);

  const changeSomething = () => {
    setNumber(number + 1);
  };

  useEffect(() => {
    console.log("Serei executado apenas uma vez");
  }, []);

  useEffect(() => {
    if (anotherNumber > 0) {
      console.log("Sou executado apenas quando o anotherNumber muda");
    }
  }, [anotherNumber]);

  useEffect(() => {
    const timer = setTimeout(() => {
      console.log("Hellor World");
      setAnotherNumber(anotherNumber + 1);
    }, 2000);

    return () => clearTimeout(timer);
  }, [anotherNumber]);

  return (
    <div>
      <h2>useEffect</h2>
      <p>Number: {number}</p>
      <button onClick={changeSomething}>Executar!</button>

      <p>Another Number: {anotherNumber}</p>
      <button
        onClick={() => {
          setAnotherNumber(anotherNumber + 1);
        }}
      >
        Mudar anotherNumber
      </button>
      <hr />
    </div>
  );
};

export default HookUseEffect;
