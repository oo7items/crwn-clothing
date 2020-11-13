import { createSelector } from 'reselect';

const selectShop = state => state.shop;
// 因此，因为我们正在使用一个对象，并且因为您在使用Al对象，所以我们正在使用该对象 而我们要匹配的想法是一个数字。
// 因此，我们编写了一个映射权限，它只是一个字符串值到达I.D的对象。然后，我们通过选择集合并将其传递到新的“选择集合”选择器中来映射集合
// const COLLECTION_ID_MAP = {
//     hats: 1,
//     sneakers: 2,
//     jackets: 3,
//     womens: 4,
//     mens: 5
// }
export const selectCollections = createSelector(
    [selectShop],
    shop => shop.collections
) 

export const selectCollectionsForPreview = createSelector(
    [selectCollections],
    collections => Object.keys(collections).map(key => collections[key])
)

export const selectCollection = collectionUrlParam => createSelector(
    [selectCollections],
    // 查询我们shop.data数据中的id === 映射权限对应的id 然后返回id对应的项目数据！！！
    // collections => collections.find(
    //     collection => collection.id === COLLECTION_ID_MAP[collectionUrlParam]
    // )
    collections => collections[collectionUrlParam] // 我们把shop.data.js中的数据转换成对象并存储到不同的对象使用链接相同的名称
)

// export const selectCollection = memoize((collectionUrlParam) =>
//         createSelector(
//             [selectCollections],
//             (collections) => collections[collectionUrlParam]
//         )
// );
// (collectionUrlParam) =>
//     createSelector(
//         [selectCollections],
//         (collections) => collections[collectionUrlParam]
// )
