import React, { Component } from 'react';

import {
    View,
    Image,
    StyleSheet,
    Text,
    ImageBackground
} from 'react-native';
// const remote = 'https://images.pexels.com/photos/697244/pexels-photo-697244.jpeg';

export default class BackgroundImage extends Component{
    render() {
        return(
            <ImageBackground source={require('../img/check.jpg')} style={styles.backgroundImage}>
                {this.props.children}
            </ImageBackground>
        );
    }
}
const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        height: null,
        width: null,
        // resizeMode: 'cover'
    }
})