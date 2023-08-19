import React from 'react'
import PropTypes from 'prop-types'

const Form = ({ errorMessage, onSubmit }) => (
  <form onSubmit={onSubmit}>
    <label>
      <span>Type your GitHub username</span>
      <input type="text" name="username" required />
    </label>

    <button type="submit">Login</button>

    {errorMessage && <p className="error">{errorMessage}</p>}
  </form>
)

export default Form

Form.propTypes = {
  errorMessage: PropTypes.string,
  onSubmit: PropTypes.func,
}
