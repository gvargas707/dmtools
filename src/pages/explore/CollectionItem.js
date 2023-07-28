import React from "react";

import ItemThumbnail from "../../components/content/ItemThumbNail";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icons } from '../../utils/icons'

import './CollectionItem.css';

const CollectionItem = ({
  label,
  author = 'Stryder',
  type = '',
  rating = 0
}) => {
  return (
    <div className='collection-item'>
      <ItemThumbnail src={''} type={type}/>
      <hr />
      <div className='collection-iteminfo'>
        <span className='collection-iteminfo--label'>{label}</span>
        <span className='collection-iteminfo--author'>{author}</span> | <FontAwesomeIcon className='collection-iteminfo--star' icon={icons['regStar']}/> <span className='collection-iteminfo--rating'>{rating}</span>
      </div>
      
    </div>
  )
};

export default CollectionItem;