const Sequelize, { Model } = require('sequelize');

class Tag extends Model {
  static init(sequelize) {
    super.init(
      {
        tags: Sequelize.ARRAY(Sequelize.STRING),
      },
      {
        sequelize,
      }
    );
    return this;
  }
  static associate(models) {
    this.belongsTo(models.GitUser, { foreignKey: 'gituser_id', as: 'user_tags' });
  }
}

export default Tag;
