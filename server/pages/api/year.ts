import { NextApiRequest, NextApiResponse } from 'next'
import { createYearOfProgress } from '~/components/Year'

export default (_req: NextApiRequest, res: NextApiResponse) => {
  try {
    const yearOfProgress = createYearOfProgress()
    res.setHeader('Content-Type', 'image/svg+xml')
    res.status(200).end(yearOfProgress)
  } catch (err) {
    res.status(404).json({ statusCode: 404, message: err.message })
  }
}
