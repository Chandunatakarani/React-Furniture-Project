 const initialstate = {
    cartdata:[],
 }
 export const ProductReducer = (state=initialstate,action) => {
    // console.log(action);
    
               switch(action.type){
                case "ADD_TO_CART":
                    return{
                        ...state,cartdata :[...state.cartdata,action.payload]
                    };
                case "REMOVE_FROM_CART":
                    return{}
                    default :
                    return state;
               }
}