import React from "react";
import {View,Text} from "react-native";
import PropTypes from "prop-types";

export default function CartSummary({amount,total}){   
    console.log("cartsummary render");
    return (
        <View>
            <Text>Amount {amount} </Text>
            <Text>Total {total} </Text>
        </View>
    )
}

CartSummary.propTypes = {
    amount : PropTypes.number
}