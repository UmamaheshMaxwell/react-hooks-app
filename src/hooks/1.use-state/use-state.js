
import React, {useState} from 'react'

function UseStateOne() {

    const [count, setCount] = useState(0)
    const [furit, setFruit] = useState('banana')

    return (
        <React.Fragment>
        <div className="container">
            <p>You clicked me {count} times</p>
            <button className="btn btn-primary" onClick={() => setCount(count+1)}>Set Count</button>
        </div>
        <br />
        <div className="container">
            <p>Friut is : {furit}</p>
            <button className="btn btn-primary" onClick={() => setFruit('apple')}>Set Fruit</button>
        </div>
        </React.Fragment>
    )
}

export default UseStateOne
