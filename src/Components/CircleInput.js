import React, { Component } from 'react';
import {
    Icon,
    Item,
    Input,
} from 'native-base';

const defaultStyle = {
    alignSelf: 'stretch',
    // padding: 16,
    marginBottom: 20,
    backgroundColor: 'rgba(224, 224, 224, 0.4)',
    // width: 320,
    borderColor: 'transparent',
    borderRadius: 20
}

const CircleInput = (props) => {
    return (
        <Item regular style={{...defaultStyle,...props.style}}>
            <Icon active name={props.icon} style={{ color: 'rgb(224, 224, 224)' }} />
            <Input
                placeholder={props.placeholder}
                onChangeText={props.onChangeText}
                value={props.value}
                secureTextEntry={props.secureTextEntry}
                placeholderTextColor='rgb(224, 224, 224)'
                style={{ color: '#000', fontWeight: '400' }} />
        </Item>
    )
}

export default CircleInput;