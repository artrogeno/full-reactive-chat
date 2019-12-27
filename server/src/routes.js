import { Router } from 'express'

// import api from './api'

const routes = Router()

// routes.use('/api', api)

routes.get('/api', (req, res) => {
  res.status(200).json({ server: "Api it's works!" })
})

export default routes
