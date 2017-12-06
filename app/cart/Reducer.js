import * as ActionTypes from "./ActionTypes";

const INITIAL_STATE = []

export default function cartReducer(state=INITIAL_STATE, action) {
    console.log("cart reducer", state, action);

    switch(action.type) {

        case ActionTypes.ADD_ITEM_TO_CART: 
            return [...state, action.payload.item]

        
        //TODO: REMOVE_ITEM_FROM_CART: {payload.id}
        case ActionTypes.REMOVE_ITEM_FROM_CART: 
            return state.filter ( item => item.id != action.payload.id)

        case ActionTypes.UPDATE_CART: {
            return  state.map ( item => {
                if (item.id != action.payload.id)
                    return item;
     
                return Object.assign({}, item, {qty: action.payload.qty})
            })
        }

        case ActionTypes.EMPTY_CART: 
            return [];

       // case "@@redux/INIT": 
       //  return INITIAL_STATE;

        default: 
            return state;
    }
}