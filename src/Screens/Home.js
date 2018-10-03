import React, { Component } from 'react';
import { Image,ImageBackground } from "react-native";
import { Container,Content,Header,Text,StyleProvider,Body,Left,Right,Button,Icon,Title,Card,CardItem } from "native-base";
import { Constants } from "expo";
import getTheme from "../../theme/components/index";
import material from "../../theme/variables/material";

import Headers from '../Components/Headers';
import CardWisata from '../Components/CardWisata';

// TODO
//     - Split Component

class Home extends Component {
    Page = () => {
        this.props.navigation.navigate('pageStack')
    } 
    render(){
        return (
            <StyleProvider style={getTheme(material)}>
                <Container style={{  backgroundColor:'#f2f4f7'}}>
                <Headers
                    title="Hello"
                    iconLeft="sort"
                    iconBody="notifications"
                    iconRight="search"
                    onPressLeft={() => alert("A")}
                    onPressBody={() => alert("B")}
                    onPressRight={() => alert("C")}/>
                <Content padder>
                    <Text>
                        Destinasi Wisata Favorit!
                    </Text>
                    <CardWisata
                        onPress={() => this.Page()}
                        source={{ uri: 'https://loremflickr.com/320/240/beach,sea?random=1' }}
                        nameplace="Pantai Tanjung Bira"
                        rating={5}>
                    </CardWisata>
                    <CardWisata
                        source={{ uri: 'https://loremflickr.com/320/240/beach,sea?random=2' }}
                        nameplace="Pantai Lemo-Lemo"
                        rating={3}>
                    </CardWisata>
                    <CardWisata
                        source={{ uri: 'https://loremflickr.com/320/240/beach,sea?random=3' }}
                        nameplace="Pantai Apparalang"
                        rating={0}>
                    </CardWisata>
                    <CardWisata
                        source={{ uri: 'https://loremflickr.com/320/240/beach,sea?random=4' }}
                        nameplace="Pantai Kasuso"
                        rating={2}>
                    </CardWisata>
                </Content>
            </Container>
            </StyleProvider>
        )
    }
}

export default Home;