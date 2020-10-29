import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Homepage from './components/homepage/Homepage'
import UserDetail from './components/userdetail/UserDetails';
import './sass/main.scss';

function App() {
    const [users, setUsers] = useState([])

    useEffect(() => {
        console.log('effect')
        axios
            .get('https://jsonplaceholder.typicode.com/users')
            .then(res => {
                console.log('promise fulfilled')
                setUsers(res.data)
            })
    }, [])

    return (
        <BrowserRouter>
            <div className="App">
                <Switch>
                    <Route exact path='/'>
                        <Homepage users={users} />
                    </Route>
                    <Route exact path='/users/:id'>
                        <UserDetail users={users} />
                    </Route>
                </Switch>
            </div>
        </BrowserRouter>
    );
}

export default App;
