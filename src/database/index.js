const Sequelize = require('sequelize');

const User = require('../models/User');
const GitUser = require('../models/GitUser');
const Tag = require('../models/Tag');

const databaseConfig = require('../config/database');
const { Client } = require('pg');

const models = [ User, GitUser, Tag ];

class Database {
  constructor() {
    this.init();
  }

  init() {

    if(process.env.DATABASE_URL) {
      const client = new Client({
        connectionString: process.env.DATABASE_URL,
        ssl: true
      });
      client.connect();
    }

    this.connection =  new Sequelize(databaseConfig);
    models.map(model => model.init(this.connection))
    .map(model => model.associate && model.associate(this.connection.models));
  }

}

module.exports = new Database();
