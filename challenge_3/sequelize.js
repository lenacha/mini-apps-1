const Sequelize = require('sequelize');

const sequelize = new Sequelize('challenge3', 'yerin', 'yerin', {
  host: 'localhost',
  dialect: 'mysql',
  // storage: 'path/to/database.mysql'
});

const User = sequelize.define('user', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false
  },
});

const Address = sequelize.define('address', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  line1: {
    type: Sequelize.STRING,
    allowNull: false
  },
  line2: {
    type: Sequelize.STRING,
    allowNull: false
  },
  city: {
    type: Sequelize.STRING,
    allowNull: false
  },
  state: {
    type: Sequelize.STRING,
    allowNull: false
  },
  zipcode: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  phone: {
    type: Sequelize.STRING,
    allowNull: false,
  }
});

const Payment = sequelize.define('payment', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  cardNumber: {
    type: Sequelize.STRING,
    allowNull: false
  },
  expMonth: {
    type: Sequelize.STRING,
    allowNull: false
  },
  expYear: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  cvv: {
    type: Sequelize.STRING,
    allowNull: false
  },
  billingzip: {
    type: Sequelize.STRING,
    allowNull: false
  },
});


User.hasMany(Address);
User.hasMany(Payment);
sequelize.sync({force: true})
.then(() => {
  console.log('db is connected')
});
sequelize.authenticate()
module.exports = {
  User,
  Address,
  Payment
}