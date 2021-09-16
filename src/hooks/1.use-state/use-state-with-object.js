import React, { useState } from 'react'

function UseStateWithObject() {
    const [name, setName] = useState({firstName: "", lastName: ""})

    return (
        <React.Fragment>
            <div className="container">
                <h2>Display Full Name</h2>
                <input type="text" 
                       className="form-control w-50" 
                       value={name.firstName}
                       onChange={(e) => setName({...name, firstName: e.target.value })}
                /> <br/>
                <input type="text" 
                       className="form-control w-50" 
                       value={name.lastName}
                       onChange={(e) => setName({...name, lastName: e.target.value})}
                />
                <h2>Full Name is : {name.firstName + " " + name.lastName}</h2>
                <p>{JSON.stringify(name)}</p>
            </div>
        </React.Fragment>
    )
}

export default UseStateWithObject
