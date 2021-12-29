import React from 'react';
import { Routes , Route } from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import Register from './Register';

class AppRouter extends React.Component {
    render() {
        return (
            <>
                <Routes>
                    <Route exact path="/" element={<Home/>}></Route>
                    <Route exact path="/login" element={<Login/>}></Route>
                    <Route exact path="/register" element={<Register/>}></Route>
                </Routes>
            </>
        )
    }
}

export default AppRouter;