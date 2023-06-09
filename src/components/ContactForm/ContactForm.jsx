import PropTypes from 'prop-types';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { Button, Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';

import { addContact } from 'redux/contacts/operations';
import { selectContacts } from 'redux/contacts/selectors';

const ContactForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const handleChange = ({ target }) => {
    const { name, number } = target.form.elements;
    setName(name.value);
    setNumber(number.value);
  };

  const handleSubmit = evt => {
    evt.preventDefault();

    const isMatch = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
    if (isMatch) {
      // alert(`${name} is already in contacts list!`);
      toast.warning(`${name} is already in contacts list!`)
      return;
    }


    dispatch(addContact({name, number}));
    setName('');
    setNumber('');
    onSubmit();
  };

  return (
    <Form onSubmit={handleSubmit} autoComplete="off">
      <Form.Group className="mb-3">
        <Form.Label>Name:</Form.Label>
        <Form.Control
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
          placeholder='Enter name'
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Number:</Form.Label>
        <Form.Control
          type="text"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={number}
          placeholder='Enter number'
          onChange={handleChange}
        />
      </Form.Group>
      <Button variant="secondary" type="submit">
        Add contact
      </Button>
    </Form>
  );
};

export default ContactForm;
ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
