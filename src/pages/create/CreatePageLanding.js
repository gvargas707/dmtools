import React from 'react'
import {Link} from 'react-router-dom';

import './CreatePageLanding.css';
import GeneratorCard from './GeneratorCard';

const CreatePageLanding = () => {
  return (
    <>
      <h1>Generator Makers</h1>
      <span className='description'>Below are the different tools which let you customize your own generators.</span>
      <hr />
      <Link to='npc-builder'>
      <GeneratorCard title='NPC Builder Tool' description='Create your own NPC generator with this tool. Supports DnD 5E and Pathfinder 2nd Edition. Support for different and/or custom rulesets to come in the future.' />
      </Link>
    </>
  )
};

export default CreatePageLanding;