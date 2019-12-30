import socketIOClient from 'socket.io-client'
import { useEffect, useState, useRef } from 'react'

const useChat = () => {
  const [messages, setMessages] = useState([])
  const socketRef = useRef()

  const sendMessages = ({ message }) => {
    socketRef.current.emit('newChatmessage', { message })
  }

  useEffect(() => {
    socketRef.current = socketIOClient('http://localhost:5000/')

    socketRef.current.on('newChatmessage', ({ message }) => {
      setMessages(messages => [...messages, message])
    })

    return () => {
      socketRef.current.disconnect()
    }
  }, [])

  return { messages, sendMessages }
}

export default useChat
