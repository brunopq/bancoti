export interface IBaseRepository<T> {
  findById(id: string): Promise<T | null>
  findAll(): Promise<T[]>
  create(item: T): Promise<T>
  update(id: string, item: T): Promise<T | null>
  delete(id: string): Promise<void>
  count(): Promise<number>
  exists(id: string): Promise<boolean>
}
