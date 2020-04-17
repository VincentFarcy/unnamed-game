// npm imports
import { connect } from 'react-redux';

// local imports
import PlayerInfo from '../components/PlayerInfo';

// state
const mapStateToProps = (state) => ({
  mainCounter: state.gameplay.phpTimer,
  // TODO: Handle the Health Points from state
  playerHp: ((
    // HP = ((Volonté / 2) + Consitution) * 10
    state.gameplay.abilities[3].value / 2) + (state.gameplay.abilities[2].value)) * 10,
});

// actions
const mapDispatchToProps = {};


// export
export default connect(mapStateToProps, mapDispatchToProps)(PlayerInfo);
