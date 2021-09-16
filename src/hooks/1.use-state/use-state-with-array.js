import React, { useState } from 'react'

function UseStateWithArray() {

    const [items, setItems] = useState([])

    const addNumber = () => {
        setItems([
            ...items,
            {
                id: items.length,
                value: Math.floor(Math.random() * 10) + 1
            }
        ])
    }

    return (
        <div>
            <h2>Add Items to Array</h2>
            <button className="btn btn-primary"
                    onClick={addNumber}
            >Add Number</button>
            <ul>
               {
                    items.map(item => <li key={item.id}>{item.value}</li>)
               }
            </ul>
        </div>
    )
}

export default UseStateWithArray
