import { useDispatch } from 'react-redux';
import { deleteContact } from '../../../redux/contacts/contactsOperations';
import css from './ContactListItem.module.css';

export const ContactListItem = ({ filteredContact }) => {
    const dispatch = useDispatch();

    const handleDelete = () => {
        dispatch(deleteContact(filteredContact.id));
    }
    return(
        <li className={css.contactListItem}>
            {filteredContact.name}: {filteredContact.number}
            <button onClick={handleDelete}>Delete</button>
        </li>
    )
}