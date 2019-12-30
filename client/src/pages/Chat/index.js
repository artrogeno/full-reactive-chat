import React, { useState, useEffect, useContext, useRef } from 'react'
import socketIOClient from 'socket.io-client'
import Storage from '@constants/storage'
import { getItem, clear } from '@services/storage'

import chatContext from '@contexts/chatContext'
import Messages from '@components/Messages'
import Input from '@components/Input'
// import TextContainer from '@components/TextContainer'
import { ENV } from '@constants/app'

const Chat = ({ history }) => {
  const [chatConfig, setChatConfig] = useContext(chatContext)

  const socketRef = useRef()
  const [name, setName] = useState('')
  const [room, setRoom] = useState('')
  const [users, setUsers] = useState('')
  const [message, setMessage] = useState('')
  const [messages, setMessages] = useState([])

  useEffect(() => {
    const fetchRoom = () => {
      if (name === '' && room === '') {
        socketRef.current = socketIOClient(`${ENV.host}:${ENV.port}/`)
        const name = getItem(Storage.AUTH_NAME)
        const room = getItem(Storage.AUTH_ROOM)
        setName(name)
        setRoom(room)

        socketRef.current.emit('join', { name, room }, error => {
          if (error) {
            console.log('login error: ', error)
            setName('')
            setRoom('')
            clear()
            history.push('/')
          }
        })
      }
    }
    fetchRoom()
  })

  useEffect(() => {
    if (room !== chatConfig.room) {
      setChatConfig({ ...chatConfig, room })
    }
  }, [room, chatConfig])

  useEffect(() => {
    socketRef.current.on('message', message => {
      setMessages([...messages, message])
    })

    socketRef.current.on('roomData', ({ users }) => {
      setUsers(users)
    })

    return () => {
      socketRef.current.emit('disconnect')
      socketRef.current.off()
    }
  }, [messages])

  const sendMessage = e => {
    e.preventDefault()

    if (message) {
      socketRef.current.emit('sendMessage', message, () => setMessage(''))
    }
  }

  return (
    <div className="chat-container">
      <div className="container">
        <Messages messages={messages} name={name} />
        <Input
          message={message}
          setMessage={setMessage}
          sendMessage={sendMessage}
        />
      </div>
      {/* <TextContainer users={users} /> */}
    </div>
  )
}

export default Chat
