export type Movement = {
  id: string
  createdAt: Date
  updatedAt: Date
  lawsuitId: string
  type: string
  title: string
  description: string

  // metadata, business logic should ignore
  _judiceId?: number | null
}
