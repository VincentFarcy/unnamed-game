// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router';

// == Import local
import './style.scss';
import Field from '../UserFormField';

const UserPage = ({
  currentPseudo,
  currentEmail,
  pseudo,
  email,
  errorMessages,
  editMode,
  deleteMode,
  isLogged,
  changeField,
  setEditMode,
  setDeleteMode,
  editUser,
  deleteUser,
}) => {
  //
  const handleSubmit = (evt) => {
    evt.preventDefault();
    switch (true) {
      case editMode:
        editUser(); break;
      case deleteMode:
        deleteUser(); break;
      default:
    }
  };

  if (!isLogged) {
    return (
      <Redirect to="/" />
    );
  }
  return (
    <div className="form-container">
      <form className="form" onSubmit={handleSubmit}>
        <h2 className="form__title">Compte utilisateur</h2>

        {/* pseudo = input field */}
        {/* currentPseudo = connected user field */}
        <Field
          placeholder="Pseudo"
          name="pseudo"
          type="text"
          onChange={changeField}
          value={editMode ? pseudo : currentPseudo}
          required
          disabled={!editMode}
          min={3}
          max={20}
        />

        {/* email = input field */}
        {/* currentEmail = connected user field */}
        <Field
          placeholder="Email"
          name="email"
          type="email"
          onChange={changeField}
          value={editMode ? email : currentEmail}
          required
          disabled={!editMode}
          min={5}
          max={250}
        />

        {/* button to activate edit or delete mode */}
        { (!editMode && !deleteMode) && (
          <div className="enable-actions">
            <button
              type="button"
              className="enable-actions__link"
              onClick={setEditMode}
            >
              Modifier le compte
            </button>
            <button
              type="button"
              className="enable-actions__link"
              onClick={setDeleteMode}
            >
              Supprimer le compte
            </button>
          </div>
        )}

        {/* button to validate or cancel, edit or delete action */}
        { (editMode || deleteMode) && (
          <div className="actions">
            <button
              type="submit"
              className="actions-button"
            >
              {editMode ? 'Valider' : 'Suppression définitive !'}
            </button>
            <button
              type="button"
              className="actions-button"
              onClick={deleteMode ? setDeleteMode : setEditMode}
            >
              Annuler
            </button>
          </div>
        )}

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
UserPage.propTypes = {
  currentPseudo: PropTypes.string.isRequired,
  currentEmail: PropTypes.string.isRequired,
  pseudo: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  errorMessages: PropTypes.array.isRequired,
  editMode: PropTypes.bool.isRequired,
  deleteMode: PropTypes.bool.isRequired,
  isLogged: PropTypes.bool.isRequired,
  changeField: PropTypes.func.isRequired,
  setEditMode: PropTypes.func.isRequired,
  setDeleteMode: PropTypes.func.isRequired,
  editUser: PropTypes.func.isRequired,
  deleteUser: PropTypes.func.isRequired,
};

// Valeurs par défaut pour les props

// == Export
export default UserPage;
