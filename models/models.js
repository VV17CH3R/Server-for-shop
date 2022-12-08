const sequelize = require('../db')
const {DataTypes} = require('sequelize')

const User = sequelize.define('user', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique:true},
    password: {type: DataTypes.STRING, unique:false},
    role: {type: DataTypes.STRING, defaultValue: 'USER'},
})

const Basket = sequelize.define('basket', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})

const BasketSeedling = sequelize.define('basket_seedling', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})

const Seedling = sequelize.define('seedling', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique:true, allowNull:false},
    price: {type: DataTypes.INTEGER, allowNull:false},
    rating: {type: DataTypes.INTEGER, allowNull:false},
    img:  {type: DataTypes.STRING, allowNull:false},
})

const SeedClass = sequelize.define('seed_class', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique:true, allowNull:false},
})

const Country = sequelize.define('country', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique:true, allowNull:false},
})

const Rating = sequelize.define('rating', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    rate: {type: DataTypes.INTEGER, allowNull:false},
})

const SeedlingInfo = sequelize.define('seedling_info', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    title: {type: DataTypes.STRING, allowNull:false},
    description: {type: DataTypes.STRING, allowNull:false},
})

const CountrySeedClass = sequelize.define('country_seed_class',{
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
} )

User.hasOne(Basket)
Basket.belongsTo(User)

User.hasMany(Rating)
Rating.belongsTo(User)

Basket.hasMany(BasketSeedling)
BasketSeedling.belongsTo(Basket)

Seedling.hasMany(Rating)
Rating.belongsTo(Seedling)

Seedling.hasMany(BasketSeedling)
BasketSeedling.belongsTo(Seedling)

Seedling.hasMany(SeedlingInfo)
SeedlingInfo.belongsTo(Seedling)

SeedClass.hasMany(Seedling)
Seedling.belongsTo(SeedClass)

Country.hasMany(Seedling)
Seedling.belongsTo(Country)

Country.belongsToMany(SeedClass, {through: CountrySeedClass})
SeedClass.belongsToMany(Country, {through: CountrySeedClass})

module.exports = {
    User,
    Basket,
    BasketSeedling,
    Seedling,
    SeedClass,
    Rating,
    SeedlingInfo,
    Country,
    CountrySeedClass
}