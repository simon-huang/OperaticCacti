import React from 'react'
import axios from 'axios'
import FormComponent from './formComponent'
import FormTextArea from './formTextArea'
import SubmitButton from './SubmitButton'
import { createTour, setTourItem } from '../actions/tourActions'
import { handleItemChange } from '../helpers/changeHandlers'

export default class Create extends React.Component {
  constructor(props) {
    super(props);

    this.handleItemChange = handleItemChange.bind(null, setTourItem);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.dispatch(createTour(this.props.inCreation));
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="form-horizontal">
        <div className="space" />
        <div className="space" />

        <h1 className="text-center">Experience worth spreading</h1>
        <div className="space" />

        <FormComponent name='title' value={this.props.inCreation.title} onChange={this.handleItemChange} />
        <FormComponent name='image' value={this.props.inCreation.image} onChange={this.handleItemChange} />
        <FormComponent name='price' value={this.props.inCreation.price} onChange={this.handleItemChange} />
        <FormComponent name='time' value={this.props.inCreation.time} onChange={this.handleItemChange} />
        <FormTextArea rows={8} cols={80} name='description' value={this.props.inCreation.description} onChange={this.handleItemChange} />

        <SubmitButton />
      </form>
    );
  }
}
