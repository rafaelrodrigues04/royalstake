const { DataTypes } = require('sequelize')
const sequelize = require('../config/database')

const RefreshTokens = sequelize.define('RefreshTokens', {
    userId: {
        type: DataTypes.UUID,
        allowNull: false,
    },
    refreshToken: {
        type: DataTypes.STRING(255),
        allowNull: false,
        primaryKey: true,
    },
    createdAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
    },
    expiresAt: {
        type: DataTypes.DATE,
        allowNull: false,
    },
}, {
  timestamps: true,
  tableName: 'refresh_tokens',
  createdAt: 'createdAt',
});

module.exports = RefreshTokens;