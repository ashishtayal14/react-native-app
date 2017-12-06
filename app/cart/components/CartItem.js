import React, {Component} from "react";

import {View, Text, TextInput, Button, StyleSheet,Alert} from "react-native";

export default class CartItem extends Component {
    //creation: stage 1
    //called once
    constructor(props) {
        super(props);
        console.log("cart item created", props.item.id);

        //update qty on creation cycle
        this.state = {
            qty: props.item.qty
        }
    }

    componentWillReceiveProps(nextProps) {
        //update qty on update cycle
        this.setState({
            qty: nextProps.item.qty
        });
    }

    //creation : stage 2
    //View is not ready
    //called once
    componentWillMount() {

    }

    handleChange(ctrl) {

    }

    //render a view: stage 3
    //return a view
    //called multiple times
    //called once during creation
    render() {
        let {item} = this.props;
        
        console.log("CartItem render ", item.id);

        return (
            <View style={{ backgroundColor: 'powderblue'}}>
                <Text> {item.name} </Text>
                <TextInput style={[styles.inputContainer, styles.input]} 
                          value={this.state.qty.toString()}
                          onChangeText={ (text) => this.setState({
                              qty: parseInt(text)
                          }) }
                          >
                </TextInput>
                <Text > Qty   :  {item.qty}</Text>
                <Text > Price :  {item.price}</Text>
                <Text > Total :  {item.price * item.qty}</Text>
                <Button title="Update" 
                        onPress={() => this.props.onUpdate(item.id, this.state.qty)} >
                </Button>

                <Button title="Remove" 
                        onPress={ () => this.props.onRemove(item.id)}>
                </Button>
            </View>
        )
    }

    //creation: stage 4
    //called once
    //called after view ready
    componentDidMount() {

    }

    //destruction stage: 1
    //called once
    componentWillUnmount() {
        console.log("cart item unmount ", this.props.item.id);
    }
}

const styles = StyleSheet.create({
    inputContainer: {
        borderLeftWidth: 4,
        borderRightWidth: 4,
        height: 70
      },
      input: {
        height: 70,
        backgroundColor: '#ffffff',
        paddingLeft: 15,
        paddingRight: 15
      }
});