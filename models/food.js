module.exports = function(sequelize, DataTypes) {
	var Grindz = sequelize.define("Grindz", {
		name: DataTypes.STRING,
		streetAddress: DataTypes.STRING,
		city: DataTypes.STRING,
		island: DataTypes.STRING,
		phone: DataTypes.STRING,
		hours: DataTypes.STRING,
		img_url: DataTypes.STRING,
		website_url: DataTypes.STRING,
		keyword: DataTypes.STRING,
		price: DataTypes.STRING,
		notes: DataTypes.STRING
	}, {
		timestamps: false
	});

	return Grindz;
};