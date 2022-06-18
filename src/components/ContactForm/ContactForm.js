// import { PropTypes } from 'prop-types';
import { Component } from 'react';

import s from './ContactForm.module.css';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = ({ target }) => {
    const { name, value } = target;

    this.setState({ [name]: value });
  };

  handleSubmit = evt => {
    const { name, number } = this.state;
    evt.preventDefault();

    this.props.addContact(name, number);
    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;

    return (
      <form onSubmit={this.handleSubmit} className={s.form}>
        <label htmlFor="username" className={s.label}>
          Name
        </label>

        <input
          className={s.input}
          type="text"
          name="name"
          id="username"
          value={name}
          onChange={this.handleChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <label htmlFor="usernumber" className={s.label}>
          Number
        </label>
        <input
          className={s.input}
          type="tel"
          name="number"
          id="usernumber"
          value={number}
          onChange={this.handleChange}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />

        <button type="submit" className={s.btn}>
          Add contact
        </button>
      </form>
    );
  }
}

export default ContactForm;
