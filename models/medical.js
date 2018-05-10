module.exports = function(sequelize, DataTypes) {
	var Medical = sequelize.define("Medical", {
		facility: DataTypes.STRING,
		streetAddress: DataTypes.STRING,
		city: DataTypes.STRING,
		phone: DataTypes.STRING,
		island: DataTypes.STRING,
		url: DataTypes.STRING
	}, {
		timestamps: false
	});

	return Medical;
};