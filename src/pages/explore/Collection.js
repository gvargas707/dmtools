import React from "react";

import './Collection.css';
import CollectionItem from "./CollectionItem";

const Collection = ({
  header,
  description,
  data,
  type
}) => {
  return (
    <div className='collection'>
      <h1 className='collection--header'>{header}</h1>
      <p className='collection--description'>{description}</p>
      <div className="collection-carousel">
        {
          data.map(d => 
            <CollectionItem
              label={d.title}
              author={d.author}
              rating={d.rating}
              src={d.src}
              type={type}
            />
          )
        }
        {/* <CollectionItem label='Shopkeepers'/>
        <CollectionItem label='Guards' />
        <CollectionItem label='Commoners' />
        <CollectionItem label='Nobles' />
        <CollectionItem label='Laborers' /> */}
      </div>
      
    </div>
  )
};

export default Collection;