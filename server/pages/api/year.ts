import { NextApiRequest, NextApiResponse } from 'next'
import { createYearOfProgress } from '~/components/Year'

export default (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { label, bgColor } = req.query as { [key: string]: string }
    const yearOfProgress = createYearOfProgress({ label, bgColor })
    res.setHeader('Content-Type', 'image/svg+xml')
    res.status(200).end(yearOfProgress)
  } catch (err) {
    res.status(404).json({ statusCode: 404, message: (err as any).message })
  }
}
