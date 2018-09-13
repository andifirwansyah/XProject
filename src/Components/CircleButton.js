import React,{ Component } from "react";
import { TouchableHighlight,StyleSheet } from "react-native";

const defaultStyle = {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'stretch',
    alignSelf: 'stretch',
    backgroundColor: '#39579b',
    padding: 10,
    marginTop: 5,
    marginBottom: 5,
    borderRadius: 20
}

const CircleButton = (props) => {
    return (
        <TouchableHighlight
            onPress={props.onPress} style={{...defaultStyle,...props.style}} >
            {props.children}
        </TouchableHighlight>
    )
}

export default CircleButton;