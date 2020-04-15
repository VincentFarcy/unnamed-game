// == Import : local
import { TEST_MIDDLEWARE } from '../actions';

// == State
const initialState = {
  user: null,
  chapters: [
    {
      title: '1er chapitre',
      mainText: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pharetra, lectus tempor imperdiet maximus, arcu tortor tincidunt purus, ut consequat tellus risus sed lectus. Donec cursus ex erat, sed feugiat magna ullamcorper sit amet. Suspendisse ultrices metus ac porttitor faucibus. Sed nec metus eget arcu rutrum consectetur. Donec nec justo ac diam facilisis lobortis. Phasellus et nulla mi. Sed in eros sed tellus faucibus tincidunt.\r\n\r\nEtiam sagittis ex vel nunc dapibus fermentum. Curabitur feugiat posuere consequat. Nam nec cursus diam, id pellentesque massa. Phasellus tristique bibendum sem, ut ullamcorper tellus vestibulum eu. Fusce ultrices massa ex, vitae varius felis tempus vel. Morbi aliquet leo a purus tincidunt viverra. Quisque hendrerit accumsan leo. Duis a tortor sit amet libero gravida ornare. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Etiam felis purus, aliquet ac fringilla vitae, efficitur vel magna. In est ex, interdum commodo convallis a, sagittis sed ipsum. Etiam sit amet lacus id tellus vestibulum condimentum.\r\n\r\nInteger eget sagittis ex, eget posuere dui. In porta, turpis eget interdum ultricies, turpis orci malesuada mi, eu posuere nulla massa at massa. Vestibulum pulvinar consectetur urna facilisis porta. Pellentesque quis enim a nisi sollicitudin iaculis vitae vel velit. Maecenas finibus ac enim sed eleifend. Proin non pretium erat. Vivamus venenatis rhoncus eros tempus posuere. Mauris sagittis nibh aliquet risus consectetur vulputate. Cras sit amet fringilla arcu. ',
      endText: ' Integer eget sagittis ex, eget posuere dui. In porta, turpis eget interdum ultricies, turpis orci malesuada mi, eu posuere nulla massa at massa. Vestibulum pulvinar consectetur urna facilisis porta. Pellentesque quis enim a nisi sollicitudin iaculis vitae vel velit. Maecenas finibus ac enim sed eleifend. Proin non pretium erat. Vivamus venenatis rhoncus eros tempus posuere. Mauris sagittis nibh aliquet risus consectetur vulputate. Cras sit amet fringilla arcu.\r\n\r\nIn ut risus accumsan, congue lectus id, aliquam urna. Cras id erat libero. Cras vulputate lorem non pharetra mattis. Sed viverra risus at accumsan aliquam. Integer pharetra sem tortor, pretium vestibulum lectus semper et. Nulla facilisi. Cras auctor mauris magna, eget consequat leo sagittis in. Nullam bibendum nisl id arcu gravida aliquet. Vestibulum pellentesque mattis felis non venenatis. Suspendisse ullamcorper tellus sed quam ultrices, egestas malesuada metus vestibulum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu convallis nisi. Aenean ornare quam non ultrices suscipit. Nullam id ex felis. Suspendisse eget enim ac felis mattis egestas eget in ex. Nullam sodales, libero nec auctor tristique, magna dolor pellentesque augue, vitae rutrum nulla magna a turpis. ',
      image: null,
      orderBy: 1,
      sequences: [
        {
          id: 1,
          orderBy: 1,
          mainText: 'Phasellus non bibendum augue. Vestibulum porta arcu non risus rhoncus congue. Duis placerat id felis nec blandit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus id libero et lectus pretium mollis non id tellus. Quisque vitae ipsum ligula. Proin at mi ac ligula accumsan consectetur vel a libero. Mauris sed mattis felis, et facilisis lacus. Nulla vel aliquet justo. Morbi accumsan eu est eget ornare. Donec mattis laoreet nisl, sed finibus arcu tristique aliquet. Proin pulvinar malesuada diam dapibus vulputate. Aenean sed maximus ligula, ac euismod lorem. ',
        },
        {
          id: 2,
          orderBy: 2,
          mainText: ' Nunc at leo a libero congue gravida sit amet nec arcu. Morbi dapibus sem vitae enim accumsan consequat. Phasellus ut massa nec risus malesuada faucibus. Nam tortor augue, rutrum id hendrerit nec, pulvinar vel nisi. Fusce viverra porta tellus vitae lacinia. Vestibulum ut viverra dui, a sollicitudin risus. Aenean id sem tortor. Maecenas id neque non diam consectetur consequat eu sed nunc. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nam rhoncus tempus odio ultrices ullamcorper.\r\n\r\nPellentesque pulvinar neque id nisi consequat pulvinar. Nunc vulputate lacus ac enim suscipit, non malesuada neque vulputate. Integer imperdiet facilisis nisl, et accumsan orci. Donec sed dignissim sem, eget elementum urna. Quisque feugiat vehicula malesuada. Nulla nec magna ac ipsum pulvinar scelerisque. Fusce posuere ligula sed ipsum faucibus porttitor. Proin rutrum ex a nisi volutpat, sed congue orci rutrum. Proin at volutpat odio. Quisque sed enim et turpis ullamcorper posuere. ',
        },
      ],
      randomEvents: [
        {
          rollFrom: 1,
          rollTo: 100,
          mainText: null,
          image: null,
          type: 'fight',
        },
      ],
      randomFightContests: [
        {
          opponent: {
            id: 1,
          },
          rollFrom: 1,
          rollTo: 5,
          mainText: null,
          image: null,
        },
        {
          opponent: {
            id: 2,
          },
          rollFrom: 6,
          rollTo: 15,
          mainText: null,
          image: null,
        },
        {
          opponent: {
            id: 3,
          },
          rollFrom: 16,
          rollTo: 25,
          mainText: null,
          image: null,
        },
        {
          opponent: {
            id: 4,
          },
          rollFrom: 26,
          rollTo: 35,
          mainText: null,
          image: null,
        },
        {
          opponent: {
            id: 5,
          },
          rollFrom: 36,
          rollTo: 45,
          mainText: null,
          image: null,
        },
        {
          opponent: {
            id: 6,
          },
          rollFrom: 46,
          rollTo: 55,
          mainText: null,
          image: null,
        },
        {
          opponent: {
            id: 7,
          },
          rollFrom: 56,
          rollTo: 75,
          mainText: null,
          image: null,
        },
        {
          opponent: {
            id: 8,
          },
          rollFrom: 76,
          rollTo: 85,
          mainText: null,
          image: null,
        },
        {
          opponent: {
            id: 9,
          },
          rollFrom: 86,
          rollTo: 95,
          mainText: null,
          image: null,
        },
        {
          opponent: {
            id: 10,
          },
          rollFrom: 96,
          rollTo: 100,
          mainText: null,
          image: null,
        },
      ],
    },
  ],
  opponents: [
    {
      id: 10,
      name: 'Sabine',
      speed: 2,
      touch: 2,
      dodge: 2,
      armor: 2,
      health: 10,
      damageMin: 1,
      damageMax: 3,
      xpGain: 0,
      moneyGain: 0,
      image: null,
    },
  ],
  'content-parameters': [],
  'game-parameters': [
    {
      label: 'Attribute_min',
      value: 1,
    },
    {
      label: 'attribute_max',
      value: 5,
    },
    {
      label: 'attribute_points',
      value: 15,
    },
    {
      label: 'rest_health_gain',
      value: 2,
    },
    {
      label: 'rest_access_probability',
      value: 100,
    },
    {
      label: 'medic_health_gain',
      value: 5,
    },
    {
      label: 'medic_access_probability',
      value: 50,
    },
    {
      label: 'train_gain',
      value: 1,
    },
    {
      label: 'train_access_probability',
      value: 100,
    },
    {
      label: 'train_room_access_probability',
      value: 50,
    },
    {
      label: 'train_full_access_probability',
      value: 10,
    },
    {
      label: 'train_money_cost',
      value: 0,
    },
    {
      label: 'train_xp_cost',
      value: 0,
    },
    {
      label: 'vending_access_probability',
      value: 50,
    },
  ],
  backups: [],
};

// == Reducer
const gameplay = (state = initialState, action = {}) => {
  switch (action.type) {
    case TEST_MIDDLEWARE:
      return {
        propriety: 'after action propriety',
      };
    default:
      return state;
  }
};

// == Export
export default gameplay;
