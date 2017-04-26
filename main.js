
import Expo from 'expo';
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
// import { View, Text } from 'react-native';
// import LoginForm from './src/components/LoginForm';
import reducers from './src/reducers';
import RouterComponent from './src/Router';
import firebaseConfig from './src/firebaseConfig';
/*firebase Config looks like this:
const config = {
        apiKey: '*',
        authDomain: '*',
        databaseURL: '*',
        projectId: *',
        storageBucket: '*',
        messagingSenderId: '*'
    };
    export default config;

*/

class App extends Component {
    componentWillMount() {
        firebase.initializeApp(firebaseConfig);
    }
    render() {
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
        return (
            <Provider store={store}>
                <RouterComponent />
            </Provider>
        );
    }
}


Expo.registerRootComponent(App);
