export interface Job {
  id: string
  name: string
  schedule: string
  enabled: boolean
  lastRun?: Date
  nextRun?: Date
  status: "running" | "idle" | "error"
}

export interface IJobScheduler {
  schedule(
    id: string,
    name: string,
    schedule: string,
    handler: () => Promise<void>,
    enabled?: boolean,
  ): void
  enable(id: string): boolean
  disable(id: string): boolean
  get(id: string): Job | undefined
  getAll(): Job[]
  destroy(id: string): boolean
  cleanup(): void
}
