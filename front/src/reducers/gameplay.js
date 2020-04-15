// == Import : local
import { TEST_MIDDLEWARE } from '../actions';

// == State
const initialState = {
  user: null,
  chapters: [
    {
      title: '1er chapitre',
      mainText: ' Une histoire passionante ',
      image: null,
      orderBy: 1,
      sequences: [
        {
          id: 1,
          orderBy: 1,
          mainText: 'Main Text de la première séquence',
        },
        {
          id: 2,
          orderBy: 2,
          mainText: ' Main Text de la deuxième séquence ',
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
