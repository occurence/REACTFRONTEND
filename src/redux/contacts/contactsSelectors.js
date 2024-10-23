import { createSelector } from '@reduxjs/toolkit';
import { selectFilter } from '../filter/filterSelector';

export const selectContacts = state => state.contacts.items;
export const selectIsLoadingContacts = state => state.contacts.isLoading;
export const selectIsErrorContacts = state => state.contacts.isError;

export const selectFilteredContacts = createSelector(
    [selectContacts, selectFilter],
    (contacts, filter) => {
        return contacts.filter(({ name }) => 
            name.toLowerCase().includes(filter.toLowerCase())
        );
    }
)