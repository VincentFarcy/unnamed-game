// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router';

// == Import local
import '../UserPage/style.scss';
import Field from '../UserFormField';

const SignUp = ({
  pseudo,
  email,
  password,
  confirmPassword,
  ageChecked,
  errorMessages,
  isLogged,
  changeField,
  handleSignUp,
  sendErrorMessages,
}) => {
  //
  const handleSubmit = (evt) => {
    evt.preventDefault();

    const inputErrorMessages = [];

    // eslint-disable-next-line no-useless-escape
    const passwordRegex = RegExp('^(?=.{8,})(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*\.\+\<\>])');
    if (!passwordRegex.test(evt.currentTarget.password.value)) {
      inputErrorMessages.push('Le mot de passe doit contenir au moins 8 caractères, dont au moins une minuscule, une majuscule, un chiffre et un caractère spécial.');
    }

    if (evt.currentTarget.password.value !== evt.currentTarget.confirmPassword.value) {
      inputErrorMessages.push('Erreur lors de la confirmation du mot de passe.');
    }

    if (inputErrorMessages.length > 0) {
      sendErrorMessages(inputErrorMessages);
    }
    else {
      handleSignUp();
    }
  };

  if (isLogged) {
    return (
      <Redirect to="/play" />
    );
  }

  return (
    <div className="form-container">
      <form className="form" onSubmit={handleSubmit}>
        <h2 className="form__title">Créer un compte</h2>

        <Field
          placeholder="Pseudo"
          name="pseudo"
          type="text"
          onChange={changeField}
          value={pseudo}
          required
          min={3}
          max={20}
        />
        <Field
          placeholder="Email"
          name="email"
          type="email"
          onChange={changeField}
          value={email}
          required
          min={5}
          max={250}
        />
        <Field
          placeholder="Mot de passe"
          name="password"
          type="password"
          onChange={changeField}
          value={password}
          required
          min={8}
        />
        <Field
          placeholder="Confirmation du mot de passe"
          name="confirmPassword"
          type="password"
          onChange={changeField}
          value={confirmPassword}
          required
          min={8}
        />
        <Field
          placeholder="Je confirme avoir plus de 12 ans."
          name="ageChecked"
          type="checkbox"
          onChange={changeField}
          value={ageChecked ? 'ageChecked' : ''}
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

        <ul className="error-message-list">
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
SignUp.propTypes = {
  pseudo: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  confirmPassword: PropTypes.string.isRequired,
  ageChecked: PropTypes.bool.isRequired,
  errorMessages: PropTypes.array.isRequired,
  isLogged: PropTypes.bool.isRequired,
  changeField: PropTypes.func.isRequired,
  handleSignUp: PropTypes.func.isRequired,
  sendErrorMessages: PropTypes.func.isRequired,
};

// Valeurs par défaut pour les props

// == Export
export default SignUp;
