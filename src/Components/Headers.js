import React, { Component } from 'react';

import {
    Header,
    Left,
    Button,
    Icon,
    Body,
    Title,
    Right
} from 'native-base';

const Headers = (props) => {
    return(
        <Header transparent style={{ ...defaultHeaderStyle,...props.style }}>
            <Left style={{ flex: 1 }} >
                <Button transparent>
                    <Icon style={{...defaultIconStyle,...props.style}} color="#000" type="MaterialIcons" name={props.iconLeft} onPress={props.onPressLeft} />
                </Button>
            </Left>
            <Body style={{ flex: 1 }} >
                <Title style={{...defaultTitleStyle,...props.styleTitle}}>{props.title}</Title>
            </Body>
            <Right style={{ flex: 1 }} >
                <Button transparent>
                    <Icon style={{...defaultIconStyle,...props.style}} type="MaterialIcons" color="#000" name={props.iconBody} onPress={props.onPressBody} />
                </Button>
                <Button transparent>
                    <Icon style={{...defaultIconStyle,...props.style}} type="MaterialIcons" color="#000" name={props.iconRight} onPress={props.onPressRight} />
                </Button>
            </Right>
        </Header>
    )
}

const defaultHeaderStyle = {
    paddingLeft: 10, 
    paddingRight: 10, 
    paddingTop: 20, 
    paddingBottom: 5, 
    height: 70
}
const defaultTitleStyle = {
    color: "#000",
    fontSize: 30
}
const defaultIconStyle = {
    color: "#000", 
    fontSize: 30
}

export default Headers;