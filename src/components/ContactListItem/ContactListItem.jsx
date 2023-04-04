import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';
import { Button } from 'react-bootstrap';

const ContactListItem = ({ contact: { name, number, id } }) => {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContact(id));

  return (
    <li className="d-flex align-items-center justify-content-between list-group-item mb-1">
      {name}: {number} <Button variant='secondary' onClick={handleDelete}>Delete</Button>
    </li>
  );
};

export default ContactListItem;
ContactListItem.propTypes = {
  contact: PropTypes.object,
};
