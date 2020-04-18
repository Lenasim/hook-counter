import React, { useState } from 'react';

function Counter() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <label>Set your start number:</label>
            <input
                id="count"
                name="count"
                type="number"
                value={count}
                onChange={(e) => setCount(parseInt(e.target.value))}
            />
            <p>Le compteur est  à : {count} </p>

            <div>
                <button onClick={() => setCount(count + 1)}>
                    +1
                </button>
                <button onClick={() => setCount(count - 1)}>
                    -1
                </button>
            </div>
        </div>
    );
}

export default Counter;
