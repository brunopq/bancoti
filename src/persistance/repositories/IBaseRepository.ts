
export interface IBaseRepository<R, W = R> {
  findById(id: string): Promise<R | null>
  findAll(): Promise<R[]>
  create(item: W): Promise<R>
  update(id: string, item: Partial<W>): Promise<R | null>
  delete(id: string): Promise<void>
  count(): Promise<number>
  exists(id: string): Promise<boolean>
}
