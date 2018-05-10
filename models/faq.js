module.exports = function(sequelize, DataTypes) {
    var FAQ = sequelize.define("FAQ", {
        question: DataTypes.STRING,
        answer: DataTypes.STRING
    }, {
        timestamps: false
    });

    

    return FAQ;
};