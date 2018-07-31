
import { sequelize } from '../sequelize';
import Sequelize from 'sequelize';


export const User = sequelize.define('user', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true
  },
  name: {
    type: Sequelize.STRING
  },
  priority: {
    type: Sequelize.TINYINT
  },
  description: {
    type: Sequelize.TEXT
  },
  duedate: {
    type: Sequelize.DATE
  }  
}, {
  // don't add the timestamp attributes (updatedAt, createdAt)
  timestamps: false,
});


