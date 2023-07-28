import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icons } from '../../utils/icons';

import './ItemThumbnail.css';

const ItemThumbnail = ({
  src,
  type
}) => {
  const icon = icons[type] || icons['question']
  return (
    src
    ? <img className='item-thumbnail' src={src} />
    : <FontAwesomeIcon className='item-thumbnail' icon={icon} />
  )
};

export default ItemThumbnail