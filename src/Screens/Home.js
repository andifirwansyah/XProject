import React, { Component } from 'react';
import { Image,ImageBackground } from "react-native";
import { Container,Content,Header,Text,StyleProvider,Body,Left,Right,Button,Icon,Title,Card,CardItem } from "native-base";
import { Constants } from "expo";
import getTheme from "../../theme/components/index";
import material from "../../theme/variables/material";



// TODO
//     - Split Component

class Home extends Component {
    render(){
        return (
            <StyleProvider style={getTheme(material)}>
                <Container style={{  backgroundColor:'#f2f4f7'}}>
                <Header transparent style={{paddingLeft:10,paddingRight:10,paddingTop:20,paddingBottom:5,height:70}}>
                        <Left style={{flex : 1}} >
                            <Button transparent>
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
                    {/* <Body> */}
                        <Text>
                            Destinasi Wisata Favorit!
                        </Text>
                        {/* <Right /> */}
                    {/* </Body> */}
                        <Card borderRadius={15} style={{ borderRadius: 15 }} transparent>
                            <CardItem cardBody style={{ borderRadius: 15 }}>
                                <ImageBackground imageStyle={{ borderRadius: 15 }} source={{ uri: 'https://picsum.photos/500/600?image=1061' }} style={{ borderRadius: 15, height: 200, width: null, flex: 1 }}>
                                    <Body style={{ padding: 15 }}  >
                                        <Text style={{ color: "#fff", fontSize: 20 }} >Nama Tempat</Text>
                                        <Text>
                                            <Icon style={{ color: "#fff", fontSize: 20 }} name="star" />
                                            <Icon style={{ color: "#fff", fontSize: 20 }} name="star" />
                                            <Icon style={{ color: "#fff", fontSize: 20 }} name="star" />
                                            <Icon style={{ color: "#fff", fontSize: 20 }} name="star" />
                                        </Text>
                                    </Body>
                                </ImageBackground>
                            </CardItem>
                        </Card>
                        <Card borderRadius={15} style={{ borderRadius: 15 }} transparent>
                            <CardItem cardBody style={{ borderRadius: 15 }}>
                                <ImageBackground imageStyle={{ borderRadius: 15 }} source={{ uri: 'https://picsum.photos/500/600?image=1061' }} style={{ borderRadius: 15, height: 200, width: null, flex: 1 }}>
                                    <Body style={{ padding: 15 }}  >
                                        <Text style={{ color: "#fff", fontSize: 20 }} >Nama Tempat</Text>
                                        <Text>
                                            <Icon style={{ color: "#fff", fontSize: 20 }} name="star" />
                                            <Icon style={{ color: "#fff", fontSize: 20 }} name="star" />
                                            <Icon style={{ color: "#fff", fontSize: 20 }} name="star" />
                                            <Icon style={{ color: "#fff", fontSize: 20 }} name="star" />
                                        </Text>
                                    </Body>
                                </ImageBackground>
                            </CardItem>
                        </Card>
                        <Card borderRadius={15} style={{ borderRadius: 15 }} transparent>
                            <CardItem cardBody style={{ borderRadius: 15 }}>
                                <ImageBackground imageStyle={{ borderRadius: 15 }} source={{ uri: 'https://picsum.photos/500/600?image=1061' }} style={{ borderRadius: 15, height: 200, width: null, flex: 1 }}>
                                    <Body style={{ padding: 15 }}  >
                                        <Text style={{ color: "#fff", fontSize: 20 }} >Nama Tempat</Text>
                                        <Text>
                                            <Icon style={{ color: "#fff", fontSize: 20 }} name="star" />
                                            <Icon style={{ color: "#fff", fontSize: 20 }} name="star" />
                                            <Icon style={{ color: "#fff", fontSize: 20 }} name="star" />
                                            <Icon style={{ color: "#fff", fontSize: 20 }} name="star" />
                                        </Text>
                                    </Body>
                                </ImageBackground>
                            </CardItem>
                        </Card>
                        <Card borderRadius={15} style={{ borderRadius: 15 }} transparent>
                            <CardItem cardBody style={{ borderRadius: 15 }}>
                                <ImageBackground imageStyle={{ borderRadius: 15 }} source={{ uri: 'https://picsum.photos/500/600?image=1061' }} style={{ borderRadius: 15, height: 200, width: null, flex: 1 }}>
                                    <Body style={{ padding: 15 }}  >
                                        <Text style={{ color: "#fff", fontSize: 20 }} >Nama Tempat</Text>
                                        <Text>
                                            <Icon style={{ color: "#fff", fontSize: 20 }} name="star" />
                                            <Icon style={{ color: "#fff", fontSize: 20 }} name="star" />
                                            <Icon style={{ color: "#fff", fontSize: 20 }} name="star" />
                                            <Icon style={{ color: "#fff", fontSize: 20 }} name="star" />
                                        </Text>
                                    </Body>
                                </ImageBackground>
                            </CardItem>
                        </Card>
                </Content>
            </Container>
            </StyleProvider>
        )
    }
}

export default Home;