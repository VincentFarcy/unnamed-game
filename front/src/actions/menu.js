// == Action types
export const TOGGLE_MENU = 'TOGGLE_MENU';

// == Action creators
export const toggleMenu = (toggle) => ({
  type: TOGGLE_MENU,
  toggle,
});
