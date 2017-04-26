import React from 'react';
import { Text, View } from 'react-native';

//make a component
const Header = (props) => {
    const { textStyle, viewStyle } = styles;

    return (
        <View style={viewStyle}>
            <Text style={textStyle}>{props.headerText}</Text>
        </View>
    );
};


const styles = {
  viewStyle: {
    backgroundColor: '#F8F8F8',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    paddingTop: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative'
  },
  textStyle: {
    fontSize: 20
  }
};
//android styles
// const styles = {
//     viewStyle: {
//         backgroundColor: '#3F51B5',
//         justifyContent: 'center',
//         alignItems: 'center',
//         height: 60,
//         paddingTop: 15,
//         shadowColor: '#000',
//         shadowOffset: { width: 0, height: 2 },
//         shadowOpacity: 0.2,
//         elevation: 7,
//         position: 'relative'
//     },
//     textStyle: {
//         fontSize: 20,
//         color: '#FFFFFF'
//
//
//     }
// };
//make the componet available to othe parts of the App
export {Header};
