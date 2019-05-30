import React from 'react';
import { Link } from 'react-router-dom';

const FriendList = (props) => {
    return (
        <div className='friend-list-wrapper'>
          {props.friends.map(f => (
            <div className='friend-card' key={f.id}>
              <h3><Link to={`/friends/${f.id}`}>{f.name}</Link></h3>
            </div>
          ))}
       </div>
    )
}

export default FriendList