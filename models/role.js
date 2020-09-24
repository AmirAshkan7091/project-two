module.exports = function (sequelize, DataTypes) {
    Role = sequelize.define("Role", {
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        salary: {
            type: DataTypes.STRING,
            allowNull: false
        },
        department_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        
    });
    return Role;
};