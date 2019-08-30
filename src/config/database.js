require('dotenv/config');

module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: 'payprev',
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
