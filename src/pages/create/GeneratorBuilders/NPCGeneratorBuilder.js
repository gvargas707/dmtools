import React from "react";

import Table from "../../../components/generators/table/Table";
import OldTable from "../../../components/generators/table/OldTable";
import TableRoller from "../GeneratorBlocks/TableRoller";

import { tableList } from "../../../data/lists/faerunLists";

import './NPCGeneratorBuilder.css';

const tableData = {
  title: '',
  description: '',
  properties: {
    rollColumns: false,
  },
  rollFormula: '',
  columnTitles: [
    "Weapons",
    "Armor",
    "Alchemy",
    "Currency"
  ],
  entries: [
    {
      ranges: [1,2],
      weight: 2,
      columns: [
        "Longsword",
        "Leather Armor",
        "Ring of Protection",
        "Potion of Healing",
        "250gp"
      ]
    },
    {
      ranges: [3,4],
      weight: 2,
      columns: [
        "Dagger",
        "Padded",
        "Amulet of Poison Resistance",
        "Oil of Sharpness",
        "100 sp",
      ]
    },
    {
      ranges: [5,6],
      weight: 2,
      columns: [
        "Longbow",
        "Chainmail",
        "Boots of Striding",
        "Flask of Fire",
        "80 cp"
      ]
    }
  ]
}

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
        <span>An example NPC using the settings you've provided.</span><br/><br/><br/>
        <span>This is the new table</span>
        <br/>
        <Table />
        <br/><br/><br/><br/>
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