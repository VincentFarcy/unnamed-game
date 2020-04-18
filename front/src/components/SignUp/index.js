// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import local
import './style.scss';
// import { BASE_API_URI } from '../../app.config';
import Field from './Field';

const SignUp = ({
  pseudo,
  email,
  password,
  confirmPassword,
  ageChecked,
  changeField,
  handleSignUp,
  errorMessages,
  setUserErrorMessage,
}) => {
  //
  const handleSubmit = (evt) => {
    evt.preventDefault();

    // eslint-disable-next-line no-useless-escape
    const passwordRegex = RegExp('^(?=.{8,})(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])');
    if (!passwordRegex.test(evt.currentTarget.password.value)) {
      setUserErrorMessage('Le mot de passe doit contenir au moins 8 caractères, dont au moins une minuscule, une majuscule, un chiffre et un caractère spécial.');
      return;
    }

    if (evt.currentTarget.password.value !== evt.currentTarget.confirmPassword.value) {
      setUserErrorMessage('Erreur lors de la confirmation du mot de passe.');
      return;
    }

    handleSignUp();
  };

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

        <p>{errorMessages}</p>

      </form>
    </div>
  );
};

// == Props validation
SignUp.propTypes = {
  pseudo: PropTypes.string,
  email: PropTypes.string,
  password: PropTypes.string,
  confirmPassword: PropTypes.string,
  ageChecked: PropTypes.bool,
  changeField: PropTypes.func.isRequired,
  handleSignUp: PropTypes.func.isRequired,
  errorMessages: PropTypes.array.isRequired,
  setUserErrorMessage: PropTypes.func.isRequired,
};

// Valeurs par défaut pour les props
SignUp.defaultProps = {
  pseudo: '',
  email: '',
  password: '',
  confirmPassword: '',
  ageChecked: false,
};

// == Export
export default SignUp;
