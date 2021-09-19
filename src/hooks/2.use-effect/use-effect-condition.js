import React, {useState, useEffect} from 'react'

function UseEffectCondition() {

    const [count, setCount] = useState(0)
    const [name, setName] = useState('')

    useEffect(() => {
        console.log(`useEffect - updating document title`)
        document.title = `You clicked ${count} times`
    })

    return (
        <div>
            <h2>Using useEffect</h2>
            <p>You clicked {count} times</p>
            <input type="text" 
                   value={name} 
                   onChange={(e) => setName(e.target.value)} 
            />
            <button className="btn btn-primary" 
                    onClick={() => setCount(count+1)}
            >Add Count</button>
        </div>
    )
}

export default UseEffectCondition
