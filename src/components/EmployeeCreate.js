import React, { Component } from 'react';
import { connect } from 'react-redux';
 import { Picker, Text } from 'react-native';
import { Card, CardSection, Input, Button } from './common';
import * as actionCreators from '../actions';


class EmployeeCreate extends Component {

    onButtonPress() {
        const { name, phone, shift, employeeCreate } = this.props;
        employeeCreate({ name, phone, shift: shift || 'monday' });
    }
    render() {
        return (
<Card>
    <CardSection>
        <Input
            label="Name"
            placeholder="Jane"
            value={this.props.name}
            onChangeText={value => this.props.employeeUpdate({ prop: 'name', value })}
        />
    </CardSection>

    <CardSection>
        <Input
            label="Phone"
            placeholder="555-555-5555"
            value={this.props.phone}
            onChangeText={value => this.props.employeeUpdate({ prop: 'phone', value })}
        />
    </CardSection>

    <CardSection style={{ flexDirection: 'column' }}>
        <Text style={styles.pickerTextStyle}>Shift</Text>
        <Picker
            // style={{ flex: 1 }}
            selectedValue={this.props.shift}
            onValueChange={value => this.props.employeeUpdate({ prop: 'shift', value })}
        >
            <Picker.Item label="Monday" value="Monday" />
            <Picker.Item label="Tuesday" value="Tuesday" />
            <Picker.Item label="Wendesday" value="Wendesday" />
            <Picker.Item label="Thurday" value="Thurday" />
            <Picker.Item label="Friday" value="Friday" />
            <Picker.Item label="Saturday" value="Saturday" />
            <Picker.Item label="Sunday" value="Sunday" />

        </Picker>
    </CardSection>

    <CardSection>
        <Button onPress={this.onButtonPress.bind(this)}>Create</Button>
    </CardSection>
</Card>

        );
    }
}
const styles = {
    pickerTextStyle: {
        fontSize: 18,
        paddingLeft: 20
    }
};
const mapStateToProps = ({ employeeForm: { name, phone, shift } }) => {
    return { name, phone, shift };
};
export default connect(mapStateToProps, actionCreators)(EmployeeCreate);
