export type Mapper<E, D> = {
  toDomain: (dto: D) => E
  toDTO: (entity: E) => D
}
