import React from "react";
import {View,Text,ScrollView,FlatList} from "react-native";
import CartItem from "./CartItem";

export default class CartList extends React.Component{
    constructor(props){
        super(props);
        this._renderItem = this._renderItem.bind(this);
        this._keyExtractor = this._keyExtractor.bind(this);
    }
    componentWillReceiveProps(nextProps){
        console.log("cart list receive next",nextProps.items.length);
        console.log("cart list receive current",this.props.items.length);
    }
    _renderItem({item}) {
        console.log("render item");     
        console.log(`props ${this.props}`);           
        return (            
            <CartItem item={item} 
                        onRemove={this.props.onRemove}
                        onUpdate={this.props.onUpdate}>
            </CartItem>
        )
    }

    _keyExtractor (item, index) {
        console.log("key extract")
        return item.id;
    }
    //Called when
    //parent render() is called
    //this.setState() is called
    shouldComponentUpdate(nextProps,nextState){
        console.log("cartList shouldComponentUpdate")

        //Shalow Comparison
        if(nextProps.items !== this.props.items){
            console.log("cartList update");
            return true; // calls render
        }
        return false; // do not call render
    }
    render(){
        console.log("cartlist render");
        let items = this.props.items;
        return (
            <View>
                <Text>Cart List</Text>
                <FlatList 
                data={items}
                renderItem={this._renderItem}
                keyExtractor={this._keyExtractor}
                
                >

                </FlatList> 

                {/* <ScrollView>

                    {
                        items.map ( item => (
                            <CartItem item={item} key={item.id} >
                            </CartItem>
                        ))
                    }

                </ScrollView> */}
            </View>
        );
    }
}
