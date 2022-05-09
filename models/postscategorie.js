module.exports = (sequelize, _DataTypes) => {
  const postCategorie = sequelize.define('PostCategorie', {}, {
    timestamps: false,
  });

  postCategorie.associate = (models) => {
    models.Categories.belongsToMany(models.BlogPost, {
      as: 'posts',
      through: postCategorie,
      foreignKey: 'categoryId',
      otherKey: 'postId',
    });
    models.BlogPost.belongsToMany(models.Categories, {
      as: 'categories',
      through: postCategorie,
      foreignKey: 'postId',
      otherKey: 'categoryId',
    });
  };

  return postCategorie;
};
