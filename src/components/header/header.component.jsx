import React from 'react';
import './header.styles.scss';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/crown.svg';

import { connect } from 'react-redux';

/** 谷歌监听身份验证 */
import { auth } from '../../firebase/firebase.untils';

import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown';

// 我们还将从“重新选择”中导入另一种称为“创建结构化选择器”的内容
import { createStructuredSelector } from 'reselect';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selector';

const Header = ({ currentUser, hidden }) => (
    <div className='header'>
        <Link className='logo-contianer' to="/">
            <Logo className='logo' />
        </Link>
        <div className='options'>
            <Link className='option' to='/shop'>
                SHOP
            </Link>
            <Link className='option' to='/contact'>
                CONTACT
            </Link>
            {
                currentUser ?
                <div className='option' onClick={() => auth.signOut()}>SIGN OUT</div>
                :
                <Link className='option' to='/signin'>SIGN</Link>
            }
            <CartIcon />
        </div>
        {hidden ? null : <CartDropdown />}
    </div>
)
// 原始方法
// const mapStateToProps = ({user:{currentUser}, cart:{hidden}}) => ({
//     currentUser,
//     hidden
// });
// 使用选择器方法
// const mapStateToProps = (state) => ({
//     currentUser: selectUser(state),
//     hidden: selectCartHidden(state)
// });
// 结构化选择器方法
// 因此，我们真正可以做的是使用我们创建结构化的选择器调用，而不是像传递函数那样传递它，而是像将其传递给函数一样，使我们想要指向正确选择器然后创建结构选择器的属性自动处于顶级状态当地图将props表示为每个随后的选择器时，我们得到的结果是现在，如果我们看一下我们的组件，我们将看到我们的代码应该保持不变。
const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
});


export default connect(mapStateToProps)(Header);