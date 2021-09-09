// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = { 
  id: string,
  name: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ id: '1',  name: 'John Doe' })
}

// export default function demo1(
//   req: NextApiRequest,
//   res: NextApiResponse<Data>
// ) {
//   const { pid } = req.query
//   res.end(`Post: ${pid}`)
// }