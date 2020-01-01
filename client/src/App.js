import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import ChatLayout from '@layouts/ChatLayout'
import Chat from '@pages/Chat'
import Join from '@pages/Join'
import Users from '@pages/Users'

const App = props => (
  <Router>
    <Switch>
      <Route path="/" exact component={Join} />

      <ChatLayout {...props}>
        <Route path="/chat" component={Chat} />
        <Route path="/users" component={Users} />
      </ChatLayout>
    </Switch>
  </Router>
)

export default App
