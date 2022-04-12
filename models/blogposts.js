const blogPosts = (sequelize, DataTypes) => {
  const blogpost = sequelize.define('blogposts', {
    id: DataTypes.INTEGER,
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    published: DataTypes.DATETIME,
    updated: DataTypes.DATETIME,
  }, {
    tableName: 'blogposts',
    timestamps: false,
  });

  return blogpost;
};

module.exports = blogPosts;