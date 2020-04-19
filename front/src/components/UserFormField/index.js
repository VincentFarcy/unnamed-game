/* eslint-disable jsx-a11y/label-has-associated-control */
// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import local
import './style.scss';

// == Composant
const Field = ({
  value,
  type,
  name,
  placeholder,
  onChange,
  required,
  disabled,
  min,
  max,
}) => {
  const handleChange = (evt) => {
    switch (type) {
      case 'checkbox':
        onChange(evt.target.checked, name);
        break;
      default:
        onChange(evt.target.value, name);
        break;
    }
  };

  const inputId = `field-${name}`;

  let classCss = 'field';
  if (value.length > 0) {
    classCss += ' field--has-content';
  }
  if (type === 'checkbox') {
    classCss += ' field--checkbox';
  }

  return (
    <div className={classCss}>
      <input
        value={value}
        checked={value !== ''}
        onChange={handleChange}
        id={inputId}
        type={type}
        className="field-input"
        name={name}
        required={required}
        minLength={min}
        maxLength={max}
        disabled={disabled}
      />

      <label
        htmlFor={inputId}
        className="field-label"
      >
        {placeholder}
      </label>
    </div>
  );
};

Field.propTypes = {
  value: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  required: PropTypes.bool,
  disabled: PropTypes.bool,
  min: PropTypes.number,
  max: PropTypes.number,
};

// Valeurs par défaut pour les props
Field.defaultProps = {
  value: '',
  type: 'text',
  required: false,
  disabled: false,
  min: 0,
  max: 999,
};

// == Export
export default Field;
