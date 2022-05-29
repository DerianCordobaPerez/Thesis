import prisma from 'libs/prisma'

export default async function handle (req, res) {
  const {
    method,
    query: { number }
  } = req

  switch (method) {
  case 'GET':
    try {
      const phone = await prisma.phone.findUnique({
        where: { number }
      })

      if (!phone) {
        res.status(500).json({ success: false })
      }

      res.status(200).json({ success: true, data: phone })
    } catch (err) {
      res.status(400).json({
        success: false,
        message: err.message
      })
    }
    break

  case 'PUT':
    try {
      const { data } = req.body

      const phone = await prisma.phone.update({
        where: { number },
        data
      })

      if (!phone) {
        res.status(500).json({ success: false })
      }

      res.status(200).json({ success: true, data: phone })
    } catch (err) {
      res.status(400).json({
        success: false,
        message: err.message
      })
    }
    break
  case 'DELETE':
    try {
      const phone = await prisma.phone.delete({
        where: { number }
      })

      if (!phone) {
        res.status(500).json({ success: false })
      }

      res.status(200).json({ success: true, data: {} })
    } catch (err) {
      res.status(400).json({
        success: false,
        message: err.message
      })
    }
  }
}
