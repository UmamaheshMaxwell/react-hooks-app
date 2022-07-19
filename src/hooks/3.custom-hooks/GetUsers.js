import React from 'react'
import {useFetch} from './UseUsers'
import {USER_API_URL} from "../../config/constants"

function GetUsers() {
    const users = useFetch(USER_API_URL)
  return (
    <div>
        <table className="table">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>City</th>
                    <th>Phone</th>
                    <th>Website</th>
                    <th>Company</th>
                </tr>
            </thead>
            <tbody>
                {
                    users.map(user => (
                        <tr key={user.id}>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.address.city}</td>
                            <td>{user.phone}</td>
                            <td>{user.website}</td>
                            <td>{user.company.name}</td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    </div>
  )
}

export default GetUsers