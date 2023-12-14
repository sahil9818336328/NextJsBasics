// the following HTTP methods are supported: GET, POST, PUT, PATCH, DELETE, HEAD, and OPTIONS. If an unsupported method is called, Next.js will return a 405 Method Not Allowed response.

import { NextResponse } from 'next/server'
import db from '@/utils/db'

export const GET = async (request) => {
  const tasks = await db.task.findMany()
  return Response.json({ data: tasks })
  // return NextResponse.json({ data: tasks });
}

export const POST = async (request) => {
  const data = await request.json()
  const task = await db.task.create({
    data: {
      content: data.content,
    },
  })
  return NextResponse.json({ data: task })
}
