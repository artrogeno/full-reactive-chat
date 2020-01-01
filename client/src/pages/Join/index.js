import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import SVGInline from 'react-svg-inline'

import Storage from '@constants/storage'
import { setItem } from '@services/storage'
import helmetSvg from '@assets/images/helmet.svg'

const Join = ({ history }) => {
  const [name, setName] = useState('')
  const [room, setRoom] = useState('')

  const goTo = () => {
    if (name && room) {
      setItem(Storage.AUTH_NAME, name)
      setItem(Storage.AUTH_ROOM, room)
      history.push('/chat')
    }
  }

  return (
    <div className="full-container">
      <div className="wrap">
        <div className="header-logo">
          <SVGInline className="icon" svg={helmetSvg} />
          <div className="title">Chat</div>
        </div>
        <div className="form-auth">
          <input
            placeholder="Name ..."
            className="inputJoin"
            type="text"
            value={name}
            onChange={e => setName(e.target.value)}
          />
          <input
            placeholder="Room ..."
            className="inputJoin mt-20"
            type="text"
            value={room}
            onChange={e => setRoom(e.target.value)}
          />
          <button
            onClick={goTo}
            className="btn-auth"
            type="button"
            disabled={!name || !room || (!name && !room)}
          >
            Sign In
          </button>
        </div>
      </div>
    </div>
  )
}

export default Join
