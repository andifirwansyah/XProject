import React, { Component } from 'react';
import { Image,ImageBackground } from "react-native";
import { Container,Content,Header,Text,StyleProvider,Body,Left,Right,Button,Icon,Title,Card,CardItem } from "native-base";
import { Constants } from "expo";
import getTheme from "../../theme/components/index";
import material from "../../theme/variables/material";

import CardWisata from '../Components/CardWisata';

// TODO
//     - Split Component

class Home extends Component {
    render(){
        return (
            <StyleProvider style={getTheme(material)}>
                <Container style={{  backgroundColor:'#f2f4f7'}}>
                <Header transparent style={{paddingLeft:10,paddingRight:10,paddingTop:20,paddingBottom:5,height:70}}>
                        <Left style={{flex : 1}} >
                            <Button transparent onPress={() => this.props.navigation.navigate("menu")} >
                                <Icon style={{color: "#000",fontSize:30}} color="#000" type="MaterialIcons" name='sort' />
                            </Button>
                        </Left>
                        <Body style={{flex : 1}} >
                            <Title style={{ color: "#000",fontSize:30}}>Hello</Title>
                        </Body>
                        <Right style={{flex : 1}} >
                            <Button transparent>
                                <Icon style={{color: "#000",fontSize:30}} type="MaterialIcons" color="#000" name='notifications' />
                            </Button>
                            <Button transparent>
                                <Icon style={{color: "#000",fontSize:30}} type="MaterialIcons" color="#000" name='search' />
                            </Button>
                        </Right>
                </Header>
                <Content padder>
                    <Text>
                        Destinasi Wisata Favorit!
                    </Text>
                    <CardWisata
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