module.exports = (sequelize, _DataTypes) => {
  const postCategorie = sequelize.define('PostCategorie', {}, {
    timestamps: false,
  });

  postCategorie.associate = (models) => {
    models.Categorie.belongsToMany(models.BlogPost, {
      as: 'posts',
      through: postCategorie,
      foreignKey: 'categoryId',
      otherKey: 'postId',
    });
    models.BlogPost.belongsToMany(models.Categorie, {
      as: 'categories',
      through: postCategorie,
      foreignKey: 'postId',
      otherKey: 'categoryId',
    });
  };

  return postCategorie;
};
