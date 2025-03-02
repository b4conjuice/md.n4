'use server'

import 'server-only'

import { and } from 'drizzle-orm'

import { db } from '@/server/db'

export async function getNote(id: number) {
  const note = await db.query.notes.findFirst({
    where: (model, { eq }) => and(eq(model.id, id)),
  })

  return note
}
