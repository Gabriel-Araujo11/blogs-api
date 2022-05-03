module.exports = (sequelize, DataTypes) => {
  const blogpost = sequelize.define('BlogPost', {
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    userId: DataTypes.INTEGER,
  }, {
    timestamps: true,
    createdAt: 'published',
    updatedAt: 'updated',
  });

 blogpost.associate = (models) => {
   blogpost.belongsTo(models.User,
     { foreignKey: 'userId', as: 'user' });
 };

  return blogpost;
};
