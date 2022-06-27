import Informacao from "../Models/informacao.model.js"
import connect from "../Database/mongoosedb.js"

async function create(informacao) {
  try {
    const mongoose = await connect()
    const livroAvaliacao = mongoose.model("livroInfo", Informacao)
    informacao = new livroAvaliacao(informacao)
    await informacao.save()
  } catch (err) {
    throw err
  }
}

async function read(informacao) {
  try {
    const mongoose = await connect()
    const livroAvaliacao = mongoose.model("livroInfo", Informacao)
    const qry = livroAvaliacao.findOne({ livroId: informacao.livroId })
    return await qry.exec()
  } catch (err) {
    throw err
  }
}

async function update(informacao) {
  try {
    const mongoose = await connect()
    const livroAvaliacao = mongoose.model("livroInfo", Informacao)
    await livroAvaliacao.findOneAndUpdate(
      { livroId: informacao.livroId },
      informacao
    )
  } catch (err) {
    throw err
  }
}

async function remove(informacao) {
  try {
    const mongoose = await connect()
    const livroAvaliacao = mongoose.model("livroInfo", Informacao)
    await livroAvaliacao.deleteOne({ _id: informacao.id })
  } catch (err) {
    throw err
  }
}

export default { create, read, update, remove }
