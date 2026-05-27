import React, { useState } from 'react'

function Debugging() {
    const [count, setCount] = useState(0);

    const handleClick = () => {
debugger;
        setCount(count + 1);
        setCount(count + 1);

        console.log("Count:", count);
    }

    return (
        <div>
            <h2>Count: {count}</h2>
            <button onClick={handleClick}>Click me</button>
        </div>
    )
}

export default Debugging