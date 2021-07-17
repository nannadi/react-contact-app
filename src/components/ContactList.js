import React from "react";
import ContactCard from "./ContactCard";
import { Link } from 'react-router-dom';

const ContactList = (props) => {

    const deleteHandler = (id) => {
        props.removeContactHandler(id);
    }

    const renderContactsList = props.contacts.map(contact => {
        return(
            <ContactCard contact={contact} clickHandler={deleteHandler} key={contact.id}/>
        )
    })

    return(
        <div>
            <h2>Contact List
                <Link to={'/add'}>
                    <button>Add Contact</button>
                </Link>
            </h2>
            {renderContactsList}
        </div>
    )
}

export default ContactList;