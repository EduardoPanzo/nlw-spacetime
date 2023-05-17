import fastify from 'fastify'
import cors from '@fastify/cors'
import { memoriesRoutes } from './routes/memories.routes'

const app = fastify()

app.register(cors, {
  origin: true,
})

app.register(memoriesRoutes)

app.listen({ port: 3333 }).then(() => {
  console.log('rodando em localhost:3333')
})
