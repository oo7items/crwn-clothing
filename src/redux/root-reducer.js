// 随着您的应用程序变得越来越复杂，您需要将归约函数拆分为单独的函数，每个函数管理状态的独立部分。 combineReducers辅助函数将值不同的归约函数的对象转换为可以传递给的单个归约函数createStore。 所得的化简器调用每个子化简器，并将其结果收集到单个状态对象中。 名称空间产生combineReducers()的状态传递给每个化简器的键下的状态。combineReducers()

import { combineReducers } from 'redux';
import userReducer from './user/user.reducer';
import cartReducer from './cart/cart.reducer';
// 组合减速器
// redux中的完整状态只是Jason的一个大对象
export default combineReducers({
    user: userReducer,
    cart: cartReducer
});



// 以上等同于使用rootReducer创建组合减速器
// const rootReducer = CombineReducers （{ 
//     DefaultReducer ，
//     firstNamedReducer ，
//     secondNamedReducer
//   } ）

