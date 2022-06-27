import Sequelize from "sequelize"
import dbsec from "../Database/seqdb.js"

const autor = dbsec.define("autores", {
  autorId: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  nome: { type: Sequelize.STRING, allowNull: false },
  email: { type: Sequelize.STRING, allowNull: false },
  telefone: { type: Sequelize.STRING, allowNull: false },
})

export default autor
