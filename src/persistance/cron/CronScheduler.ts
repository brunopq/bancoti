import { injectable } from "inversify"
import * as cron from "node-cron"

import type { IJobScheduler, Job } from "./types.ts"

interface InternalJob extends Job {
  task: cron.ScheduledTask
}

@injectable()
export class NodeCronJobScheduler implements IJobScheduler {
  private jobs = new Map<string, InternalJob>()

  schedule(
    id: string,
    name: string,
    schedule: string,
    handler: () => Promise<void>,
    enabled = true,
  ): void {
    if (this.jobs.has(id)) {
      this.destroy(id)
    }

    const task = cron.schedule(schedule, async () => {
      const job = this.jobs.get(id)

      if (!job || !job.enabled) return

      try {
        job.status = "running"
        job.lastRun = new Date()

        await handler()

        job.status = "idle"
      } catch (error) {
        job.status = "error"
      }
    })

    if (enabled) {
      task.start()
    }

    const job: InternalJob = {
      id,
      name,
      schedule,
      enabled,
      status: "idle",
      task,
    }

    this.jobs.set(id, job)
  }

  enable(id: string): boolean {
    const job = this.jobs.get(id)
    if (!job) return false

    job.enabled = true
    job.task.start()
    return true
  }

  disable(id: string): boolean {
    const job = this.jobs.get(id)
    if (!job) return false

    job.enabled = false
    job.task.stop()
    return true
  }

  get(id: string): Job | undefined {
    const job = this.jobs.get(id)
    if (!job) return undefined

    // Return without the internal task property
    const { task, ...publicJob } = job
    return publicJob
  }

  getAll(): Job[] {
    return Array.from(this.jobs.values()).map((job) => {
      const { task, ...publicJob } = job
      return publicJob
    })
  }

  destroy(id: string): boolean {
    const job = this.jobs.get(id)
    if (!job) return false

    job.task.destroy()
    this.jobs.delete(id)
    return true
  }

  cleanup(): void {
    for (const id of this.jobs.keys()) {
      this.destroy(id)
    }
  }
}
