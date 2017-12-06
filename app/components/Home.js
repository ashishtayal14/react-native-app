import React from "react";

import {View, Text, Button} from "react-native";

export default class Home extends React.Component {

    //todo:
    //set title navigation

    static navigationOptions = {
        title: 'Home'
    }

    openCart() {
        //open cart page
        let navigation = this.props.navigation;
        navigation.navigate('Cart',{coupon:30});
    }

    render() {
        return (
            <View>
                <Text>Home</Text>
                <Button onPress={()=> this.openCart()}
                        title="Cart">
                </Button>
            </View>
        )
    }

}