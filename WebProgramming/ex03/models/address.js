module.exports = (sequelize, dataType) => {
    return sequelize.define('address', {
        id: {
          type: dataType.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        street: {
            type: dataType.STRING(150),
            allowNull: false
        },
        district: {
            type: dataType.STRING(50),
            allowNull: false
        },
        city: {
            type: dataType.STRING(80),
            allowNull: false
        },
        zipcode: dataType.STRING(9)
    })
}
