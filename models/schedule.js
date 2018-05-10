module.exports = function(sequelize, DataTypes) {
    var Schedule = sequelize.define("Schedule", {
        startTime: DataTypes.TIME,
        activityDate: DataTypes.DATEONLY,
    }, {
        timestamps: false
    });

    Schedule.associate = function(models) {
    	Schedule.belongsTo(models.Activity, {
    		foreignKey: {notNull: true}
    	});
    	Schedule.belongsTo(models.User, {
    		foreignKey: {notNull: true}
    	});
    };

    return Schedule;
};