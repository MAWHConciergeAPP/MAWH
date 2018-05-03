module.exports = function(sequelize, DataTypes) {
    var Schedule = sequelize.define("Schedule", {
        startTime: DataTypes.TIME
    });

    Schedule.associate = function(models) {
        Schedule.hasMany(models.User, {as: "userID"});
        Schedule.hasMany(models.Activity, {as: "activityID"});
    };

    return Schedule;
};