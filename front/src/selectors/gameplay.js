// == Import : local
import { rollDice } from '../func';

// selectors
export const findUpAbility = (state, abilityName) => (
  state.abilities.map((ability) => {
    if (ability.name === abilityName && ability.value < state.gameParameters.attribute_max && state.pool > 0) {
      ability.value++;
      state.pool--;
    }
  })
);

export const findDownAbility = (state, abilityName) => (
  state.abilities.map((ability) => {
    if (ability.name === abilityName && ability.value > state.gameParameters.attribute_min && state.pool < state.gameParameters.attribute_points) {
      ability.value--;
      state.pool++;
    }
  })
);

export const findOpponentForCombat = (state) => {
  // console.log(state);

  const { opponents } = state;
  const opponentsTable = state.chapters[0].randomFightContests;
  // console.log(opponentsTable, opponents);

  const findOpponentId = rollDice(1, 100);
  // console.log(findOpponentId);

  const opponentTableId = opponentsTable.find(
    (oppoRange) => (findOpponentId >= oppoRange.rollFrom && findOpponentId <= oppoRange.rollTo),
  );
  // console.log(opponentTableId);

  const opponentId = opponentTableId.opponent.id;
  // console.log(opponentId);

  const opponent = opponents.find(
    (rightOpponent) => (opponentId === rightOpponent.id),
  );
  // console.log(opponent);

  return opponent;
};

export const findInfoForSequence = (state) => {
  const sequenceList = state.chapters[0].sequences;
  const timing = state.phpTimer;

  const sequenceTable = sequenceList.find(
    (sequence) => (timing === sequence.id),
  );

  if (timing > sequenceList.length) {
    return {
      id: 99,
      mainText: 'end',
    };
  }
  return sequenceTable;
};

export const findRandomReward = (state) => {
  const rewardTable = state.chapters[0].randomRewards;
  // == Dice Roll to manage the Random Loot Table
  const rollDiceReward = rollDice(1, 100);

  // == Here we find in the database which Loot Table to pick the rewards from
  const rollRange = rewardTable.find(
    (reward) => (rollDiceReward >= reward.rollFrom && rollDiceReward <= reward.rollTo),
  );

  // == Here we determine from the Loot Table above the amount of moneyu (JSX)
  // and Experience (XP) the player wins
  const xpRoll = rollDice(rollRange.minXp, rollRange.maxXp);
  const jsxRoll = rollDice(rollRange.minMoney, rollRange.maxMoney);

  return {
    xpRoll,
    jsxRoll,
  };
};
