require('dotenv/config');
const URL_PG = process.env.DATABASE_URL;
module.exports = {


  if (URL_PG) {
    // the application is executed on Heroku ... use the postgres database
    sequelize = new Sequelize(process.env.DATABASE_URL, {
      dialect:  'postgres',
      protocol: 'postgres',
      logging:  true //false
    });
  },

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
