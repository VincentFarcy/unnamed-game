// npm imports
import { connect } from 'react-redux';

// local imports
import Combat from '../../components/Combat';

// Action Creators
import {
  findOpponent,
  combatInProgress,
  applyDamage,
  nextSequence,
  endFight,
  changeBg,
} from '../../actions/gamePlay';

// state
const mapStateToProps = (state) => ({
  opponent: state.gameplay.combat.currentOpponent,
  player: state.gameplay.player,
  strength: state.gameplay.player.abilities[0].value,
  isCombatOn: state.gameplay.combat.isCombatOn,
  isCombatInProgress: state.gameplay.combat.combatInProgress,
  gameParameters: state.gameplay.gameParameters,
  php: state.gameplay.phpTimer,
});

// actions
const mapDispatchToProps = (dispatch) => ({
  findOpponent: () => {
    dispatch(findOpponent());
  },
  combatInProgress: () => {
    dispatch(combatInProgress());
  },
  applyDamage: (damage) => {
    dispatch(applyDamage(damage));
  },
  nextSequence: () => {
    dispatch(nextSequence());
  },
  endFight: () => {
    dispatch(endFight());
  },
  changeBg: (bgImageCssClass) => {
    dispatch(changeBg(bgImageCssClass));
  },
});


// export
export default connect(mapStateToProps, mapDispatchToProps)(Combat);
