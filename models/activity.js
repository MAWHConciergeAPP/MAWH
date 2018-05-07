module.exports = function(sequelize, DataTypes) {
    var Activity = sequelize.define("Activity", {
        activity_name: DataTypes.STRING,
        streetAddress: DataTypes.STRING,
        city: DataTypes.STRING,
        stateAbbr: DataTypes.STRING,
        phone: DataTypes.STRING,
        lat: DataTypes.FLOAT,
        long: DataTypes.FLOAT,
        durationInMinutes: DataTypes.INTEGER,
        img_url: DataTypes.STRING,
        website_url: DataTypes.STRING,
        island: DataTypes.STRING,
        keyword: DataTypes.STRING,
        notes: DataTypes.STRING
    }, {
        timestamps: false
    });

    Activity.associate = function(models) {
        Activity.belongsTo(models.Category, {
            foreignKey: {notNull: true}
        });
    };
    
    return Activity;
};