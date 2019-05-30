import React from 'react';
import { Link } from 'react-router-dom';

const FriendList = (props) => {
 function routeToFriend(ev, friend) {
    ev.preventDefault();
    props.history.push(`/friend-list/${friend.id}`);
  }
    return (
        <div className='friend-list-wrapper'>
          {props.friends.map(friend => (
            <div
              onClick={ev => routeToFriend(ev, friend)} 
              className='friend-card' 
              key={friend.id}>
              <h2>
                <Link to={`/friends/${friend.id}`}>
                <ul>
                <li>{friend.name}</li>
                <li>{friend.age}</li>
                <li>{friend.email}</li>
                </ul>
                </Link>
              </h2>
            </div>
          ))}
       </div>
    );
}

export default FriendList