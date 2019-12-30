import React, { useContext } from 'react'

import chatContext from '@contexts/chatContext'

const Input = ({ setMessage, sendMessage, message }) => {
  const [{ menu }] = useContext(chatContext)

  return (
    <form className={`form-input ${menu ? 'active' : null}`}>
      <input
        className="input"
        type="text"
        placeholder="Type a message..."
        value={message}
        onChange={({ target: { value } }) => setMessage(value)}
        onKeyPress={event =>
          event.key === 'Enter' ? sendMessage(event) : null
        }
      />
      <button className="send-button" onClick={e => sendMessage(e)}>
        Send
      </button>
    </form>
  )
}

export default Input
