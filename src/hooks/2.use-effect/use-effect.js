import React, {useState, useEffect} from 'react'

function UseEffect() {

    const [count, setCount] = useState(0)

    useEffect(() => {
        document.title = `You clicked ${count} times`
    })

    return (
        <div>
            <h2>Using useEffect</h2>
            <p>You clicked {count} times</p>
            <button className="btn btn-primary" 
                    onClick={() => setCount(count+1)}
            >Add Count</button>
        </div>
    )
}

export default UseEffect
