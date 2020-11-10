import React from 'react';
import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';
import './cart-dropdown.styles.scss';

import { withRouter } from 'react-router-dom';
  
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartItems } from '../../redux/cart/cart.selectors';

import { toggleCartHidden } from '../../redux/cart/cart.actions';

// 如果我们注销所有我们可以访问的其他道具，我们实际上可以看到这一点
// const CartDropdown = ({ cartItems, history, ...otherprops }) => {
//     console.log(otherprops);
//     return (<div className='cart-dropdown'>
//         <div className='cart-items'>
//         {  cartItems.length ?
//             cartItems.map(cartItem => (
//                 <CartItem key={cartItem.id} item={cartItem} />
//             )) : 
//             (<span className='empty-message'>You cart is empty</span>)
//         }
//         </div>
//         <CustomButton onClick={() => history.push('/checkout')}>GO TO CHECKOUT</CustomButton>
//     </div>)
// };

const CartDropdown = ({ cartItems, history, dispatch }) => (
    <div className='cart-dropdown'>
        <div className='cart-items'>
        {  cartItems.length ?
            cartItems.map(cartItem => (
                <CartItem key={cartItem.id} item={cartItem} />
            )) : 
            (<span className='empty-message'>You cart is empty</span>)
        }
        </div>
        <CustomButton onClick={() => {
            history.push('/checkout');
            dispatch(toggleCartHidden());
        }}>GO TO CHECKOUT</CustomButton>
    </div>
);

// const mapStateToProps = ( cart : {cartItems} ) => ({
//     cartItems
// });
// 因此，我们使用的另一个使用新的“选择卡片”项目选择器的项目是我们的购物车下拉组件 在这里，我们将用选择器替换此卡片项目，我们可以做的就是导入 它在 redux cart cart项目选择器，因此它将成为选择cart项目的对象，现在我们无需进行重组 整个状态，以便我们可以像这样传递它，这将确保我们的购物车下拉组件 状态更改与卡项目无关时，不会重新呈现。 因此，如果我们在购物车下拉列表中签出购物车商品，并且我们的购物车数量没有变化 因此，我们的购物车下拉菜单和我们的汽车图标组件不需要重新渲染，这有助于节省 在性能方面，我们会在构建此应用程序时编写更多的选择器。
const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
});
// 因此，如果我们不提供地图调度，则道具将作为第二个参数Connect将通过调度进入我们的下拉菜单。
// 因此，我们将组件作为属性及其执行此操作的原因是，如果我们需要执行一次关闭操作派遣好吧，没有理由再写另一个地图派发给道具了，它可能会更冗长一些
export default withRouter(connect(mapStateToProps)(CartDropdown));
