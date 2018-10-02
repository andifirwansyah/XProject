import React, { Component } from 'react';
import { Image, ImageBackground, StyleSheet } from 'react-native';
import {
    Card,
    CardItem,
    Body,
    Text,
    Icon
} from 'native-base';

// To Do : Fix Warning {"Each child in an array should have a unique "key" prop."}

const styles = StyleSheet.create({
    starsStyle:{
        width: 17,
        height: 17,
    }
});
const CardWisata = (props) => {
    // const rating = 0;
    let stars  = [];

    for (i = 1; i <= 5; i++) {

        let star = require('../img/star-filled.png');
        if (i > props.rating) {
            star = require('../img/star-unfilled.png');
        }
        stars.push((<Image style={styles.starsStyle} source={star}/>))
    }
    return(
        <Card borderRadius={15} style={{ borderRadius: 15 }} transparent>
            <CardItem cardBody style={{ borderRadius: 15 }}>
                <ImageBackground imageStyle={{ borderRadius: 15 }} source={props.source} style={{ borderRadius: 15, height: 200, width: null, flex: 1 }}>
                    <Body style={{ padding: 15 }}  >
                        <Text style={{ color: "#fff", fontSize: 20 }} >{props.nameplace}</Text>
                        <Text style={{paddingTop:5}} rating={props.rating}>
                            { stars }
                        </Text>
                    </Body>
                </ImageBackground>
            </CardItem>
        </Card>
    );
}
export default CardWisata;