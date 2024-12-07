
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserManagement = () => {
    const [users, setUsers] = useState([]);
    const [name, setName] = useState('');

    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = async () => {
        try {
            const response = await axios.get('http://localhost:4000/api/users');
            setUsers(response.data);
        } catch (error) {
            console.error('Error fetching users:', error);
        }
    };

    const createUser = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:4000/api/users', { name });
            fetchUsers();
            setName('');
        } catch (error) {
            console.error('Error creating user:', error);
        }
    };

    return (
        <div>
            <h1>User Management</h1>
            <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter name"
            />
            <button onClick={createUser}>Create User</button>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>{user.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default UserManagement;
