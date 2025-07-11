import { injectable } from "inversify"

import type { ICacheService } from "@/domain/services/ICacheService.ts"

@injectable()
export class InMemoryCacheService<TKey, TValue>
  implements ICacheService<TKey, TValue>
{
  private cache = new Map<TKey, { value: TValue; expiresAt?: number }>()

  async get(key: TKey): Promise<TValue | undefined> {
    const entry = this.cache.get(key)

    if (!entry) return undefined

    if (entry.expiresAt && Date.now() > entry.expiresAt) {
      this.cache.delete(key)
      return undefined
    }

    return entry.value
  }

  async set(key: TKey, value: TValue, ttl?: number): Promise<void> {
    const expiresAt = ttl ? Date.now() + ttl * 1000 : undefined
    this.cache.set(key, { value, expiresAt })
  }

  async delete(key: TKey): Promise<void> {
    this.cache.delete(key)
  }

  async clear(): Promise<void> {
    this.cache.clear()
  }

  async has(key: TKey): Promise<boolean> {
    return this.cache.has(key) && (await this.get(key)) !== undefined
  }
}
