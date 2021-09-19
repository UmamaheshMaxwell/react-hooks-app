import axios from 'axios'
import React, { useState, useEffect } from 'react'

function UseEffectFetchData() {

    const [users, setUsers] = useState([])

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/users")
             .then(res => setUsers(res.data))
             .catch(error => console.log(error))
    },[])

    return (
        <div>
            <h2>Fetch API Data</h2>
            
                {
                    users.map(user => (
                         <ul key={user.id}>
                            <li>{user.name}</li>
                            <li>{user.email}</li>
                            <li>{user.phone}</li>
                            <li>{user.website}</li>
                         </ul>
                ))}
            
            <table className="table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Website</th>
                    </tr>
                </thead>
                <tbody>
                {
                    users.map(user => 
                        (
                            <tr key={user.id}>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.phone}</td>
                                <td>{user.website}</td>
                            </tr>
                        ))
                }
                </tbody>
            </table>
        </div>
    )
}

export default UseEffectFetchData
