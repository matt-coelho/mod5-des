import Sequelize from "sequelize"
import dbseq from "../Database/seqdb.js"

const cliente = dbseq.define("clientes", {
  clienteId: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
  },
  nome: { type: Sequelize.STRING, allowNull: false },
  email: { type: Sequelize.STRING, allowNull: false },
  senha: { type: Sequelize.STRING, allowNull: false },
  telefone: { type: Sequelize.STRING, allowNull: false },
  endereco: { type: Sequelize.STRING, allowNull: false },
})

export default cliente
