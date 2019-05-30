import React from 'react';
import { Link } from 'react-router-dom';

const FriendList = (props) => {
    return (
        <div className='friend-list-wrapper'>
          {props.friends.map(f => (
            <div className='friend-card' key={f.id}>
              <h2>
                <Link to={`/friends/${f.id}`}>
                <ul>
                <li>{f.name}</li>
                <li>{f.age}</li>
                <li>{f.email}</li>
                </ul>
                </Link>
              </h2>
            </div>
          ))}
       </div>
    )
}

export default FriendList