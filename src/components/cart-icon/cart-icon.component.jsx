import React from 'react';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

import { connect } from 'react-redux';
import { toggleCartHidden } from '../../redux/cart/cart.actions';

import './cart-icon.styles.scss';

import { createStructuredSelector } from 'reselect';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';

const CartIcon = ({ toggleCartHidden, itemCount }) => (
    <div className='cart-icon' onClick={toggleCartHidden}>
        <ShoppingIcon className='shopping-icon' />
        <span className='item-count'>{ itemCount }</span>
    </div>
)

const mapDispatchToprops = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
});

const mapStateToProps = createStructuredSelector({
    // 选择器
    // 一种获得整个状态对象中的状态的代码，然后仅提取一小部分
    // 或该状态的一部分，因为我们得到的是得到购物车，然后得到购物车物品，然后减少那些获得新价值的购物车项目
    // 我们正在根据状态计算出新的价值。
    // { cart : {cartItems }}
    // itemCount: cartItems.reduce((accumalatedQuantity, cartItem) => accumalatedQuantity + cartItem.quantity, 0)

    // 现在，如果我们将这段代码替换为我们的选择器 通话，但我们停止了对国家的通行权，所以让我们通过代顿，发生的是 将整个减速器状态传递到选择器中，然后再选择确定，我需要引用选择卡 引用选择卡的项目。 因此它通过了这里的状态。
    itemCount: selectCartItemsCount
});
// const mapStateToProps = ({ cart : {cartItems }}) => {
//     console.log('begin siidajshdaj');
//     return {
//         itemCount: cartItems.reduce((accumalatedQuantity, cartItem) => accumalatedQuantity + cartItem.quantity, 0)
//     }
// };

export default connect(mapStateToProps, mapDispatchToprops)(CartIcon);