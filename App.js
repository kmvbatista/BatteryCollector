
import React from 'react';
import Routes from './src/routes'
import { StatusBar, View } from 'react-native'
const App = () => (
    <>
        <StatusBar barStyle='light-content' backgroundColor="rgba(21, 219, 10, 1)"></StatusBar>
    <View style={{flex: 1, backgroundColor: "rgba(21, 219, 10, 1)"}}>
        <Routes></Routes>
    </View>
    </>
);

export default App;
