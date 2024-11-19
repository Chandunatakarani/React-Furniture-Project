 const initialstate = {
    cartdata:[],
 }
 export const ProductReducer = (state=initialstate,action) => {
    // console.log(action);
    
               switch(action.type){
                case "ADD_TO_CART":
                    const isProductInCart = state.cartdata.some(
                        (item) => String(item.id) === String(action.payload.id)
                      );
                      if (isProductInCart) {
                        return state; 
                      }
                    return{
                        ...state,cartdata :[...state.cartdata,action.payload]
                    };
                case "REMOVE_FROM_CART":
                    return{
                        ...state,cartdata : state.cartdata.filter((item)=>item.id !== action.payload)
                    }
                    default :
                    return state;
               }
}