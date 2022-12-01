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

const Adress = require("./adress")(sequelize);
const Artist = require("./artist")(sequelize);

const Comment = require("./comment")(sequelize);
const Event = require("./event")(sequelize);
const Favorites = require("./favorites")(sequelize);
const Like = require("./like")(sequelize);
const Order = require("./order")(sequelize);
const Payement = require("./payement")(sequelize);
const User = require("./user")(sequelize);
const Venue = require("./venue")(sequelize);

// ------------ Relations -------------------------

// Join table
Event.belongsToMany(Artist, { through: "artist_event" });
Artist.belongsToMany(Event, { through: "artist_event" });

// Adress relation
Adress.belongsTo(User);
Adress.belongsTo(Venue);

// Artist relation
Artist.belongsTo(Favorites);

// Comment relations
Comment.hasMany(Like);
Comment.belongsTo(User);
Comment.belongsTo(Event);
Comment.belongsTo(Venue);

// Event relations
Event.belongsTo(User);
Event.hasMany(Order);
Event.belongsTo(Venue);

// Favorites relations
Favorites.hasMany(Artist);
Favorites.belongsTo(User);
Favorites.belongsTo(Event);
Favorites.belongsTo(Venue);

// Like relations
Like.belongsTo(Comment);
Like.belongsTo(User);

// Order relations
Order.belongsTo(Payement);
Order.belongsTo(User);
Order.belongsTo(Payement);

// Payement relation
Payement.belongsTo(Order);

// User relation
User.hasMany(Order);
User.hasMany(Event);
User.hasMany(Favorites);
User.hasOne(Adress);
User.hasMany(Comment);
User.hasMany(Like);

// Venue relations
Venue.hasMany(Favorites);
Venue.hasMany(Comment);
Venue.hasMany(Event);
Venue.belongsTo(Adress);

// ------------------------------------------------

sequelize.sync({ alter: true });

const db = {
  sequelize,
  Adress,
  Artist,
  Comment,
  Event,
  Favorites,
  Like,
  Order,
  Payement,
  User,
  Venue,
};

module.exports = db;
