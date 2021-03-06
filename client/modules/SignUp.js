import React from 'react'
import FormComponent from './formComponent'
import SubmitButton from './SubmitButton'
import { setAuthInput, submitSignupUser } from '../actions/userActions'
import { handleItemChange } from '../helpers/changeHandlers'

export default class SignUp extends React.Component {
  constructor(props) {
    super(props);

    this.handleItemChange = handleItemChange.bind(null, setAuthInput);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.dispatch(submitSignupUser(this.props.authFormInput));
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="form-horizontal">
        <div className="space" />
        <div className="space" />

        <h1 className="text-center"> Sign up </h1>
        <div className="space" />

        <div className="form-group">
          <FormComponent name='username' value={this.props.authFormInput.username} onChange={this.handleItemChange} />
          <FormComponent name='password' value={this.props.authFormInput.password} onChange={this.handleItemChange} />
        </div>

        <SubmitButton />
      </form>
    );
  }
}
