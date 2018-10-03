import React, { Component } from 'react';
import { Image, ImageBackground } from 'react-native';
import {
    StyleProvider,
    Container,
    Content,
    Text,
    Icon,
    Card,
    CardItem,
    Body,
    Left,
    Right,
    DeckSwiper,
    View,
    Button
} from 'native-base';
import { Constants } from "expo";
import getTheme from "../../theme/components/index";
import material from "../../theme/variables/material";

import Headers from '../Components/Headers';

// TODO
//  - Image Swiper
//  - Split Component
//  - Area Terdekat 
class Page extends Component{
    Home = () => {
        this.props.navigation.navigate('homeStack')
    }
    render(){
        return(
            <StyleProvider style={getTheme(material)}>
                <Container style={{  backgroundColor:'#f2f4f7'}}>
                    <Headers
                        onPressLeft={() => this.Home()}
                        title="Pantai Bira"
                        iconLeft="arrow-back"
                        styleTitle={{fontSize: 20}}
                        />
                    
                    <Content padder>
                        <Card borderRadius={15} style={{ borderRadius: 15 }} transparent>
                            <CardItem cardBody style={{ borderRadius: 15 }}>
                                <ImageBackground imageStyle={{ borderRadius: 15 }} source={{ uri: 'https://picsum.photos/500/600?image=1061' }} style={{ borderRadius: 15, height: 200, width: null, flex: 1 }} >
                                    
                                </ImageBackground>                            
                            </CardItem>
                            <CardItem style={{backgroundColor: 'transparent'}}>
                                {/* <Left/> */}
                                <Body style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                                    <Text>
                                        <Icon style={{ color: "#000", fontSize: 23 }} name="star" />
                                        <Icon style={{ color: "#000", fontSize: 23 }} name="star" />
                                        <Icon style={{ color: "#000", fontSize: 23 }} name="star" />
                                        <Icon style={{ color: "#000", fontSize: 23 }} name="star" />
                                    </Text>
                                    <Text style={{textAlign: 'center'}}>
                                        Pantai Tanjung Bira adalah pantai yang terletak di daerah ujung paling selatan Provinsi Sulawesi Selatan, tepatnya di Kecamatan Bonto Bahari, Kabupaten Bulukumba. Tanjung Bira merupakan pantai pasir putih yang terkenal di Sulawesi Selatan.
                                    </Text>
                                </Body>
                                {/* <Right/> */}
                            </CardItem>
                            <CardItem style={{backgroundColor: 'transparent',flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                                <Icon style={{color: '#4286f4'}} name="location-on" type="MaterialIcons" />
                                <Text>Lokasi Gmaps</Text>

                                {/* ... Area Terdekat Here ... */}
                                
                            </CardItem>
                        </Card>
                    </Content>

                </Container>
            </StyleProvider>
        )
    }
}

export default Page;