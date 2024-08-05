import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    res.status(200).json({ message: 'Hello from the api!' })
  } else {
    // TODO
  }
}

/* export async function GET(request: Request) {
    return new Response('Hello, Next.js')
} */
