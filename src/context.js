import React from 'react';

const Context = React.createContext();

const reducer = (state, action) => {
  console.log(state, action.payload);

  switch (action.type) {
    case 'DELETE_CONTACT':
      return {
        ...state,
        contacts: state.contacts.filter(
          contact => contact.id !== action.payload
        )
      };
    default:
      return state;
  }
};

export class Provider extends React.Component {
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
        email: 'stefanie.fritzel@googlemail.com',
        phone: '0176636346'
      },
      {
        id: 3,
        name: 'Emil Fritzel',
        email: 'emil.fritzel@gmail.com',
        phone: '0176635306'
      }
    ],
    dispatch: action => {
      this.setState(state => reducer(state, action));
    }
  };

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
