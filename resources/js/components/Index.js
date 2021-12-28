import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";
import AppRouter from './AppRouter';
import Navbar from './Navbar';

function Index() {
    return (
        <>
        <Router>
            <AppRouter/>
        </Router>
        </>
    );
}

export default Index;

if (document.getElementById('root')) {
    ReactDOM.render(<Index />, document.getElementById('root'));
}
