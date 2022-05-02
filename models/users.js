const Users = (sequelize, DataTypes) => {
  const user = sequelize.define('users', {
    displayName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.INTEGER,
    image: DataTypes.STRING,
  }, {
    tableName: 'users',
    timestamps: false,
  });

  return user;
};

module.exports = { 
  Users,
};
