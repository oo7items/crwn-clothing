import { createSelector } from 'reselect';

// 选择整个减速器状态
const selectCart = state => state.cart;
// 需要使用选择购物车的输入选择器来完成此任务。
export const selectCartItems = createSelector(

    // 第一个参数是一个集合，因此是一个输入选择器数组。 所以我们要说选择购物车，然后第二个参数将是一个将返回的函数 我们想要的选择器值。

    [selectCart],  // 输入选择器数组
    // 使用创建选择器使此选择购物车项目选择器成为回忆录选择器。
    cart => cart.cartItems // 选择器值 要获取的参数实际上是输入选择器中的每个输出数组，但顺序是写入这些选择器
)

// 因此，让我们创建一个名为“选择购物车商品计数”的新选择器，它将是另一个创建选择器，除了我们要传递的还可以是选择购物车中的物品。对。它不必只是从我们的输入选择器开始，而输入选择器只是选择器那只会返回一个状态。实际上，我们最终在实际组件中使用了如此大的状态是非常罕见的。我们总是使用这些较小的，更具体的选择器，这些选择器会对它们进行某种转换。举例来说，假设我们选择的汽车项目数是选择的汽车项目，这样我们就可以得到我们的汽车项目这里。输出的是这些卡项目的减少的通话。因此，这将退还所有卡项目的总数
export const selectCartItemsCount = createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce((accumalatedQuantity, cartItem) => accumalatedQuantity + cartItem.quantity, 0)
)

export const selectCartHidden = createSelector(
    [selectCart],
    cart => cart.hidden
)

export const selectCartTotal = createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce((accumalatedQuantity, cartItem) => accumalatedQuantity + cartItem.quantity * cartItem.price , 0)

)