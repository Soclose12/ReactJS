import { Sequelize } from 'sequelize';
 
const db = new Sequelize('ki406', 'root', 'HardPlay12', {
    host: 'localhost',
    dialect: 'mysql'
});
 
export default db;
