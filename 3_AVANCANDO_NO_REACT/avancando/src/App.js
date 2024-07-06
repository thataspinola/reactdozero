import './App.css';

import { useState } from 'react';

import BG from './assets/backgroud.jpg';
import CarDetails from './components/CarDetails';
import ConditionalRender from './components/ConditionalRender';
import ListRender from './components/ListRender';
import ManageData from './components/ManageData';
import ShowUserName from './components/ShowUserName';
import Fragments from './components/Fragments';
import Container from './components/Container';
import ExecuteFunction from './components/ExecuteFunction';
import Message from './components/Message';
import ChangeMessageState from './components/ChangeMessageState';

function App() {
  const name = "FDP";

  const cars = [
    { id: 1, brand: "Ferrari", color: "Cor de Ovo", newCar: true, km: 0 },
    { id: 2, brand: "KIA", color: "Verde Catarro", newCar: false, km: 6217812 },
    { id: 3, brand: "Renault", color: "Roda Vadia", newCar: false, km: 123 },
    { id: 4, brand: "BMW", color: "Azul de Rico", newCar: true, km: 0 },
  ];

  function showMessage() {
    alert("Evento do componente pai!");
  }

  const [message, setMessage] = useState("");
  const handleMessage = (msg) => {
    setMessage(msg);
  };

  return (
    <div className="App">
      <h1>Avançanado no react</h1>
      <ManageData />

      <ListRender />

      <ConditionalRender />

      <ShowUserName name={name} />

      <CarDetails brand="VM" km={10000} color="Azul" newCar={false} />

      {cars.map((car) => (
        <CarDetails brand={car.brand} color={car.color} km={car.km} newCar={car.newCar} />
      ))}

      <Fragments propFragment="teste" />

      <Container myValue="testing">
        <p>Este é o conteudo do conteiner fora do componente</p>
      </Container>

      <ExecuteFunction myFunction={showMessage} />

      <Message msg={message} />

      <ChangeMessageState handleMessage={handleMessage} />

      {/* Imagem em public */}
      <div>
        <img src="/backgroud.jpg" alt="Background" />
      </div>
      {/* Imagem em assets */}
      <div>
        <img src={BG} alt="Background 2" />
      </div>
    </div>
  );
}

export default App;
