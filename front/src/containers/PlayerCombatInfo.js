// npm imports
import { connect } from 'react-redux';

// local imports
import PlayerCombatInfo from '../components/Combat/PlayerCombatInfo.js';

// state
const mapStateToProps = (state) => ({
  playerHp: ((
    // HP = ((Volonté / 2) + Consitution) * 10
    state.gameplay.abilities[3].value / 2) + (state.gameplay.abilities[2].value)) * 10,
});

// actions
const mapDispatchToProps = {};


// export
export default connect(mapStateToProps, mapDispatchToProps)(PlayerCombatInfo);
