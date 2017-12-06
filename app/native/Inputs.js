import React, {Component} from "react";

import {View, Text, Button, Alert} from "react-native";

import {Picker, Switch, Slider, ActivityIndicator} from "react-native";
 
import {Platform} from "react-native";

export default class Inputs extends Component {


    static navigationOptions = {
        title: 'Inputs'
    }
    
    constructor(props) {
        super(props);

        this.state = {
            language: 'java',
            study: false,
            hours: 1,
            loading: true
        }
    }

    componentDidMount() {
        
    }
  

    render() {
        return (
            <View>
                <Text> Picked Lang: {this.state.language}</Text>

                <Picker
                    selectedValue={this.state.language}
                    onValueChange={(itemValue, itemIndex) => this.setState({language: itemValue})}>
                    <Picker.Item label="Java" value="java" />
                    <Picker.Item label="Objective-C" value="objc" />
                    <Picker.Item label="JavaScript" value="js" />
                </Picker>

                <Text> Study Mode: {this.state.study? 'ON': 'OFF'}</Text>

                <Switch 
                    value={this.state.study}
                    onValueChange={(value) => this.setState({study: value})}>

                </Switch>

                <Text> Hours: {this.state.hours}</Text>

                <Slider 
                    step = {1}
                    minimumValue={2}
                    maximumValue={18}
                    value={this.state.hours}
                    onValueChange={(value) => this.setState({hours: value})}
                    onSlidingComplete={ (value)=> Alert.alert(`Done ${value}`)}
                >

                </Slider>

                { this.state.loading &&  <ActivityIndicator /> }

                <Button title = {this.state.loading ? "Off":"On"}
                        onPress={() => this.setState({loading: !this.state.loading})}>
                </Button>

            </View>
        )
    }
}