import { injectable } from "inversify"
import { createClient, type RedisClientType } from "redis"

import { env } from "@/utils/env.ts"

import type { ICacheService } from "@/domain/services/ICacheService.ts"

@injectable()
export class RedisCacheService<TKey, TValue>
  implements ICacheService<TKey, TValue>
{
  private client: RedisClientType
  private connected = false

  constructor() {
    this.client = createClient({
      url: env.REDIS_URL,
    })

    this.client.on("error", (err) => {
      console.error("Redis Client Error:", err)
    })

    this.client.on("connect", () => {
      console.log("Connected to Redis")
      this.connected = true
    })

    this.client.on("disconnect", () => {
      console.log("Disconnected from Redis")
      this.connected = false
    })
  }

  private async ensureConnection(): Promise<void> {
    if (!this.connected) {
      await this.client.connect()
    }
  }

  private keyToString(key: TKey): string {
    return typeof key === "string" ? key : JSON.stringify(key)
  }

  async get(key: TKey): Promise<TValue | undefined> {
    try {
      await this.ensureConnection()
      const value = await this.client.get(this.keyToString(key))

      if (value === null) return undefined

      return JSON.parse(value) as TValue
    } catch (error) {
      console.error("Redis get error:", error)
      return undefined
    }
  }

  async set(key: TKey, value: TValue, ttl?: number): Promise<void> {
    try {
      await this.ensureConnection()
      const serializedValue = JSON.stringify(value)
      const keyString = this.keyToString(key)

      if (ttl) {
        await this.client.setEx(keyString, ttl, serializedValue)
      } else {
        await this.client.set(keyString, serializedValue)
      }
    } catch (error) {
      console.error("Redis set error:", error)
      throw new Error(`Failed to set cache key: ${error}`)
    }
  }

  async delete(key: TKey): Promise<void> {
    try {
      await this.ensureConnection()
      await this.client.del(this.keyToString(key))
    } catch (error) {
      console.error("Redis delete error:", error)
      throw new Error(`Failed to delete cache key: ${error}`)
    }
  }

  async clear(): Promise<void> {
    try {
      await this.ensureConnection()
      await this.client.flushDb()
    } catch (error) {
      console.error("Redis clear error:", error)
      throw new Error(`Failed to clear cache: ${error}`)
    }
  }

  async has(key: TKey): Promise<boolean> {
    try {
      await this.ensureConnection()
      const exists = await this.client.exists(this.keyToString(key))
      return exists === 1
    } catch (error) {
      console.error("Redis has error:", error)
      return false
    }
  }

  async disconnect(): Promise<void> {
    if (this.connected) {
      await this.client.disconnect()
    }
  }
}
