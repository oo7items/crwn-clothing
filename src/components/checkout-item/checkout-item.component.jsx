import React from 'react';

import './checkout-item.styles.scss';

import { connect } from 'react-redux';
import { clearItemFromCart, addItem, removeItem} from '../../redux/cart/cart.actions';

// cartItem: {name, imageUrl, quantity, price} => const {name, imageUrl, quantity, price} = cartItem;
const CheckoutItem = ({ cartItem, clearItem, addItem, removeItem }) => {
    const {name, imageUrl, quantity, price} = cartItem;
    return (<div className='checkout-item'>
        <div className='image-container'>
            <img src={imageUrl} alt='item' />
        </div>
        <span className='name'>{name}</span>
        <span className='quantity'>
            <div className='arrow' onClick={() => removeItem(cartItem)}>&#10094;</div>
                <span className='value'>{quantity}</span>
            <div className='arrow' onClick={() => addItem(cartItem)}>&#10095;</div>
        </span>
        <span className='price'>{price}</span>
        <span className='remove-button' onClick={() => clearItem(cartItem)}>&#10006;</span>
    </div>
    );
}

const mapDispatchToprops = dispatch => ({
    clearItem: item => dispatch(clearItemFromCart(item)),
    addItem: item => dispatch(addItem(item)),
    removeItem: item => dispatch(removeItem(item))
})
// 需要确保将传递的信息和我们的地图调度连接到道具
export default connect(null, mapDispatchToprops)(CheckoutItem);
