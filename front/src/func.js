// ==== Examples of Roll Dice ===
// const rollDice4 = () => rollDice(1, 4);
// const rollDice6 = () => rollDice(1, 6);
// const rollDice8 = () => rollDice(1, 8);
// const rollDice12 = () => rollDice(1, 12);
// const rollDice20 = () => rollDice(1, 20);
export const rollDice = (min, max) => {
  return min + Math.floor(Math.random() * (max - min + 1));
};
