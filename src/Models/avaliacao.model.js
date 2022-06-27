import mongoose, { Collection } from "mongoose"

const avaliacao = new mongoose.Schema(
  {
    nome: String,
    nota: Number,
    avaliacao: String,
  },
  { Collection: "livroInfo" }
)

export default avaliacao
