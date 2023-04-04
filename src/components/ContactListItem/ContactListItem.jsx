import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';
import { Item } from './ContactListItem.styled';
import { Button } from 'react-bootstrap';

const ContactListItem = ({ contact: { name, number, id } }) => {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContact(id));

  return (
    <Item className="d-flex align-items-center">
      {name}: {number} <Button variant='secondary' onClick={handleDelete}>Delete</Button>
    </Item>
  );
};

export default ContactListItem;
ContactListItem.propTypes = {
  contact: PropTypes.object,
};
