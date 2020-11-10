import './user.types';
export const setCurrentUser = user => ({
    type: 'UserActionTypes.SET_CURRENT_USER', // 类型设置为当前用户
    payload: user  // 下一个状态现在将使我们的当前用户值等于该有效负载值，就像我们
});