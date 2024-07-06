import { useState } from 'react';

const ManageData = () => {
    var someData = 10;

    const [number, setNumber] = useState(someData);

    return (
        <div>
            <div>
                <p>Valor Inicial: {someData}</p>
                <button onClick={() => setNumber(someData = 15)}>Mudar Variável</button>
            </div>

            <div>
                <p>Valor: {number}</p>
                <button onClick={() => setNumber(someData = 25)}>Mudar o state</button>
            </div>
        </div>
    );
};

export default ManageData;
