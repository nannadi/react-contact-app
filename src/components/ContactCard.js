import React from "react";
import { Link } from 'react-router-dom';

const ContactCard = (props) => {
    const {id, name, email} = props.contact;
    return (
        <div>
            <Link to={{pathname: `/contact/${id}`, state: {contact: props.contact}}}>
                <span>{name}</span>
                <span>  {email}</span>
            </Link>
            <Link to={{pathname: `/delete/${id}`, state: {contact: props.contact}}}>
                <button type='submit'>Delete</button>
            </Link>
        </div>
    )
}

export default ContactCard;