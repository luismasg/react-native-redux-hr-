import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';
import EmployeeCreate from './components/EmployeeCreate';
// import Valio from './components/Valio';

const RouterComponent = () => {
    return (
        <Router sceneStyle={{ paddingTop: 75 }}>
            <Scene key="auth" >
                <Scene key="login" component={LoginForm} title='Please Login' />
            </Scene>

            <Scene key='main'>
                <Scene
                    key='employeelist'
                    component={EmployeeList}
                    title='Employee List'
                    rightTitle="Add"
                    onRight={() => { Actions.employeeCreate(); }}
                    initial
                />
                <Scene
                    key='employeeCreate'
                    title="Create Employee"
                    component={EmployeeCreate}
                />


            </Scene>

        </Router>


    );
};
export default RouterComponent;
