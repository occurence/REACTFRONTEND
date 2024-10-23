import { ContactForm } from '../../components/ContactForm/ContactForm';
import { ContactList } from '../../components/ContactList/ContactList';
import { Filter } from '../../components/Filter/Filter';

const ContactsPage = () => {
    return(
        <div>CONTACTS PAGE
            <fieldset style={{ width: '400px' }}>
                <legend>New Contact</legend>
                <ContactForm />
            </fieldset>
            <fieldset style={{ width: '400px' }}>
                <legend>Phonebook</legend>
                <Filter/>
                <ContactList/>
            </fieldset>
        </div>
    )
}

export default ContactsPage;