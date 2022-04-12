const User = (sequelize, DataTypes) => {
  const user = sequelize.define('user', {
    displayName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.INTEGER,
    image: DataTypes.BLOB,
  }, {
    tableName: 'user',
    timestamps: false,
  });

  return user;
};

module.exports = User;