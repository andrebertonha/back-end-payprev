'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'tags',
      'gituser_id',
      {
        type: Sequelize.INTEGER,
        references: { model: 'git_users', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        allowNull: true,
      },
    )
  },

  down: (queryInterface) => {
    return queryInterface.removeColumn('tags', 'gituser_id');
  }
};
