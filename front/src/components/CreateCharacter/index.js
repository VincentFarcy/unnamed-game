// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
import Button from '../LinkButton';


// == Import local
import './style.scss';


// == Component
const CreateCharacter = ({ AbilityList }) => (
  <div>
  <Button cssClassName="test" buttonName={AbilityList}></Button>
  </div>
);

// == Props validation
CreateCharacter.propTypes = {
  AbilityList: PropTypes.objectOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      value: PropTypes.number.isRequired,
    }),
  ).isRequired,
};


// == Export
export default CreateCharacter;
