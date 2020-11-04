const INITIAL_STATE = {
    currentUser: null
}
// 每个化简器只是一个函数
// 该函数采用一个状态，然后执行一个动作，该状态是其所在的先前状态是此新操作将要对其进行更新之前的状态
// 因此，我们甚至可以将其视为先前或当前状态，而我们将要使用的功能是将要返回一个对象，它将返回一个对象，并且该对象将成为新的状态
// 我们的用户减速器将成为一个新对象。
// 我们确定使用的是switch语句，而switch语句是有点像一个很大的IF语句。
const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'SET_CURRENT_USER':
            return {
                ...state,
                currentUser: action.payload
            }

        default:
            return state;
    }
}

export default userReducer;