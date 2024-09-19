import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('sistema_venda_ingressos', 'database', 'database1', {
  host: 'localhost',
  dialect: 'mysql'
});

export default sequelize;
