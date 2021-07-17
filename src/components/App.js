import './App.css';
import Header from './Header';
import AddContact from './AddContact';
import ContactList from './ContactList';
import { useEffect, useState } from 'react';
import { uuid } from 'uuidv4';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ContactDetail from './ContactDetail';
import DeleteContact from './DeleteContact';

function App() {
  const [contacts, setContacts] = useState([]);
  const LOCALSTORAGE_CONTACTS = 'contacts';

  const addContacthandler = (contact) => {
    setContacts([...contacts, {id: uuid(), ...contact}]);
  }

  useEffect(() => {
    const retrieveContacts = JSON.parse(localStorage.getItem(LOCALSTORAGE_CONTACTS));
    if(retrieveContacts) setContacts(retrieveContacts);
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCALSTORAGE_CONTACTS, JSON.stringify(contacts));
  }, [contacts]);

  const removeContactHandler = (id) => {
    const newContactsList = contacts.filter(contact => {
      return contact.id !== id;
    })
    setContacts(newContactsList);
  }

  return (
    <div className="App">
      <Router>
        <Header/>
        <Switch>
          <Route path='/' exact
            render={(props) => (<ContactList {...props} contacts={contacts} removeContactHandler={removeContactHandler} />)}>
          </Route>
          <Route path='/add' 
            render={(props) => (<AddContact {...props} addContacthandler={addContacthandler} />)}>
          </Route>
          <Route path='/contact/:id' component={ContactDetail}></Route>
          <Route path='/delete/:id' exact
            render={(props) => (<DeleteContact {...props} removeContactHandler={removeContactHandler} />)}>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
