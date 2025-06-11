export type Mapper<E, M> = {
  toDomain: (model: M) => E
  toPersistance: (entity: E) => M
}
