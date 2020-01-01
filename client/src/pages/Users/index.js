import React, { useEffect, useContext } from 'react'

import chatContext from '@contexts/chatContext'
import onlineIcon from '@assets/images/onlineIcon.png'
import './Users.scss'

const Users = () => {
  const [{ users }, setChatConfig] = useContext(chatContext)
  // useEffect(() => {
  //   const fetchUsers =  () => {
  //     if (users.length === 0 ) {

  //     }
  //   }
  // })

  return (
    <div className="textContainer">
      <div>
        <h1>
          Realtime Chat Application{' '}
          <span role="img" aria-label="emoji">
            💬
          </span>
        </h1>
        <h2>
          Created with React, Express, Node and Socket.IO{' '}
          <span role="img" aria-label="emoji">
            ❤️
          </span>
        </h2>
        <h2>
          Try it out right now!{' '}
          <span role="img" aria-label="emoji">
            ⬅️
          </span>
        </h2>
      </div>
      {users ? (
        <div>
          <h1>People currently chatting:</h1>
          <div className="activeContainer">
            <h2>
              {users.map(({ name }) => (
                <div key={name} className="activeItem">
                  {name}
                  <img alt="Online Icon" src={onlineIcon} />
                </div>
              ))}
            </h2>
          </div>
        </div>
      ) : null}
    </div>
  )
}

export default Users
