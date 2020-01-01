import React, { useState, useEffect } from 'react'

import { ChatProvider } from '@contexts/chatContext'
import Header from '@components/Header'
import NavLeft from '@components/NavLeft'
import Main from '@components/Main'

const ChatLayout = ({ children }) => {
  const [chatConfig, setChatConfig] = useState({
    title: '',
    online: true,
    menu: true,
    users: [],
    room: '',
  })

  // useEffect(() => {
  //   console.log(chatConfig)
  // }, [chatConfig])

  return (
    <ChatProvider value={[chatConfig, setChatConfig]}>
      <NavLeft />
      <Header />
      <Main>{children}</Main>
    </ChatProvider>
  )
}

export default ChatLayout
