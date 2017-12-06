import React, {Component} from "react";

import {View, Text, Button, Alert} from "react-native";
import {AsyncStorage, Platform} from "react-native";

export default class Storage extends Component {

    static navigationOptions = {
        title: 'Storage'
    }

    constructor(props) {
        super(props);

        this.state = {
            count: 0
        }
    }

    componentDidMount() {
         
            AsyncStorage.getItem('count')
            .then ( value => {
                if (value !== null){
                    // We have data!!
                    console.log(value);
                    this.setState({
                        count: parseInt(value) || 0
                    });
                  }
            })
            .catch (error => {
                Alert.alert("Error getting  count");
            })
    }

    increment() {
        let value = this.state.count + 1;
 
            AsyncStorage.setItem('count', value.toString())
            .then ( () => {
                this.setState ({
                    count: value
                });
            })
            .catch (error => {
                Alert.alert("Error setting count");
            });
    }
 
    render() {
        return (
            <View>
                <Text>Count is {this.state.count}</Text>

                <Button onPress={()=> this.increment()} 
                        title="Increment">
                </Button>

 
            </View>
        )
    }
}