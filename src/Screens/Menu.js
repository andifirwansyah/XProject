import React, { Component } from "react";
import { Text, Header, Container, Content, Card, CardItem, Thumbnail, Right, Left, Icon, Button, Body, Title, StyleProvider, Grid, Col, Row } from "native-base";
import getTheme from "../../theme/components/index";
import material from "../../theme/variables/material";
import { View } from "react-native";

class Menu extends Component {


    render() {
        return (
            <StyleProvider style={getTheme(material)}>
                <Container style={{ backgroundColor: "rgb(59, 134, 255)" }}>
                    <Header transparent style={{ paddingLeft: 10, paddingRight: 10, paddingTop: 20, paddingBottom: 5, height: 70 }}>
                        <Left style={{ flex: 1 }} >
                            <Button transparent>
                                <Icon style={{ color: "#fff", fontSize: 30 }} color="#fff" type="MaterialIcons" name='arrow-back' />
                            </Button>
                        </Left>
                    </Header>
                    <Content style={{marginTop: 30}} padder>
                        <Card transparent>
                            <CardItem style={{ backgroundColor: "rgb(59, 134, 255)" }} >
                                <Thumbnail large source={{ uri: 'https://loremflickr.com/320/240/person?random=1' }} />
                                <View style={{flex:1,flexDirection:"row",alignItems:"center",padding:20}} >
                                    <Text style={{flex:1,fontSize:30,color:"#fff"}} >Hello, Name</Text>
                                </View>
                            </CardItem>
                        </Card>
                        <Card transparent style={{flex:1,flexDirection:"column",alignItems:"center"}} >
                            <CardItem style={{ backgroundColor: "rgb(59, 134, 255)",flex:1 }}>
                                <Icon style={{ color: "#fff", fontSize: 35 }} color="#fff" type="MaterialIcons" name='home' />
                                <View style={{ flex: 1, flexDirection: "row", alignItems: "center", padding: 10 }} >
                                    <Text style={{ flex: 1, fontSize: 25, color: "#fff" }} >Home</Text>
                                </View>
                            </CardItem>
                            <CardItem style={{ backgroundColor: "rgb(59, 134, 255)", flex: 1 }}>
                                <Icon style={{  color: "#fff", fontSize: 35 }} color="#fff" type="MaterialIcons" name='person' />
                                <View style={{ flex: 1, flexDirection: "row", alignItems: "center", padding: 10 }} >
                                    <Text style={{ flex: 1, fontSize: 25, color: "#fff" }} >Profile</Text>
                                </View>
                            </CardItem>
                            <CardItem style={{ backgroundColor: "rgb(59, 134, 255)", flex: 1 }}>
                                <Icon style={{  color: "#fff", fontSize: 35 }} color="#fff" type="MaterialIcons" name='alarm' />
                                <View style={{ flex: 1, flexDirection: "row", alignItems: "center", padding: 10 }} >
                                    <Text style={{ flex: 1, fontSize: 25, color: "#fff" }} >Notifikasi</Text>
                                </View>
                            </CardItem>
                            <CardItem style={{ backgroundColor: "rgb(59, 134, 255)", flex: 1 }}>
                                <Icon style={{ color: "#fff", fontSize: 35 }} color="#fff" type="MaterialIcons" name='close' />
                                <View style={{ flex: 1, flexDirection: "row", alignItems: "center", padding: 10 }} >
                                    <Text style={{ flex: 1, fontSize: 25, color: "#fff" }} >Keluar</Text>
                                </View>
                            </CardItem>
                        </Card>
                    </Content>
                </Container>
            </StyleProvider>
        )
    }
}

export default Menu;