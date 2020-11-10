import CartActionTypes from './cart.types';

// 购物车切换按钮
export const toggleCartHidden = () => ({
    type: CartActionTypes.TOGGLE_CART_HIDDEN
});

// 将商品添加到购物车
export const addItem = item => ({
    type: CartActionTypes.ADD_ITEM,
    payload: item
}); 

export const removeItem = item => ({
    type: CartActionTypes.REMOVE_ITEM,
    payload: item
})

// 在购物车中清除项目
export const clearItemFromCart = item => ({
    type: CartActionTypes.CLEAR_ITEM_FROM_CART,
    payload: item
})