import React from 'react'
import propTypes from 'prop-types'

const Button = ({ text, onClick }) => (
    <button onClick={onClick} type="button">
      {text}
    </button>
)

Button.propTypes = {
  text: propTypes.string.isRequired,
  onClick: propTypes.func,
}

Button.defaultProps = {
  onClick: null,
}

export default Button