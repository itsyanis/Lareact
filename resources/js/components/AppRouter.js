import React from 'react';
import { Routes , Route } from 'react-router-dom';
import Login from './Login';
import Navbar from './Navbar';

class AppRouter extends React.Component {
    render() {
        return (
            <Routes>
                <Route exact path="/" element={<Navbar/>}></Route>
                <Route exact path="/login" element={<Login/>}></Route>
            </Routes>
        )
    }
}

export default AppRouter;