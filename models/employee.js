module.exports = function (sequelize, DataTypes) {
    Employee = sequelize.define("Employee", {
      first_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      last_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          isEmail: true,
        },
      },
      // : {
      //   type: DataTypes.INTEGER,
      //   allowNull: false,
      // },
    });
    return Employee;
  };