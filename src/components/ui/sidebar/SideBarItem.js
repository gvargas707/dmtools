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
  return (
    <Link className='sidebar-item' to={url}>
      <div >
        <FontAwesomeIcon icon={icons[icon] || icons['question']} />
        <span className='sidebar-item--label'>{label}</span>
      </div>
    </Link>
  )
};

export default SideBarItem;