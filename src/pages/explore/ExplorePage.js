import React from 'react';
import SideBar from '../../components/ui/sidebar/SideBar';

import SideBarItem from '../../components/ui/sidebar/SideBarItem';

const ExplorePage = () => {
  return (
    <>
      <SideBar>
        <h1>Example Header</h1>
        <SideBarItem icon={'book'} url={'/'} label={'NPCs'}/> 
        <hr/>
        <SideBarItem icon={'burst'} url={'/'} label={'Encounters'}/>
        <hr/>
        <SideBarItem icon={'houseChimney'} url={'/'} label={'Settlements'}/>
        <hr/>
        <SideBarItem icon={'gem'} url={'/'} label={'Loot'}/>
        <hr/> 
      </SideBar>
      <div className="main">
        <h1>Example Content Header</h1>
        <div>Example Object</div>
      </div>
    </>
  )
};

export default ExplorePage;