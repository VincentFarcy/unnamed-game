// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import local
import './style.scss';
import Field from '../UserFormField';

const SignIn = ({
  userId,
  password,
  changeField,
  handleSignIn,
  errorMessages,
  setUserErrorMessage,
}) => {
  //
  const handleSubmit = (evt) => {
    evt.preventDefault();
    handleSignIn();
  };

  return (
    <div className="form-container">
      <form className="form" onSubmit={handleSubmit}>
        <h2 className="form__title">Connexion</h2>

        <Field
          placeholder="Pseudo ou email"
          name="userId"
          type="text"
          onChange={changeField}
          value={userId}
          required
        />
        <Field
          placeholder="Mot de passe"
          name="password"
          type="password"
          onChange={changeField}
          value={password}
          required
        />

        <div className="actions">
          <button
            type="submit"
            className="actions-button"
          >
            Valider
          </button>
        </div>

        <p>{errorMessages}</p>

      </form>
    </div>
  );
};

// == Props validation
SignIn.propTypes = {
  userId: PropTypes.string,
  password: PropTypes.string,
  changeField: PropTypes.func.isRequired,
  handleSignIn: PropTypes.func.isRequired,
  errorMessages: PropTypes.array.isRequired,
  setUserErrorMessage: PropTypes.func.isRequired,
};

// Valeurs par défaut pour les props
SignIn.defaultProps = {
  userId: '',
  password: '',
};

// == Export
export default SignIn;
