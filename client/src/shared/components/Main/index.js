import React, { useContext } from 'react'

import chatContext from '@contexts/chatContext'

const Main = ({ children }) => {
  const [{ menu }] = useContext(chatContext)

  return <main className={`main ${menu ? 'active' : null}`}>{children}</main>
}

export default Main
