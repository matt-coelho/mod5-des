import Avaliacao from "../Models/avaliacao.model.js"
import connect from "../Database/mongoosedb.js"

async function create(avaliacao) {
  try {
    const mongoose = await connect()
    const livroAvaliacao = mongoose.model("livroInfo", Avaliacao)
    avaliacao = new livroAvaliacao(avaliacao)
    await avaliacao.save()
  } catch (err) {
    throw err
  }
}

async function read(avaliacao) {
  try {
    const mongoose = await connect()
    const livroAvaliacao = mongoose.model("livroInfo", Avaliacao)
    const qry = livroAvaliacao.findOne({ livroId: avaliacao.livroId })
    return await qry.exec()
  } catch (err) {
    throw err
  }
}

async function update(avaliacao) {
  try {
    const mongoose = await connect()
    const livroAvaliacao = mongoose.model("livroInfo", Avaliacao)
    await livroAvaliacao.findOneAndUpdate(
      { livroId: avaliacao.livroId },
      avaliacao
    )
  } catch (err) {
    throw err
  }
}

async function remove(avaliacao) {
  try {
    const mongoose = await connect()
    const livroAvaliacao = mongoose.model("livroInfo", Avaliacao)
    await livroAvaliacao.deleteOne({ _id: avaliacao.id })
  } catch (err) {
    throw err
  }
}

export default { create, read, update, remove }
