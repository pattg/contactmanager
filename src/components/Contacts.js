import React from 'react';
import Contact from './Contact';
import { Consumer } from '../context';

class Contacts extends React.Component {
  render() {
    return (
      <Consumer>
        {value => {
          return (
            <React.Fragment>
              {value.contacts.map(contact => (
                <Contact
                  key={contact.id}
                  id={contact.id}
                  name={contact.name}
                  email={contact.email}
                  phone={contact.phone}
                />
              ))}
            </React.Fragment>
          );
        }}
      </Consumer>
    );
  }
}

export default Contacts;
