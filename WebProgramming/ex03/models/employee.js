module.exports = (sequelize, dataType) => {
  return sequelize.define('employee', {
    id: {
      type: dataType.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: dataType.STRING(100),
      allowNull: false
    },
    email: dataType.STRING(150),
    salary: dataType.FLOAT(2),
    birthdate: dataType.DATE
  })
}
