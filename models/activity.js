module.exports = function(sequelize, DataTypes) {
    var Activity = sequelize.define("Activity", {
        activity_name: DataTypes.STRING,
        streetAddress: DataTypes.STRING,
        city: DataTypes.STRING,
        stateAbbr: DataTypes.STRING,
        lat: DataTypes.FLOAT,
        long: DataTypes.FLOAT,
        durationInMinutes: DataTypes.INTEGER,
        url: DataTypes.STRING,
        island: DataTypes.STRING,
        notes: DataTypes.STRING
    }, {
        timestamps: false
    });

    Activity.associate = function(models) {
        Activity.hasMany(models.Category, {as: "categoryID"});
        Activity.belongsTo(models.Schedule, {
            foreignKey: {notNull: true}
        });
    };
    
    return Activity;
};