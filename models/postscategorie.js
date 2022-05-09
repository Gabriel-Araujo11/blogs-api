module.exports = (sequelize, _DataTypes) => {
  const postCategorie = sequelize.define('PostsCategorie', {}, {
    timestamps: false,
  });

  postCategorie.associate = (models) => {
    models.Categories.belongsToMany(models.BlogPosts, {
      as: 'posts',
      through: postCategorie,
      foreignKey: 'categoryId',
      otherKey: 'postId',
    });
    models.BlogPosts.belongsToMany(models.Categories, {
      as: 'categories',
      through: postCategorie,
      foreignKey: 'postId',
      otherKey: 'categoryId',
    });
  };

  return postCategorie;
};
