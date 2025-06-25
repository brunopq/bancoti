export type JMapper<J, D> = {
  toDomain: (j: J) => D
  toJudice: (d: D) => J
}
