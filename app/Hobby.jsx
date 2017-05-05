import React, { PropTypes } from 'react';

function Hobby(props) {
  return (
    <li>{props.hobby}</li>
  );
}

Hobby.propTypes = {
  hobby: PropTypes.string.isRequired
};

export default Hobby;
