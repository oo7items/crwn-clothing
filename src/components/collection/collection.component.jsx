import React from 'react';

import './collection.styles.scss';


import { connect } from 'react-redux';
import { selectCollection } from '../../redux/shop/shop.selector';
import CollectionItem from '../collection-item/collection-item';

const CollectionPage = ({ collection }) => {
    console.log(collection);
    const { title, items } = collection;
    return (
        <div className='collection-page'>
            <h2 className='title'>{title}</h2>
            <div className='items'>
                {items.map(item => (
                    <CollectionItem key={item.id} item={item} />
                ))}
            </div>
        </div>
    )
}
// 测试
// const CollectionPage = ({ collection }) => {
//     console.log(collection);
//     return <div className='category'>
//         <h2>CATEGORY PAGE</h2>
//     </div>
// }
const mapStateToProps = (state, ownProps) => ({ // ownProps代表我们的根减速器hompage 所以我们可以访问它的三个属性
    // state => 这是必要的，因为不喜欢其他选择器，这个选择器需要一部分状态取决于URL参数！
    // 因此，如果您还记得RAF路线，则传入match对象，我们将拉取Paramus值以获取我们的集合，然后由于我们的select集合是一个返回函数的函数，因此我们将从该函数中出来的函数传递给我们将所有东西连接在一起,现在我们可以访问我们的收藏了
    collection: selectCollection(ownProps.match.params.collectionId)(state)
    // ownProps.match.params.collectionId代表http://localhost:3000/shop/hats hats页面传入我们对应的shop.data中名称的项目！！！
    // (state)它获取状态，然后对其进行转换，以便我们从中获取其他信息状态对象
    // state 这为我们提供了我们在收藏页组件中获得的所有道具，包括我们的比赛我们从在商店页面上传递集合的根组件获得的对象因为我们的收集页面已映射到此路线
    // 如果我们不加(state)我们应该使用import { createStructuredSelector } from 'reselect';对吧！！
})
export default connect(mapStateToProps)(CollectionPage);