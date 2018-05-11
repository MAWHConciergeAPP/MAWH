// for MAW child and admin
// GBK Note: Added userID for the login works.  Assumed that user_name is a long name
//           added password field and function to prototype definition for hashing

// require bcrypt -- this hashes passwords so the users' passwords aren't visible locally
var bcrypt = require("bcrypt-nodejs");


module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define("User", {
        user_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        userID: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        island: DataTypes.STRING,
        airline: DataTypes.STRING,
        arrivalDateTime: DataTypes.DATE,
        departureDateTime: DataTypes.DATE,
        chapter: DataTypes.STRING,
        isAdmin: DataTypes.BOOLEAN
    }, {
        timestamps: false
    });

    User.associate = function(models) {
        User.belongsTo(models.Contact, {
            foreignKey: {notNull: true}
        });

        User.hasMany(models.Schedule);
    };

    // creates a function for the User model.  Uses bcrypt to translate the non-hashed password to the hashed version and compare to the stored hashed version.  
    User.prototype.validPassword = function(password) {
        return bcrypt.compareSync(password, this.password);
    };

    // hooks are events that can be sequenced in with sequelize.  In this case, we take the user submitted password and convert to a hashed password using bcrypt
    // the salt value is 10.  Some tutorials I've seen recommend using >=12
    User.hook("beforeCreate",function(user){
        user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null);
    });

    return User;
};