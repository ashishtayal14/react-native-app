import {connect} from "react-redux";
import Cart from "../components/Cart";

import * as actions from "../Actions";
import {bindActionCreators} from "redux";
 
//called by container
//when? on every subscribe
//state => store.getState()
function mapStateToProps(state) {
    return {
        //propname: value
        items: state.cartItems
    }
}

//dispatch ==> store.dispatch
function mapDispatchToProps(dispatch) {
    return {
        //propName: function(){}
        // addItemToCart : function(item) {
        //     let action = actions.addItemToCart(item);
        //     dispatch(action);
        // },
        // removeItemFromCart : function(id){
        //     let action = actions.removeItemFromCart(id);
        //     dispatch(action);
        // },     
        // updateItemInCart :  function(id,qty){
        //     let action = actions.updateItemInCart(id,qty);
        //     dispatch(action);
        // } 
        addItemToCart : bindActionCreators(actions.addItemToCart,dispatch),
        actions: bindActionCreators(actions,dispatch)        
    }
}

let connectFn = connect(mapStateToProps,
                        mapDispatchToProps);

//Pure component
let CartContainerComponent = connectFn(Cart);

export default CartContainerComponent;