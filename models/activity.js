module.exports = function(sequelize, DataTypes) {
    var Activity = sequelize.define("Activity", {
        activity_name: DataTypes.STRING,
        streetAddress: DataTypes.STRING,
        city: DataTypes.STRING,
        island: DataTypes.STRING,
        phone: DataTypes.STRING,
        durationInMinutes: DataTypes.INTEGER,
        url: DataTypes.STRING,
        keyword: DataTypes.STRING,
        notes: DataTypes.STRING
    }, {
        timestamps: false
    });

    Activity.associate = function(models) {
        Activity.belongsTo(models.Category, {
            foreignKey: {notNull: true}
        });

        Activity.hasMany(models.Schedule, {as: "activityID"});
    };
    
    return Activity;
};