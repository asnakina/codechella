import React from 'react';



function LoginForm(props) {
  return (
    <form onSubmit={props.onSubmit} className="login-form">
      <label>
        Username:
        <input type='text'
          name='name'
          value={props.name}
          onChange={props.onChange} />
      </label>
      <label>
        Password:
        <input
          type='text'
          name='password'
          value={props.hometown}
          onChange={props.onChange} />
      </label>

      <button type="submit">Submit</button>
    </form>
  )
}
export default LoginForm;
