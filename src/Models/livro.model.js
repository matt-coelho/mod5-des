import Sequelize from "sequelize"
import dbsec from "../Database/seqdb.js"
import autor from "./autor.model.js"

const livro = dbsec.define("livros", {
  livroId: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
  },
  nome: { type: Sequelize.STRING, allowNull: false },
  valor: { type: Sequelize.FLOAT, allowNull: false },
  estoque: { type: Sequelize.INTEGER, allowNull: false },
})

livro.belongsTo(autor, { foreignKey: "autorId" })

export default livro
