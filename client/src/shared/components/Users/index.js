import React, { useContext } from 'react'

import chatContext from '@contexts/chatContext'
import avatar from '@assets/images/chuck_norris.jpg'

const Users = () => {
  const [{ users }] = useContext(chatContext)

  return (
    <div className="users-container">
      <div className="users-toobar">
        <h2>Users</h2>
      </div>
      <div className="users-list">
        <nav>
          {users
            .flatMap(({ name }, i) => [
              <li key={name}>
                <div className="avatar">
                  <img src={avatar} alt="Avatar" />
                </div>
                <div className="info">
                  <h5>{name}</h5>
                  <p>Subtitles </p>
                </div>
              </li>,
              <li className="divider" key={`divider-${i}`} />,
            ])
            .slice(0, -1)}
        </nav>
      </div>
    </div>
  )
}

export default Users
