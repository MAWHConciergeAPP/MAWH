module.exports = function(sequelize, DataTypes) {
    var Schedule = sequelize.define("Schedule", {
        startTime: DataTypes.TIME,
        userID: DataTypes.STRING,
        activityID: DataTypes.STRING
    }, {
        timestamps: false
    });

    return Schedule;
};