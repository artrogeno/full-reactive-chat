import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import chatContext from '@contexts/chatContext'
import Users from '@components/Users'

const NavLeft = () => {
  const [chatConfig, setChatConfig] = useContext(chatContext)
  const [toggleUsers, setToggleUsers] = useState(true)

  const toggle = type => {
    let update = { ...chatConfig }
    update.menu = !chatConfig.menu

    if (type === 'users') {
      setToggleUsers(update.menu)
    }

    setChatConfig(update)
  }

  return (
    <nav className={`navleft ${chatConfig.menu ? 'active' : null}`}>
      <ul>
        <li>
          <Link to="/">
            <span className="icon">
              <FontAwesomeIcon icon={['fas', 'bell']} />
            </span>
          </Link>
        </li>
        <li>
          <Link to="/chat">
            <span className="icon">
              <FontAwesomeIcon icon={['fas', 'comment-alt']} />
            </span>
          </Link>
        </li>
        <li>
          <button onClick={() => toggle('users')}>
            <span className="icon">
              <FontAwesomeIcon icon={['fas', 'users']} />
            </span>
          </button>
        </li>
        <li className="bottom-nav">
          <button onClick={toggle}>
            <span className="icon">
              <FontAwesomeIcon icon={['fas', 'cogs']} />
            </span>
          </button>
        </li>
      </ul>
      <div className="containers">
        <div className="users">{toggleUsers ? <Users /> : <h1>Test2</h1>}</div>
      </div>
    </nav>
  )
}

export default NavLeft

/* <li className="bottom-nav">
      <button onClick={toggle}>
        <span className="icon">
          <FontAwesomeIcon
            icon={[
              'fas',
              `${chatConfig.menu ? 'toggle-on' : 'toggle-off'}`,
            ]}
          />
        </span>
      </button>
    </li> 
*/
