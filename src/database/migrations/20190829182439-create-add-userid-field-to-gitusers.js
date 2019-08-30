'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'git_users',
      'user_id',
      {
        type: Sequelize.INTEGER,
        references: { model: 'users', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        allowNull: true,
      },
    )
  },

  down: (queryInterface) => {
    return queryInterface.removeColumn('git_users', 'user_id');
  }
};
