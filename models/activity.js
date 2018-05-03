module.exports = function(sequelize, DataTypes) {
    var Activity = sequelize.define("Activity", {
        name: DataTypes.STRING,
        streetAddress: DataTypes.STRING,
        city: DataTypes.STRING,
        stateAbbr: DataTypes.STRING,
        lat: DataTypes.FLOAT,
        long: DataTypes.FLOAT,
        durationInMinutes: DataTypes.INTEGER,
        url: DataTypes.STRING,
        island: DataTypes.STRING
    });

    Activity.associate = function(models) {
        Activity.hasMany(models.Category, {as: "categoryID"});
        Activity.belongsTo(models.Schedule, {
            foreignKey: {notNull: true}
        });
    };
    
    return Activity;
}