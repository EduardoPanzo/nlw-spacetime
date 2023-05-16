import fastify from 'fastify'
import { prisma } from './lib/prisma'

const app = fastify()

app.get('/users', async () => {
  const users = await prisma.user.findMany()

  return users
})

app.listen({ port: 3333 }).then(() => {
  console.log('rodando em localhost:3333')
})
