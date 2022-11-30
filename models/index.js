const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
  process.env.DB_DATABASE,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: "mysql",
    logging: false,
  }
);

const connectDb = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connected to db");
  } catch (e) {
    console.log(e);
  }
};

connectDb();

const User = require("./user")(sequelize);
const Event = require("./event")(sequelize);
const Venue = require("./venue")(sequelize);
const Favorites = require("./favorites")(sequelize);
const Artist = require("./artist")(sequelize);

sequelize.sync({ alter: true });

const db = {
  sequelize,
  User,
  Event,
  Venue,
  Favorites,
  Artist,
};

module.exports = db;
