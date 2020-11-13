import React from 'react';
import CollectionOverview from '../../components/collections-overview/collections-overview.components';
import CollectionPage from '../../components/collection/collection.component';
import { Route } from 'react-router-dom';
const ShopPage = ({match}) => (
    <div className='shop-page'>
    <Route exact path={`${match.path}`} component={CollectionOverview}/>
    <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
    </div>
)
//测试
// const ShopPage = ({match}) => {
//     console.log(match);
//     return <div className='shop-page'>
//     <Route exact path={`${match.path}`} component={CollectionOverview}/>
//     <Route path={`${match.path}/:categoryId`} component={CategoryPage} />
//     </div>
// }


export default ShopPage;
/** cosnt collections = this.state.collections  */
// constructor(props) {
//     super(props);

//     this.state = {
//         collections: SHOP_DATA
//     }
// }