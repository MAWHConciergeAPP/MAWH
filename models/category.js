export default function (sequelize, DataTypes) {
    var Category = sequelize.define("Category", {
        description: DataTypes.STRING
    });

    Category.associate = function (models) {
        Category.belongsTo(models.Activity, {
            foreignKey: { notNull: true }
        });
        
        return Category;
    };
}