// == Import : local
import { GAME_DATA_SUCCESS, INCREMENT_CREATE_CHARACTER, DECREMENT_CREATE_CHARACTER } from '../actions/gamePlay';

import Force from '../../docs/images/strength.png';
import Agilité from '../../docs/images/agility.png';
import Constitution from '../../docs/images/endurance.png';
import Volonté from '../../docs/images/will.png';
import Intelligence from '../../docs/images/intelligence.png';

// == State
const initialState = {
  abilities: [
    {
      name: 'Force',
      value: 1,
      image: Force,
    },
    {
      name: 'Agilité',
      value: 1,
      image: Agilité,
    },
    {
      name: 'Constitution',
      value: 1,
      image: Constitution,
    },
    {
      name: 'Volonté',
      value: 1,
      image: Volonté,
    },
    {
      name: 'Intelligence',
      value: 1,
      image: Intelligence,
    },
  ],
  chapters: [
    {
      title: "1er chapitre",
      mainText: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pharetra, lectus tempor imperdiet maximus, arcu tortor tincidunt purus, ut consequat tellus risus sed lectus. Donec cursus ex erat, sed feugiat magna ullamcorper sit amet. Suspendisse ultrices metus ac porttitor faucibus. Sed nec metus eget arcu rutrum consectetur. Donec nec justo ac diam facilisis lobortis. Phasellus et nulla mi. Sed in eros sed tellus faucibus tincidunt.\r\n\r\nEtiam sagittis ex vel nunc dapibus fermentum. Curabitur feugiat posuere consequat. Nam nec cursus diam, id pellentesque massa. Phasellus tristique bibendum sem, ut ullamcorper tellus vestibulum eu. Fusce ultrices massa ex, vitae varius felis tempus vel. Morbi aliquet leo a purus tincidunt viverra. Quisque hendrerit accumsan leo. Duis a tortor sit amet libero gravida ornare. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Etiam felis purus, aliquet ac fringilla vitae, efficitur vel magna. In est ex, interdum commodo convallis a, sagittis sed ipsum. Etiam sit amet lacus id tellus vestibulum condimentum.\r\n\r\nInteger eget sagittis ex, eget posuere dui. In porta, turpis eget interdum ultricies, turpis orci malesuada mi, eu posuere nulla massa at massa. Vestibulum pulvinar consectetur urna facilisis porta. Pellentesque quis enim a nisi sollicitudin iaculis vitae vel velit. Maecenas finibus ac enim sed eleifend. Proin non pretium erat. Vivamus venenatis rhoncus eros tempus posuere. Mauris sagittis nibh aliquet risus consectetur vulputate. Cras sit amet fringilla arcu. ",
      endText: " Integer eget sagittis ex, eget posuere dui. In porta, turpis eget interdum ultricies, turpis orci malesuada mi, eu posuere nulla massa at massa. Vestibulum pulvinar consectetur urna facilisis porta. Pellentesque quis enim a nisi sollicitudin iaculis vitae vel velit. Maecenas finibus ac enim sed eleifend. Proin non pretium erat. Vivamus venenatis rhoncus eros tempus posuere. Mauris sagittis nibh aliquet risus consectetur vulputate. Cras sit amet fringilla arcu.\r\n\r\nIn ut risus accumsan, congue lectus id, aliquam urna. Cras id erat libero. Cras vulputate lorem non pharetra mattis. Sed viverra risus at accumsan aliquam. Integer pharetra sem tortor, pretium vestibulum lectus semper et. Nulla facilisi. Cras auctor mauris magna, eget consequat leo sagittis in. Nullam bibendum nisl id arcu gravida aliquet. Vestibulum pellentesque mattis felis non venenatis. Suspendisse ullamcorper tellus sed quam ultrices, egestas malesuada metus vestibulum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu convallis nisi. Aenean ornare quam non ultrices suscipit. Nullam id ex felis. Suspendisse eget enim ac felis mattis egestas eget in ex. Nullam sodales, libero nec auctor tristique, magna dolor pellentesque augue, vitae rutrum nulla magna a turpis. ",
      image: null,
      orderBy: 1,
    }
      ],
};

// == Reducer
const gameplay = (state = initialState, action = {}) => {
  switch (action.type) {
    case GAME_DATA_SUCCESS:
      return {
        ...state,
        ...action.payload,
      };
    case INCREMENT_CREATE_CHARACTER:
      return {
        ...state,
        value: state.value + 1,
      };
    case DECREMENT_CREATE_CHARACTER:
      return {
        ...state,
        value: state.value - 1,
      };
    default:
      return state;
  }
};


// == Export
export default gameplay;
