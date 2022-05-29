import prisma from 'libs/prisma'

export default async function handle (req, res) {
  const { method } = req

  switch (method) {
  case 'GET':
    try {
      const phones = await prisma.phone.findMany()

      res.status(200).json({ success: true, data: phones })
    } catch (err) {
      res.status(400).json({
        success: false,
        message: err.message
      })
    }
    break

  case 'POST':
    try {
      const { data } = req.body

      const phone = await prisma.phone.create({ data })

      res.status(200).json({ success: true, data: phone })
    } catch (err) {
      res.status(400).json({
        success: false,
        message: err.message
      })
    }
    break
  default:
    res.status(400).json({
      success: false,
      message: 'Method not allowed'
    })
  }
}
