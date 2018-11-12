import React from 'react';
import Contact from './Contact';

class Contacts extends React.Component {
  state = {
    contacts: [
      {
        id: 1,
        name: 'Patrik Gärtner',
        email: 'patrik.gaertner@gmail.com',
        phone: '017664378173'
      },
      {
        id: 2,
        name: 'Stefanie Fritzel',
        email: 'stefanie.fritzel@googlemail.com.com',
        phone: '0176636346'
      },
      {
        id: 3,
        name: 'Emil Fritzel',
        email: 'emil.fritzel@gmail.com',
        phone: '0176635306'
      }
    ]
  };

  render() {
    return (
      <div>
        {this.state.contacts.map(contact => (
          <Contact
            key={contact.id}
            name={contact.name}
            email={contact.email}
            phone={contact.phone}
          />
        ))}
      </div>
    );
  }
}

export default Contacts;
