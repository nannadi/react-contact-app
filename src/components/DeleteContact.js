import React from 'react';

const DeleteContact = (props) => {
    const {id, name, email} = props.location.state.contact;
    const deleteContact = () => {
        props.removeContactHandler(id);
        navigateToHome();
    }

    const navigateToHome = () => {
        props.history.push('/');
    }

    return (
        <div>
            <h2>Are you sure you want to delete this Item</h2>
            <div>{id}</div>
            <div>{name}</div>
            <div>{email}</div>
            <button type='submit' onClick={deleteContact} >Confirm</button>
            <button type='submit' onClick={navigateToHome}>Cancel</button>
        </div>
    )
}

export default DeleteContact;