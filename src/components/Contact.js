import React from 'react';
import PropTypes from 'prop-types';
import { Consumer } from '../context';

class Contact extends React.Component {
  state = {
    showContactInfo: false
  };

  onShowClick = e => {
    this.setState({ showContactInfo: !this.state.showContactInfo });
  };

  onDeleteClick = (id, dispatch) => {
    console.log(id);

    dispatch({ type: 'DELETE_CONTACT', payload: id });
  };

  render() {
    return (
      <Consumer>
        {value => {
          return (
            <div className="card card-body mb-3">
              <h4>
                {this.props.name}{' '}
                <i
                  onClick={e => {
                    this.onShowClick();
                  }}
                  className="fas fa-sort-down"
                  style={{ cursor: 'pointer' }}
                />
                <i
                  className="fas fa-times"
                  style={{ cursor: 'pointer', float: 'right', color: 'red' }}
                  onClick={e => {
                    console.log(this.props);

                    this.onDeleteClick(this.props.id, value.dispatch);
                  }}
                />
              </h4>
              {this.state.showContactInfo ? (
                <ul className="list-group">
                  <li className="list-group-item">Email: {this.props.email}</li>
                  <li className="list-group-item">Phone: {this.props.phone}</li>
                </ul>
              ) : null}
            </div>
          );
        }}
      </Consumer>
    );
  }
}

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired
};

export default Contact;
