import { products } from '../Components/Product';
import  { Action_type } from './ActionType';


 export const addtocart = (product) => {
  return {type :Action_type.ADD_TO_CART,payload: product}
}
export const removefromcart = (id) => {
  return {type : Action_type.REMOVE_FROM_CART,payload: id }
}