import React, {Component} from "react";

import {View, Text, Button, Alert} from "react-native";
import {Linking, Platform} from "react-native";

export default class UrlLink extends Component {

    static navigationOptions = {
        title: 'Linking'
    }

    constructor(props) {
        super(props);

        this.state = {
            url: ''
        }
    }

    componentDidMount() {
        Linking.getInitialURL().then((url) => {
          if (url) {
            console.log('Initial url is: ' + url);
            alert.alert(url);
            this.setState({
                url
            })
          }
        }).catch(err => console.error('An error occurred', err));
    }

    openLink (url) {
        Linking.canOpenURL(url).then(supported => {
            if (!supported) {
              console.log('Can\'t handle url: ' + url);
              Alert.alert("Can't open link " + url);
            } else {
              return Linking.openURL(url);
            }
          }).catch(err => console.error('An error occurred', err));
    }

    openMap() {
        if (Platform.OS == 'android') {
            this.openLink('geo:37.484847,-122.148386')
        }

        if (Platform.OS == 'ios') {
            this.openLink('http://maps.apple.com/?ll=37.484847,-122.148386')
        }
    }

    render() {
        return (
            <View>
                <Text>{this.state.url}</Text>

                <Button onPress={()=> this.openLink('mailto:gs@nodesen.se')} 
                        title="Email">
                </Button>


                <Button onPress={()=> this.openLink('https://facebook.github.io/react-native/docs/linking.html')} 
                        title="React Website">
                </Button>


                <Button onPress={()=> this.openMap()} 
                        title="Map">
                </Button>
            </View>
        )
    }
}