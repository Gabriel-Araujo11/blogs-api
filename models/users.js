const Users = (sequelize, DataTypes) => {
  // console.log(sequelize, DataTypes);
  const user = sequelize.define('User', {
    displayName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.INTEGER,
    image: DataTypes.STRING,
  }, {
    timestamps: false,
  });

  user.associate = (models) => {
    user.hasMany(models.BlogPost,
      { foreignKey: 'userId', as: 'posts' });
  };
  return user;
};

module.exports = Users;
