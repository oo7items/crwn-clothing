// shop页面下的全部内容(收藏预览)

import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import './collections-overview.styles.scss';
import {selectCollectionsForPreview} from '../../redux/shop/shop.selector';
import CollectionPreview from '../collection-preview/collection-preview';
const CollectionOverview = ({ collections }) => (
    <div className='collectons-overviews'>
        <div className='shop-page'>
            {collections.map(({id, ...otherCollectionProps}) => (
                    <CollectionPreview key={id} {...otherCollectionProps} />
            ))}
        </div>
    </div>
)

// const mapStateToProps = createStructuredSelector({
//     collections: selectCollections
// })
const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsForPreview
})

export default connect(mapStateToProps)(CollectionOverview);