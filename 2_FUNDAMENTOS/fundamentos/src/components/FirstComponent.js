import MyComponent from "./MyComponent";
import Events from "./Events";

const FirstComponent = () => {
    return (
        <div>
            <h1>First Component</h1>
            <p>Meu texto</p>
            <MyComponent />
            <Events />
        </div>
    );
};

export default FirstComponent;
