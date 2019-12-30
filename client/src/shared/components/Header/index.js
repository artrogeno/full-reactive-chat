import React, { useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { clear } from '@services/storage'
import chatContext from '@contexts/chatContext'

const Header = () => {
  const [{ room, menu, online }] = useContext(chatContext)

  const logout = () => {
    clear()
    window.location.replace('/')
    // history.push('/')
  }

  return (
    <header className={`header-top ${menu ? 'active' : ''}`}>
      <div className="wrap-room">
        <span className={`icon ${online ? 'on' : 'off'}`}>
          <FontAwesomeIcon icon={['fas', 'circle']} />
        </span>
        {room}
      </div>
      <div className="wrap-title">Header</div>
      <div className="wrap-user">
        <button onClick={logout}>
          <span className="icon color-white">
            <FontAwesomeIcon icon={['fas', 'times']} />
          </span>
        </button>
      </div>
    </header>
  )
}

export default Header
