import CartActionTypes from './cart.types';
import { addItemToCart,removeItemFromCart } from './cart.utils';

const INITIAL_STATE = {
    hidden: true,
    cartItems: []
};

const cartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CartActionTypes.TOGGLE_CART_HIDDEN:
            return {
                ...state, // 新状态 并一直延续
                hidden: !state.hidden
            } 
        case CartActionTypes.ADD_ITEM:
            return {
                ...state, // 发生动作更新状态
                // cartItems: [...state.cartItems, action.payload]
                cartItems: addItemToCart(state.cartItems, action.payload)
            }
        case CartActionTypes.REMOVE_ITEM:
            return {
                // 返回一个状态分散的对象，因为我们需要所有属性
                ...state,
                // 但我们要更改的是购物车商品，我们将要写一个新的实用程序函数，该函数将向我们返回带有修改后的购物车商品的数组，其中数量或从我们现有购物车中删除的项目
                cartItems: removeItemFromCart(state.cartItems, action.payload)
            }
        
        case CartActionTypes.CLEAR_ITEM_FROM_CART:
            return {
                ...state,
                // 没有我们试图清除的该项目的任何实例。
                //如果购物车物品ID与操作有效负载不匹配，那么我们知道是我们要删除ID的项目，那么我希望您保留它
                // 过滤器将实际函数内部产生真值的任何内容返回给我们函数的返回在这里是说，如果该汽车商品ID与我们要从有效载荷中删除的商品ID相匹配，那么我希望你过滤掉
                // 这里在状态中创建一个新属性并，过滤掉我们删除的项目，保留删除之外的全部项目 -------------重点
                clearItem: state.cartItems.filter(cartItem => cartItem.id !== action.payload.id)
            }
        default: 
            return state;
    }
}
export default cartReducer;