import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
// 持久化
import { persistStore } from 'redux-persist';
// 根减速机
// 从root reducer获取该用户对象
// 只需获取当前用户的属性并将其传递到我们的组件中即可
import rootReducer from './root-reducer';

const middlewares = [logger];

export const store = createStore(rootReducer, applyMiddleware(...middlewares));
export const persistor = persistStore(store);
// export default { store, persistor };