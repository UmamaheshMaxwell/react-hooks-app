import React, { useState } from 'react'

function UsePreviousState() {

    const initialState = 0;
    const [count, setCount] = useState(initialState)

    return (
        <React.Fragment>
            <div className="container">
                <p>Count is : {count}</p>
                <button className="btn btn-primary" onClick={() => setCount(count+1)}>Reset</button>
                <button className="btn btn-success" onClick={() => setCount(count+1)}>Increment</button>
                <button className="btn btn-danger">Decrement</button>
            </div>
        </React.Fragment>
    )
}

export default UsePreviousState
