import { combineReducers } from 'redux';
import userReducer from './user/user.reducer';
// 组合减速器
// redux中的完整状态只是Jason的一个大对象
export default combineReducers({
    user: userReducer
});



// 以上等同于使用rootReducer创建组合减速器
// const rootReducer = CombineReducers （{ 
//     DefaultReducer ，
//     firstNamedReducer ，
//     secondNamedReducer
//   } ）