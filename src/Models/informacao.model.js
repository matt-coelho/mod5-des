import mongoose, { Collection } from "mongoose"
import avaliacao from "./avaliacao.model.js"

const informacao = new mongoose.Schema(
  {
    livroId: Number,
    descricao: String,
    paginas: Number,
    editora: String,
    avaliacoes: [avaliacao],
  },
  { Collection: "livroInfo" }
)

export default informacao
