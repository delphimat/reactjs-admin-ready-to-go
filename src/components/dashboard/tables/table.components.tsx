import React, {useEffect, useMemo, useState} from "react";

import Table from 'react-bootstrap/Table';

import './table.styles.css';

interface IUser {
    id: number
    name: string,
    username: string
    email: string
    website: string
}

const TableDashboard = () => {

    const [users  , setUsers] = useState<IUser[]>([]);
    const [apiIsLoad , setApiIsLoad] = useState<boolean[]>([false]);

    // Similaire à componentDidMount et componentDidUpdate :
    useEffect(() => {
        console.log("call Use Effect");
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => {
                setUsers(users);
                setApiIsLoad([true]);
            })
        ;

        // setUsers();
    }, apiIsLoad);

    return (
        <div>
            <h2>Section title</h2>
            <div className="table-responsive">
                <Table striped bordered hover size="sm">
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Username</th>
                        <th>Email</th>
                        <th>website</th>
                    </tr>
                    </thead>
                    <tbody>
                    {users ? users.map((user, idx) => (
                        user && (<tr key={idx}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.username}</td>
                            <td>{user.email}</td>
                            <td>{user.website}</td>
                        </tr>)
                    )) : ''}
                    </tbody>
                </Table>
            </div>
        </div>
    )
}

export default TableDashboard;