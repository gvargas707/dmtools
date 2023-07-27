import React from 'react';

import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faPerson } from '@fortawesome/free-solid-svg-icons';
import { icons } from '../../../utils/icons';

import './SideBarItem.css'

const SideBarItem = ({
  icon,
  url,
  label
}) => {
  console.log(icons)
  return (
    <div className='sidebar-item'>
      <Link to={url}>
        <FontAwesomeIcon icon={icons[icon] || icons['question']} />
        <span class='sidebar-item--label'>{label}</span>
      </Link>
    </div>
  )
};

export default SideBarItem;