import React from 'react';
import './collection-preview.styles.scss';
import '../collection-item/collection-item';
import CollectionItem from '../collection-item/collection-item';
// 收藏预览
// const CollectionPreview = ({ title, items }) => (
//     <div className='collection-preview'>
//         <h1 className='title'>{title.toUpperCase()}</h1>
//         <div className='preview'>
//             {items
//                 .filter((item, idx) => idx < 4)
//                 .map(({id, ...otherItemProps}) => (
//                     <CollectionItem key={id} {...otherItemProps} />
//             ))}
//         </div>
//     </div>
// );
const CollectionPreview = ({ title, items }) => (
    <div className='collection-preview'>
        <h1 className='title'>{title.toUpperCase()}</h1>
        <div className='preview'>
            {items
                .filter((item, idx) => idx < 4)
                .map((item) => (
                    <CollectionItem key={item.id} item={item} />
            ))}
        </div>
    </div>
);

export default CollectionPreview; 