import React from "react";

import './ExploreCollection.css';
import Collection from './Collection';

//Import dummy data for now
import { collectionData } from "../../data/collectionData";

const ExploreCollection = () => {
  
  return (
    <>
      <h1>Popular Collections</h1>
      <hr/>
      
      {/* 
      <Collection
        header='NPC Collection'
        description='A collection of NPC generators to provide an NPC for any and all occassions for your tabletop sessions.'
      /> */}
      {
        collectionData.map( c =>
          <Collection
            key={c.type}
            header={c.label}
            description={c.description}
            type={c.icon}
            data={c.collection}
          />
        )
      }
    </>
  )
};

export default ExploreCollection;