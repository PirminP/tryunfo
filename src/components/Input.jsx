import React from 'react';
import PropTypes from 'prop-types';

class Input extends React.Component {
  render() {
    const { type, name, testid, label, className, value, callback } = this.props;
    return (
      <label htmlFor={ name }>
        { label }
        <input
          data-testid={ testid }
          type={ type }
          name={ name }
          value={ value }
          className={ className }
          checked={ value }
          onChange={ callback }
        />
      </label>
    );
  }
}

Input.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  testid: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  callback: PropTypes.func.isRequired,
};

export default Input;
