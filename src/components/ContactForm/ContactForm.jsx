import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addContact } from '../../redux/contacts/contactsOperations';
import { selectContacts } from '../../redux/contacts/contactsSelectors';
import css from './ContactForm.module.css';

export const ContactForm = () => {
    const dispatch = useDispatch();
    const contacts = useSelector(selectContacts);

    const [name, setName] = useState('');
    const [number, setNumber] = useState('');

    const handleNameChange = e => {
        setName(e.target.value);
    }

    const handleNumberChange = e => {
        setNumber(e.target.value);
    }

    const handleSubmit = e => {
        e.preventDefault();

        if(name.trim() === '' || number.trim() === '') {
            return;
        }

        const existingContact = contacts.find(contact => contact.name.toLowerCase() === name.toLowerCase());
        if(existingContact){
            alert(`${name} is already in contacts!`);
            return;
        }

        dispatch(addContact({ name, number }));

        setName('');
        setNumber('');
    }

    return(
        <form onSubmit={handleSubmit} className={css.form}>
        <label className={css.formField}>
            <p className={css.formLabel}>Name</p>
            <input
                type="text"
                name="name"
                // add \ before - in [' \-] to make it work (LMS)
                pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan."
                required
                value={name}
                onChange={handleNameChange}
            />
        </label>
        <label className={css.formField}>
            <p className={css.formLabel}>Number</p>
            <input
                type="tel"
                name="number"
                // add \ before - in [\-.\s] to make it work (LMS)
                pattern="\+?\d{1,4}?[\-.\s]?\(?\d{1,3}?\)?[\-.\s]?\d{1,4}[\-.\s]?\d{1,4}[\-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
                value={number}
                onChange={handleNumberChange}
            />
        </label>
        <button type="submit" className={css.formButton}>
            Add Contact
        </button>
    </form>
    )
}