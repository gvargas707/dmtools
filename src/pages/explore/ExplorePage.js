import React from 'react';
import { Outlet } from 'react-router-dom';
import SideBar from '../../components/ui/sidebar/SideBar';

import SideBarItem from '../../components/ui/sidebar/SideBarItem';

import './ExplorePage.css';

const ExplorePage = () => {
  return (
    <>
      <SideBar>
        <h1>Collections</h1>
        <span className='sub-category'>Generators</span>
        <SideBarItem icon={'person'} url={'/'} label={'NPCs'}/> 
        <hr/>
        <SideBarItem icon={'book'} url={'/'} label={'Bestiary'}/> 
        <hr/>
        <SideBarItem icon={'burst'} url={'/'} label={'Encounters'}/>
        <hr/>
        <SideBarItem icon={'houseChimney'} url={'/'} label={'Settlements'}/>
        <hr/>
        <SideBarItem icon={'gem'} url={'/'} label={'Items'}/>
        <hr/> 
        <SideBarItem icon={'table'} url={'/'} label={'Tables'}/>
        <hr/> 
        <SideBarItem icon={'peopleGroup'} url={'/'} label={'Factions'}/>
        <hr/> 
        <SideBarItem icon={'coins'} url={'/'} label={'Shops'}/>
        <hr/>
        <SideBarItem icon={'exclamation'} url={'/'} label={'Quests'}/>
        <hr/> 
        <SideBarItem icon={'mountain'} url={'/'} label={'Scenes'}/>
      </SideBar>
      <div className="main">
        <Outlet />
      </div>
    </>
  )
};

export default ExplorePage;