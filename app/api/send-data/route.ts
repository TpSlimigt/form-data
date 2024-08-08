import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  const body = await req.json()
  const {
    name,
    company,
    email,
    date,
    participants,
    categories,
    specialRequest,
  } = body
  console.log(
    `Hello my name is ${name} and I work for ${company} and specialize in ${categories}.\nI have a group of ${participants} that would like to visit you on ${date}.\n${specialRequest}\nContact me on ${email}`,
  )

  return new NextRequest('OK')
}
