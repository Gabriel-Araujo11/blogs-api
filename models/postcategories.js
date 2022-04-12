const postCategories = (sequelize, DataTypes) => {
  const postCategorie = sequelize.define('postcategories', {
    postId: DataTypes.INTEGER,
    categoryId: DataTypes.INTEGER,
  }, {
    tableName: 'categories',
    timestamps: false,
  });

  return postCategorie;
};

module.exports = postCategories;