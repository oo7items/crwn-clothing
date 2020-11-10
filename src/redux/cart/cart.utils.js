// 实用程序功能使我们可以保持文件整洁，并在一个位置整理多个文件可能需要的功能

// 添加与购物车redux代码相关的所有实用程序功能
// 此函数称为将商品添加到购物车
// 第一个是现在在我们的购物车商品数组中的所有现有购物车商品
// 第二个 item将成为我们要添加的购物车项目，因为我们要做的是 查看我们现有的购物车项目以查看该购物车项目是否已经存在
export const addItemToCart = (cartItems, cartItemToAdd) => {
    // 现有购物车项目
    const existingCartItem = cartItems.find(
        cartItem => cartItem.id === cartItemToAdd.id
    );

    if (existingCartItem) { // 如果存在共同购物车项目
        // 循环数组找寻全部商品中是否有添加商品相同的东西
        // 如果有那么将加入新属性(数量)+1
        return cartItems.map(cartItem =>
            cartItem.id === cartItemToAdd.id
             ? {...cartItem, quantity: cartItem.quantity + 1}
             : cartItem)
    }
    // 如果在我们的数组中未找到汽车项目
    // quntity属性是第一次附加的，因为当它是新项时，if块将不会运行！
    // 我们都可以引用该商品 存储对象时添加到对象的数量值
    // 如果没有汽车项目我们将数量传入基数1作为起始！！！！！
    return [...cartItems, {...cartItemToAdd, quantity: 1}] 
    // 包含所有已经存在的现有cartitem 添加一个等于我们要添加的购物车商品的对象，除了我们要给它的基本数量为一
}

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
    // 我们需要首先弄清楚我们的车内是否已有现有的购物车物品
    const existingCartItem = cartItems.find(
        //我们知道必须存在的项目，因为我们正在减少它
        cartItem => cartItem.id === cartItemToRemove.id
    );
    // 所以我们知道必须已经有一个，然后我们要检查数量是1以便我们将其删除。
    // 所以我们要说如果现有的购物车数量等于一，那么我们要过滤掉它
    // 我们只想删除它，并希望保留所有购物车ID与我们正在尝试删除的一项，因为这就是过滤器需要显示的要返回购物车项目的过滤条件
    if(existingCartItem.quantity === 1) {
        // 当项目的个数为1时，我们删除匹配的项目！！！！！！！
        // 保留不匹配的ID 删除匹配的ID
        return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id);
    }
    // 如果项目个数不为>1执行一次删除
    return cartItems.map(cartItem => 
        cartItem.id === cartItemToRemove.id ? 
        {...cartItem, quantity: cartItem.quantity - 1} 
        : cartItem);
}