import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import chatContext from '@contexts/chatContext'

const NavLeft = () => {
  const [chatConfig, setChatConfig] = useContext(chatContext)

  const toggle = () => {
    let update = { ...chatConfig }
    update.menu = !chatConfig.menu
    setChatConfig(update)
  }

  return (
    <nav className={`navleft ${chatConfig.menu ? 'active' : null}`}>
      <li>
        <Link to="/">
          <span className="icon">
            <FontAwesomeIcon icon={['fas', 'bell']} />
          </span>
        </Link>
      </li>
      <li>
        <Link to="/">
          <span className="icon">
            <FontAwesomeIcon icon={['fas', 'comment-alt']} />
          </span>
        </Link>
      </li>
      <li>
        <Link to="/">
          <span className="icon">
            <FontAwesomeIcon icon={['fas', 'users']} />
          </span>
        </Link>
      </li>
      <li className="bottom-nav">
        <button onClick={toggle}>
          <span className="icon">
            <FontAwesomeIcon
              icon={['fas', `${chatConfig.menu ? 'toggle-on' : 'toggle-off'}`]}
            />
          </span>
        </button>
      </li>
      <li>
        <button onClick={toggle}>
          <span className="icon">
            <FontAwesomeIcon icon={['fas', 'cogs']} />
          </span>
        </button>
      </li>
    </nav>
  )
}

export default NavLeft
