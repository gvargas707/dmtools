import React from 'react';

import SideBar from '../../components/ui/sidebar/SideBar';
import {Outlet} from 'react-router-dom';

import './createPage.css';

const CreatePage = () => {
return (
  <>
    <SideBar>
      <h1>My Generators</h1>
      <span style={{textAlign:'center',display:'block'}}>You have not created any generators yet.</span>
    </SideBar>
    <div className="main">
      <Outlet />
    </div>
  </>
)
}

export default CreatePage;