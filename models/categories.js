const Categories = (sequelize, DataTypes) => {
  const categories = sequelize.define('Categories', {
    id: DataTypes.INTEGER,
    name: DataTypes.STRING,
  }, {
    tableName: 'categories',
    timestamps: false,
  });

  return categories;
};

module.exports = Categories;