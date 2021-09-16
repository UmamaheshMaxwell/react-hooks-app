import React, { useState } from 'react'

function UsePreviousState() {

    const initialState = 0;
    const [count, setCount] = useState(initialState)

    const incrementByFive = () => {
        for(var i =0; i<5; i++){
            setCount(prevState => prevState + 1)
        }
    }

    return (
        <React.Fragment>
            <div className="container">
                <p>Count is : {count}</p>
                <button className="btn btn-primary" onClick={() => setCount(initialState)}>Reset</button> &nbsp;&nbsp;
                <button className="btn btn-success" onClick={() => setCount(prevState => prevState + 1)}>Increment</button>&nbsp;&nbsp;
                <button className="btn btn-danger"  onClick={() => setCount(prevState => prevState - 1)}>Decrement</button>&nbsp;&nbsp;
                <button className="btn btn-warning" onClick={incrementByFive}>Increment by 5</button>
            </div>
        </React.Fragment>
    )
}

export default UsePreviousState
