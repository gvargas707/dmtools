//import { Random } from 'random-js';
const { Random } = require('random-js');


const random = new Random();

const generateAbilityScore = () => {
  return random.integer(1,6) + random.integer(1,6) + random.integer(1,6)
}

const checkDistribution = (iterations) => {
  const rolls = []
  for (let i=1;i<=iterations;i++){
    rolls.push(generateAbilityScore())
  }
  const rollObject = {}
  for (roll in rolls){
    if (rolls[roll] in rollObject){
      rollObject[rolls[roll]] += 1
    } else {
      rollObject[rolls[roll]] = 1
    }
  }
  return rollObject
}