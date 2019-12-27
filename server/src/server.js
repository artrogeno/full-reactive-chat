import socketIO from 'socket.io'
import http from 'http'

import app from './app'
import { env } from './config/app'

const server = http.createServer(app)
const io = socketIO(server)

server.listen(env.PORT, () => console.log(`Listening on port: ${env.PORT}`))
