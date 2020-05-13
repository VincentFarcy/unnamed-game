// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router';

// == Import local
import '../UserPage/style.scss';
import Field from '../UserFormField';

const SignIn = ({
  userId,
  password,
  errorMessages,
  isLogged,
  changeField,
  handleSignIn,
}) => {
  //
  const handleSubmit = (evt) => {
    evt.preventDefault();
    handleSignIn();
  };

  if (isLogged) {
    return (
      <Redirect to="/play" />
    );
  }

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

        <ul className="error-message-list">{}
          {errorMessages.map((message) => (
            <li className="error-message" key={message}>
              {message}
            </li>
          ))}
        </ul>

      </form>
    </div>
  );
};

// == Props validation
SignIn.propTypes = {
  userId: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  errorMessages: PropTypes.array.isRequired,
  isLogged: PropTypes.bool.isRequired,
  changeField: PropTypes.func.isRequired,
  handleSignIn: PropTypes.func.isRequired,
};

// Valeurs par défaut pour les props

// == Export
export default SignIn;
