import { configureStore } from '@reduxjs/toolkit';
import { devToolsEnhancer } from '@redux-devtools/extension';
import contactsSlice from 'redux/contacts/contactsSlice';
import filterSlice from 'redux/contacts/filterSlice';
import authSlice from 'redux/auth/authSlice';

const enhancer = devToolsEnhancer();

const store = configureStore(
  {
    reducer: { contacts: contactsSlice, filter: filterSlice, auth: authSlice },
  },
  enhancer
);

export default store;
