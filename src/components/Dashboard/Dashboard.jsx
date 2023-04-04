import { useState } from 'react';

import ContactForm from 'components/ContactForm/ContactForm';
import Filter from 'components/Filter/Filter';
import ContactList from 'components/ContactList/ContactList';
import Modal from 'components/Modal/Modal';

import { Container } from './Dashboard.styled';
import { Button } from 'react-bootstrap';

const Dashboard = () => {
  const [showModal, setShowModal] = useState(false);


  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <Container className='w-50'>
      <h1 className='mb-4'>Phonebook</h1>
      <Button variant='secondary' type="button" onClick={toggleModal}>
        Add contact
      </Button>
      {showModal && (
        <Modal onClose={toggleModal}>
          <ContactForm onSubmit={toggleModal} />
        </Modal>
      )}

      <h2 className='mb-3'>Contacts</h2>
      <Filter />
      <ContactList />
    </Container>
  );
};

export default Dashboard;
