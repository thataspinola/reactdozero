const Events = () => {
    const handleEventButton = () => {
        alert('Ativou o evento do botão');
    };

    const renderSomething = (x) => {
        if (x) {
            return <h1>Renderizando isso!</h1>
        } else {
            return <h1>Também posso renderizar isso!</h1>
        }
    };

    return (
        <div>
            <div>
                <button onClick={handleEventButton}>Clique aqui!</button>
            </div>

            <div>
                <button onClick={() => alert('Ativou o evento do botão 2')}>Clique aqui 2!</button>
            </div>

            <div>
                <button onClick={() => {
                    if (true) {
                        alert('Ativou o evento do botão 3');
                    }
                }}>Clique aqui 3!</button>
            </div>

            <p>true - {renderSomething(true)}</p>
            <p>false - {renderSomething(false)}</p>
        </div>
    );
};

export default Events;
