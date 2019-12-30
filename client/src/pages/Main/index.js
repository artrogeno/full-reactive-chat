import React from 'react'

import ChatLayout from '@layouts/ChatLayout'
import Chat from '@pages/Chat'

const Main = props => {
  return (
    <ChatLayout>
      <Chat {...props} />
    </ChatLayout>
  )
}

export default Main
