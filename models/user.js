// for MAW child and admin
module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define("User", {
        user_name: DataTypes.STRING,
        chapter: DataTypes.STRING,
        isAdmin: DataTypes.BOOLEAN
    }, {
        timestamps: false
    });

    User.associate = function(models) {
        User.belongsTo(models.Schedule, {
            foreignKey: {
                notNull: true
            }
        });

        User.belongsTo(models.Contact, {
            foreignKey: {notNull: true}
        });
    };

    return User;
};