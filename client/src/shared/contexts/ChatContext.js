import React from 'react'

const ChatContext = React.createContext({})

export const ChatProvider = ChatContext.Provider
export const ChatConsumer = ChatContext.Consumer
export default ChatContext

// ---------------------------------------------------

// import React from 'react'

// export const layout = {
//   config: {
//     appTitle: '',
//     sidebar: true,
//     auth: false,
//     match: {},
//     location: {},
//     history: {}
//   }
// }

// export const LayoutContext = React.createContext({
//   config: layout.config,
//   toggleSideBar: () => {}
// })
