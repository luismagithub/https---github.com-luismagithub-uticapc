import ContactInfo from './ContactInfo';
import ContactForm from './ContactForm';

import { ContactInfoStyle, ContactFormStyle} from '../../styles/style'

const ContactMain = () => {

    return (
        <>
            <ContactInfoStyle>
                <ContactInfo/>
            </ContactInfoStyle>
            <ContactFormStyle>
                <ContactForm/>
            </ContactFormStyle>
        </>
    );
};

export default ContactMain;