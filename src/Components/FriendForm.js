import React, { Component } from 'react';

class FriendForm extends Component {
    state = {
        friend: this.props.activeItem || {
            name: '',
            age: '',
            email: ''
        }
    };

    componentDidUpdate(prevProps) {
        if (
          this.props.activeItem &&
          prevProps.activeItem !== this.props.activeItem
        ) {
          this.setState({
            friend: this.props.activeItem
          });
        }
      }

      changeHandler = ev => {
        ev.persist();
        let value = ev.target.value;
    
        this.setState(prevState => ({
          friend: {
            ...prevState.friend,
            [ev.target.name]: value
          }
        }));
      };

handleSubmit = e => {
    if (this.props.activeItem) {
      this.props.updateItem(e, this.state.friend);
    } else {
      this.props.addFriend(e, this.state.friend);
    }
    this.setState({
      friend: {
        name: '',
        age: '',
        email: ''
      }
    });
  };


render() {
    return (
    <div className='form-wrapper'>
        <h2>Add a Friend</h2>
    <form onSubmit={this.handleSubmit}>
        <input 
            type='text'     
            name='name'
            placeholder='Name...'
            value={this.state.friend.name}
            onChange={this.changeHandler}
        />
        <input  
            type='number'     
            name='age'
            placeholder='Age...'
            value={this.state.friend.age}
            onChange={this.changeHandler}
        />
        <input  
            type='email'     
            name='email'
            placeholder='Email...'
            value={this.state.friend.email}
            onChange={this.changeHandler}
        />

        <button>Save New Friend</button>
    </form>
    </div>
    )}
}

export default FriendForm