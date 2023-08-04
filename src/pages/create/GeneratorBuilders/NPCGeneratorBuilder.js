import React from "react";

import Table from "../../../components/generators/table/Table";
import TableRoller from "../GeneratorBlocks/TableRoller";

import { tableList } from "../../../data/lists/faerunLists";

import './NPCGeneratorBuilder.css';

const NPCGeneratorBuilder = () => {

  return (
    <>
    <h1>NPC Generator Builder</h1>
    <span>Use the following interface to customize a random NPC generator. The NPCs generated will follow the rules and parameters you specify below. Have fun!</span>
    <hr />
    <div>
      <div className='universal-npc-properties'>
        <h2>Universal NPC Properties</h2>
      </div>
      <div className='example-npc'>
        <h2>Example NPC</h2>
        <span>An example NPC using the settings you've provided.</span>
        <Table id="frx5t6y7"/>
      </div>
      <div className='ruleset-properties'>
        <h2>Ruleset Properties</h2>
        <span>Properties unique to rulesets.</span>
      </div>
    </div>
    </>
  )
}

export default NPCGeneratorBuilder;