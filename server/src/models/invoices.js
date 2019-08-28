'use strict';
module.exports = (sequelize, DataTypes) => {
  const Invoices = sequelize.define('Invoices', {
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4
    },
    name: DataTypes.STRING,
    amount_paid: DataTypes.INTEGER,
    total_due: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        Invoices.hasMany(models.Transactions, {
          foreignKey: 'InvoicesId',
          onDelete: 'CASCADE'
        });
        Invoices.belongsTo(models.User, {
          foreignKey: 'UserId',
          onDelete: 'CASCADE'
        });
      }
    }
  });
  Invoices.associate = function(models) {
    Invoices.belongsTo(models.User)
  };
  return Invoices;
};
