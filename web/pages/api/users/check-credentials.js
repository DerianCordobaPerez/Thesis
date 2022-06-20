import prisma from 'libs/prisma'
import { hash256 } from 'utils/hash'
import { omit } from 'lodash'

export default async function handle (req, res) {
  const { method } = req

  switch (method) {
  case 'POST':
    await handlePost(req, res)
    break
  default:
    res.status(405).json({
      error: `Method ${method} not allowed`
    })
  }
}

async function handlePost (req, res) {
  const {
    body: { email, password }
  } = req

  const user = await prisma.user.findFirst({
    where: { email },
    select: {
      id: true,
      email: true,
      password: true,
      avatar: true
    }
  })

  if (user && hash256(password) === user.password) {
    res.status(200).json(omit(user, 'password'))
  } else {
    res.status(400).end('Invalid credentials')
  }
}
