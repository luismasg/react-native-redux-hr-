import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text } from 'react-native';
import { Card, CardSection, Button, Input, Spinner } from './common';
import * as actions from '../actions';

class LoginForm extends Component {
    componentDidMount() {
           this.props.loginUser({ email: 'luis@gmail.com', password: '123456' });
            /*delete this to test loginForm, im skipping it*/
            console.log('auto login in loginForm.js ');
    }

    onEmailChange = (text) => this.props.emailChange(text);
    onPasswordChange = (text) => this.props.passwordChanged(text);

    onButtonPress() {
        const { email, password } = this.props;
        this.props.loginUser({ email, password });
    }
    renderButton() {
        if (this.props.loading) {
            return <Spinner size='large' />;
        }
        return (
            <Button onPress={this.onButtonPress.bind(this)}>
                Login
            </Button>
        );
    }
    render() {
        return (
            <Card>
                <CardSection>
                    <Input
                        lable="email"
                        placeholder="email@gmail.com"
                        onChangeText={this.onEmailChange.bind(this)}
                        value={this.props.email}
                    />
                </CardSection>
                {/* <ActivityIndicator /> */}
                <CardSection>
                    <Input
                        secureTextEntry
                        lable="Password"
                        placeholder="password"
                        onChangeText={this.onPasswordChange.bind(this)}
                        value={this.props.password}
                    />
                </CardSection>
                <Text style={styles.errorTextStyle}>{this.props.error}</Text>
                <CardSection>
                    {this.renderButton()}
                </CardSection>
            </Card>
        );
    }
}
const styles = {
    errorTextStyle: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'
    }
};
const mapStateToProps = ({ auth: { email, password, error, loading } }) => {
    return { email, password, error, loading };
};
export default connect(mapStateToProps, actions)(LoginForm);
