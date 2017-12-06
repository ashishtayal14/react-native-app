import React from "react";

import {View, Text, Button, StyleSheet} from "react-native";

import CartList from "./CartList";
import CartSummary from "./CartSummary";

import * as actions from "../Actions";

import store from "../../Store";

export default class Cart extends React.Component {


    static navigationOptions = {
        title: 'Cart'
    }


    constructor(props) {
        super(props);
        console.log("cart cons ", props);

        this.state = {
            items: [],
            amount: 0,
            flag: true
        }
    }

    componentDidMount() {
      console.log("Coupon ", this.props.navigation.state.params.coupon);
      store.subscribe(() => {
          this.forceUpdate();
      })
    }

    addItem() {

        let id = Math.ceil(Math.random() * 100000);

        let item = {
            id: id,
            name: 'Product ' + id,
            price: Math.ceil(20 + Math.random() * 100),
            qty: 1
        }

        //BAD
        //Mutable list
        //this.state.items.push(item);

        console.log(item.id, " added");

        //BAD
        //trigger render method
        //this.forceUpdate();

        //GOOD

        //triggers render
        // this.setState({
        //     items: [...this.state.items, item]
        // });

        let action = actions.addItemToCart(item);
        //{type: 'ADD_ITEMT_CART', payload: {item: {name: }}

        store.dispatch(action);

    }

    removeItem(id) {
        // this.setState({
        //     items: this.state.items.filter ( item => item.id != id)
        // })

        store.dispatch(actions.removeItemFromCart(id));
    }

    updateItem(id, qty) {
        // console.log("update ", id, qty);
        // let items = this.state.items.map ( item => {
        //     if (item.id != id)
        //         return item;
            
        //     return Object.assign ({}, item, {qty: qty})
        // });

        // this.setState({
        //     items: items
        // });

        store.dispatch(actions.updateItemInCart(id, qty));

    }

    refresh() {
        this.setState({
            flag: !this.state.flag
        });
    }

    //keyword for react
    //returns a view
    //returns a virtual dom
    render() {

        console.log("cart render");
        //single reducer => [{id:1}]
        //let items = store.getState();
        //multiple reducer 
        let state = store.getState();        
        //state => {
            //cartItems: {}
            //auth : {}
        //}
        //this.props.title  = "junk";
         
        return (
                <View style={styles.container}>
                    <Text>{this.props.title}</Text>

                    <Button title="Add"
                             onPress={() => this.addItem()}
                    >
                    
                    </Button>

                    <Button title="Refresh"
                             onPress={() => this.refresh()}
                    >
                    
                    </Button>

                    <CartList items={items}
                    
                              onUpdate={(id, qty) => this.updateItem(id, qty)}
                              onRemove={(id) => this.removeItem(id)}
                    
                     />

                    <CartSummary amount={this.state.amount}
                                 total = {this.state.items.length}
                     />

                </View>
        )
    }

}

Cart.defaultProps = {
    title  : "Cart"
}



const styles = StyleSheet.create({
    container: {
      flex: 1,
     
    },
  });