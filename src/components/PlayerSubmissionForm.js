import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './PlayerSubmissionForm.css';

const PlayerSubmissionForm = ({fields, index, sendSubmission}) => {
  let emptyBoxes = {}
  for (let i = 0; i < fields.length; i++) {
    if (fields[i].key) {
      emptyBoxes[fields[i].key] = ''
    }
  }

  const [wordFields, setWordFields] = useState(emptyBoxes);

  const onInputChange = event => {
    const newWordFields = {
      ...wordFields
    };

    newWordFields[event.target.name] = event.target.value;
    setWordFields(newWordFields);
  };

  const onFormSubmit = event => {
    event.preventDefault();

    const poemLine = fields.map((field) => {
      if (field.key) {
        return wordFields[field.key]
      } else {
        return field
      }
    }).join(' ');

    sendSubmission(poemLine);
    setWordFields(emptyBoxes);

  };

  const inputValid = (input) => {
    return input !== '' // return true if valid, else false if empty string
  }

  const inputBoxes = fields.map((field, i) => {
    if (field.key) {
      return <input key={i} name={field.key} placeholder={field.placeholder} onChange={onInputChange} value={wordFields[field.key]} type="text" className={inputValid(wordFields[field.key]) ? 'valid' : 'PlayerSubmissionFormt__input--invalid'} />
    } else {
      return <div key={i}>{field}</div>
    }
  })



  return (
    <div className="PlayerSubmissionForm">
      <h3>Player Submission Form for Player #{index}</h3>

      <form className="PlayerSubmissionForm__form" onSubmit={onFormSubmit} >

        <div className="PlayerSubmissionForm__poem-inputs">

          {inputBoxes}          

        </div>

        <div className="PlayerSubmissionForm__submit">
          <input type="submit" value="Submit Line" className="PlayerSubmissionForm__submit-btn" />
        </div>
      </form>
    </div>
  );
}

PlayerSubmissionForm.propTypes = {
  index: PropTypes.number.isRequired,
  sendSubmission: PropTypes.func.isRequired,
  fields: PropTypes.arrayOf(PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.shape({
      key: PropTypes.string.isRequired,
      placeholder: PropTypes.string.isRequired,
    }),
  ])).isRequired,
}

export default PlayerSubmissionForm;
