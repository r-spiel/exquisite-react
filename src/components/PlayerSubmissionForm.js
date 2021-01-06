import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './PlayerSubmissionForm.css';

//props: player #, fields, sendSubmission callback function

const PlayerSubmissionForm = ({fields, index, sendSubmission}) => {
  const [wordFields, setWordFields] = useState({
    adj1: '',
    noun1: '',
    adverb: '',
    verb: '',
    adj2: '',
    noun2: '',
  });

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
      const newLine = {...wordFields};
      if (field.key) {
        return newLine[field.key]
      } else {
        return field
      }
    }).join(' ');

    sendSubmission(poemLine);

    setWordFields({
      adj1: '',
      noun1: '',
      adverb: '',
      verb: '',
      adj2: '',
      noun2: '',
    });
  };


  return (
    <div className="PlayerSubmissionForm">
      <h3>Player Submission Form for Player #{index}</h3>

      <form className="PlayerSubmissionForm__form" onSubmit={onFormSubmit} >

        <div className="PlayerSubmissionForm__poem-inputs">

          {/* {
            fields.map(field => (
              if (field.placeholder) {
                
              }
            ))
          } */}

            The 
            <input
              name="adj1"
              placeholder="adjective1"
              onChange={onInputChange}
              value={wordFields.adj1}
              type="text" 
            /> 
            
            <input
              name="noun1"
              placeholder="noun1"
              onChange={onInputChange}
              value={wordFields.noun1}
              type="text" 
            /> 
            
            <input
              name="adverb"
              placeholder="adverb1" 
              onChange={onInputChange}
              value={wordFields.adverb}
              type="text" 
            /> 
            
            <input
              name="verb"
              placeholder="verb1"
              onChange={onInputChange}
              value={wordFields.verb}
              type="text" 
            /> 
            the 
            
            <input
              name="adj2"
              placeholder="adjective2"
              onChange={onInputChange}
              value={wordFields.adj2}
              type="text" 
            /> 
            
            <input
              name="noun2"
              placeholder="noun2"
              onChange={onInputChange}
              value={wordFields.noun2}
              type="text" 
            />.
          

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
