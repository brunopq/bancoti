export interface ICacheService<TKey, TValue> {
  get(key: TKey): Promise<TValue | undefined>
  set(key: TKey, value: TValue, ttl?: number): Promise<void>
  delete(key: TKey): Promise<void>
  clear(): Promise<void>
  has(key: TKey): Promise<boolean>
}
