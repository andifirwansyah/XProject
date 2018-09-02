import React, { Component } from 'react';

import { 
    StyleSheet, 
    Text,
    View, 
    Image,
    KeyboardAvoidingView,
    TouchableOpacity,
    AsyncStorage,
    TouchableHighlight,
  } from 'react-native';
  import { 
    Icon,
    Item,
    Input,
} from 'native-base';

import BackgroundImage from '../Components/BackgroundImage';


export default class LoginScreen extends Component{
    Home = () => {
        this.props.navigation.navigate('Home')
    }
    render(){
        return(
    <BackgroundImage>
      <KeyboardAvoidingView  style={styles.wrapper}>
        <View style={styles.container}>
          {/* <Text style={styles.header}>App</Text> */}
            <Image source={require('../img/explore-bulukumba.png')} style={styles.headerImage}/>
            <Item regular style={styles.textInput}>
              <Icon active name='ios-contact' style={{color: 'rgb(224, 224, 224)'}}/>
              <Input 
                placeholder='Username' 
                placeholderTextColor='rgb(224, 224, 224)' 
                style={{color: '#000',fontWeight: '400'}}/>
            </Item>
            <Item regular style={styles.textInput}>
              <Icon active name='ios-lock' style={{color: 'rgb(224, 224, 224)'}}/>
              <Input 
                placeholder='Password' 
                placeholderTextColor='rgb(224, 224, 224)' 
                style={{color: '#000',fontWeight: '400'}}
                secureTextEntry={true}/>
            </Item>
            <TouchableOpacity
              style={styles.btn}
              onPress={() => this.Home()}>
              <Text style={{color: '#fff'}}>Login</Text>
            </TouchableOpacity>

            <TouchableHighlight
              onPress={() => alert("Hello")} style={styles.btnFacebook}
              underlayColor='#042417'>
              <View
                style={styles.btnContainer}>
                <Icon
                  name='logo-facebook'
                  style={styles.btnIcon}/>
                <Text style={styles.btnText}>Continue with Facebook</Text>
              </View>
            </TouchableHighlight>
            <TouchableHighlight
              onPress={() => alert("Hello")} style={styles.btnInstagram}
              underlayColor='#042417'>
              <View
                style={styles.btnContainer}>
                <Icon
                  name='logo-instagram'
                  style={styles.btnIcon}/>
                <Text style={styles.btnText}>Continue with Instagram</Text>
              </View>
            </TouchableHighlight>
            
            <View>
              <Text style={{color: '#fff',fontSize: 16,marginTop: 20}} onPress={() => alert('Clicked!')}>Forgot account?</Text>
            </View>
            

        </View>
      </KeyboardAvoidingView>
    </BackgroundImage>
        );
    }
}

const styles = StyleSheet.create({
    wrapper: {
      flex: 1,
    },
    container: {
      flex: 1,
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      // backgroundColor: '#4286f4',
      paddingLeft: 30,
      paddingRight: 30
    },
    header: {
      fontSize: 44,
      marginBottom: 50,
      color: '#4297CC',
      fontWeight: 'bold',
    },
    headerImage:{
      width: 200,
      height: 60,
      marginBottom: 40
    },
    textInput: {
      alignSelf: 'stretch',
      // padding: 16,
      marginBottom: 20,
      backgroundColor: 'rgba(224, 224, 224, 0.4)',
      // width: 320,
      borderColor: 'transparent',
    },
    btn: {
      alignSelf: 'stretch',
      backgroundColor: '#21A7E2',
      padding: 15,
      alignItems: 'center',
      marginBottom: 30
    },
    btn1: {
      alignSelf: 'stretch',
      backgroundColor: '#23C7B8',
      padding: 20,
      alignItems: 'center'
    },
  
    btnFacebook: {
      // flex: 1,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'stretch',
      alignSelf: 'stretch',
      backgroundColor: '#39579b',
      padding: 10,
      marginTop: 5,
      marginBottom: 5,
    },
    btnContainer: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'stretch',
      alignSelf: 'stretch',
      borderRadius: 10,
    },
    btnIcon: {
      height: 25,
      width: 25,
      color: '#fff'
    },
    btnText: {
      fontSize: 15,
      color: '#FAFAFA',
      marginLeft: 10,
      marginTop: 5,
    },
  
    btnInstagram: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'stretch',
      alignSelf: 'stretch',
      backgroundColor: '#d62e79',
      padding: 10,
      marginTop: 5,
      marginBottom: 5,
    }
  });
  