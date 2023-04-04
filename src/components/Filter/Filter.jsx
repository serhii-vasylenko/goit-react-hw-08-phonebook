import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/contacts/filterSlice';
import { selectFilter } from 'redux/contacts/selectors';
import { Form } from 'react-bootstrap';

const Filter = () => {
  const value = useSelector(selectFilter);
  const dispatch = useDispatch();
  const handleFilter = ({ currentTarget }) => {
    dispatch(setFilter(currentTarget.value));
  };

  return (
    <Form.Group className="mb-3">
      <Form.Label className='font-weight-bold'>Find contacts by Name:</Form.Label>
      <Form.Control
        type="text"
        value={value}
        onChange={handleFilter}
        placeholder="Type contact name"
      />
    </Form.Group>
  );
};

export default Filter;
