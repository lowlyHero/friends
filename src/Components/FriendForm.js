import React, { Component } from 'react';

class FriendForm extends Component {
    state = {
        friend: this.props.activeItem || {
            name: '',
            age: '',
            email: ''
        }
    };

changeHandler = e => {
    
}

handleSubmit = e => {

}

render() {
    return (
    <div>
    <form onSubmit={this.handleSubmit}>
        <input 
            type='text'     
            name='name'
            placeholder='Name...'
            value={this.state.friend.name}
            onChange={this.changeHandler}
        />
        <input  
            type='text'     
            name='name'
            placeholder='Name...'
            value={this.state.friend.age}
            onChange={this.changeHandler}
        />
        <input  
            type='text'     
            name='name'
            placeholder='Name...'
            value={this.state.friend.email}
            onChange={this.changeHandler}
        />

        <button>Save New Friend</button>
    </form>
    </div>
    )}
}

export default FriendForm