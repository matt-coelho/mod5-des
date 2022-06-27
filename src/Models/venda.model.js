import Sequelize from "sequelize"
import dbsec from "../Database/seqdb.js"
import cliente from "./cliente.model.js"
import livro from "./livro.model.js"

const venda = dbsec.define("vendas", {
  vendaId: {
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  valor: { type: Sequelize.FLOAT, allowNull: false },
  data: { type: Sequelize.DATE, allowNull: false },
})

venda.belonsTo(cliente, { foreignKey: "clienteId" })
venda.belonsTo(livro, { foreignKey: "livroId" })

export default venda
