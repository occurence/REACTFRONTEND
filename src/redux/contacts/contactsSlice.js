import { createSlice } from '@reduxjs/toolkit';
import { logOut } from '../auth/authOperations';
// import { fetchContacts, addContact, deleteContact, editContact } from './contactsOperations';
import { fetchContacts, addContact, deleteContact } from './contactsOperations';

const handlePending = state => {
  state.isLoading = true;
  state.isError = null;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.isError = action.payload;
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    isError: null,
  },
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.pending, handlePending)
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = null;
        state.items = action.payload;
      })
      .addCase(fetchContacts.rejected, handleRejected)
      .addCase(addContact.pending, handlePending)
      .addCase(addContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = null;
        state.items.push(action.payload);
      })
      .addCase(addContact.rejected, handleRejected)
      .addCase(deleteContact.pending, handlePending)
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = null;
        const index = state.items.findIndex(
          contact => contact.id === action.payload.id
        );
        state.items.splice(index, 1);
      })
      .addCase(deleteContact.rejected, handleRejected)
      // .addCase(editContact.pending, handlePending)
      // .addCase(editContact.fulfilled, (state, action) => {
      //   state.isLoading = false;
      //   state.isError = null;
      //   const updatedContact = action.payload;
      //   state.items = state.items.map(item => 
      //       item.id === updatedContact.id ? updatedContact : item);
      // })
      // .addCase(editContact.rejected, handleRejected)
      .addCase(logOut.fulfilled, state => {
        state.items = [];
        state.isError = null;
        state.isLoading = false;
      });
  },
});

export const contactsReducer = contactsSlice.reducer;
