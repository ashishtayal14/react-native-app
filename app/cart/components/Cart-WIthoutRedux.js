import React from "react";
import {View,Text,Button,ScrollView} from "react-native";
import CartList from "./CartList";
import CartSummary from "./CartSummary";
import CartItem from "./CartItem";
import * as actions from "../Actions";

export default class Cart extends React.Component{
    title = "Cart Instance Title";
    static navigationOptions = {
        title: 'Cart'
    }
    constructor(props){
        super(props);
        this.state = {
            items : [],
            amount : 0,
            flag:true
        }
    }
    componentDidMount(){
        //console.log("Coupon",this.props.navigation.state.params.coupons);
    }

    addItem(){
        let item = {
            id:Math.ceil(Math.random() *100000),
            name:"Product",
            price:Math.ceil(20 + Math.random() *100),
            qty:1
        }

        //BAD
        //Mutable List
        //this.state.items.push(item);
        //console.log(item.id,"added");

        //BAD
        //trigger render method
        //this.forceUpdate();

        //GOOD
        this.state.items = [...this.state.items,item];
        console.log(item.id,"added");

        //GOOD
        this.setState({
            items: this.state.items
        })

    }
    removeItem(id) {
        this.setState({items:this.state.items.filter(item => item.id != id)})
    }
        
    // updateItem(id, qty) {
    //     for(let item of this.state.items){
    //         if(item.id == id){
    //             item.qty = qty;
    //             break;
    //         }
    //     }
    //     this.setState({items:Object.create(this.state.items)})
    // }
    
    updateItem(id, qty) {
        console.log("update ", id, qty);
        let items = this.state.items.map ( item => {
            if (item.id != id)
                return item;
            
            return Object.assign ({}, item, {qty: qty})
        });

        this.setState({
            items: items
        });
    }

    refresh() {
        this.setState({
            flag: !this.state.flag
        });
    }
    //keyword for react
    //returns a view
    render(){
        console.log("cart render");
        let title = "Cart Local Title";    
        return (
            // React.createElement(View,null,
            //                     React.createElement(Text,null,"Hello World"))
            
            <View>
                <Text>Hello Worlds</Text>
                <Text>{title}</Text>
                <Text>{this.props.title}</Text>
                <Text>{this.title}</Text>
                <Button title="Add" onPress={()=>this.addItem()}/>
                <Button title="Refresh" onPress={()=>this.refresh()}/>
                <CartList items={this.state.items} 
                        onUpdate={(id, qty) => this.updateItem(id, qty)}
                        onRemove={(id) => this.removeItem(id)}/>
                <CartSummary amount={this.state.amount} total={this.state.items.length}/>   

            </View> 
            

        );
    }
}