import { useState } from "react";

const Count = () => {
    const [count, setCount] = useState(0);

    const incrementar = () => {
        setCount(count + 1);
    };

    const decrementar = () => {
        setCount(count - 1);
    };

    return (
        <>
            <h2>Contador</h2>
            <div className="container">
                <h1>{count}</h1>
                <button onClick={decrementar}>-</button>
                <button onClick={incrementar}>+</button>
            </div>
        </>
    );
};

export default Count;
