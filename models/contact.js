module.exports = function(sequelize, DataTypes) {
    var Contact = sequelize.define("Contact", {
        chapter: DataTypes. STRING,
        phone: DataTypes.STRING
    });

    Contact.associate = function(models) {
        Contact.hasMany(models.User, {as: "userID"});
    };

    return Contact;
}