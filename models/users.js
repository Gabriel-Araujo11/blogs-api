module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    displayName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.INTEGER,
    image: DataTypes.STRING,
  }, {
    timestamps: false,
  });

  // Snippets criado com a ajuda de Vinícius Tanaka;
  User.associate = (models) => {
    User.hasMany(models.BlogPosts,
      { foreignKey: 'userId', as: 'posts' });
  };
  return User;
};
