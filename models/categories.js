const Categories = (sequelize, DataTypes) => {
    const categories = sequelize.define('Categorie', {
      id: DataTypes.INTEGER,
      name: DataTypes.STRING,
    }, {
      timestamps: false,
    });
  
    return categories;
  };
  
  module.exports = Categories;