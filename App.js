
import React from 'react';
import Routes from './src/routes'
import Login from './src/Pages/Login'
import { StatusBar } from 'react-native'

const App = () => (
    <>
        <StatusBar barStyle='light-content' backgroundColor="rgba(21, 219, 10, 1)"></StatusBar>
        <Routes></Routes>
    </>
);

export default App;
