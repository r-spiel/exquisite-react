import React from 'react';
import PropTypes from 'prop-types';
import './FinalPoem.css';

const FinalPoem = ({isSubmitted, submissions, revealPoem}) => {
  // can only call the revealPoem call back if submissions is not empty?? 

  const poemLines = submissions.map((line, i) => {
    return (
      <p key={i}>{line}</p>
    )
  })

  if ( isSubmitted ) {
    return (
      <div className="FinalPoem">
        <section className="FinalPoem__poem">
          <h3>Final Poem</h3>

          {poemLines}
        </section>
      </div>
    );
  } else {
    return (
      <div className="FinalPoem">
  
        <div className="FinalPoem__reveal-btn-container">
          <input type="button" value="We are finished: Reveal the Poem" className="FinalPoem__reveal-btn" onClick={revealPoem} />
        </div>
      </div>
    );
  }


}

FinalPoem.propTypes = {
  isSubmitted: PropTypes.bool.isRequired,
  submissions: PropTypes.arrayOf(PropTypes.string).isRequired,
  revealPoem: PropTypes.func.isRequired,
};

export default FinalPoem;
