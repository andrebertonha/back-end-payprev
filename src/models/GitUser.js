const {Sequelize , Model} = require('sequelize');

class GitUser extends Model {
  static init(sequelize) {
    super.init(
      {
        login: Sequelize.STRING,
        name: Sequelize.STRING,
        bio: Sequelize.STRING,
        location: Sequelize.STRING,
        html_url: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(models.User, { foreignKey: 'user_id', as: 'user' });
    this.hasMany(models.Tag, { foreignKey: 'gituser_id', as: 'user_tags' });
  }

}

module.exports = GitUser;
