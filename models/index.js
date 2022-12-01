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

// Adress relation
Adress.belongTo(User);
User.hasOne(Adress);
Adress.belongTo(Venue);
Venue.hasOne(Adress);
// Join table
Event.belongToMany(Artist, { through: "artist_event" });
Artist.hasMany(Event, { through: "artist_event" });
// Favorites relations
Favorites.hasMany(Artist);
Artist.belongTo(Favorites);
Favorites.belongTo(User);
User.hasMany(Favorites);
Favorites.belongTo(Event);
Event.hasMany(Favorites);
Favorites.belongTo(Venue);
Venue.hasMany(Favorites);
// Event relations
Event.belongTo(User);
User.hasMany(Event);
Event.hasMany(Order);
Order.belongTo(Event);
Event.belongTo(Venue);
Venue.hasMany(Event);
// Order relations
Order.belongTo(Payement);
Payement.belongTo(Order);
Order.belongTo(User);
User.hasMany(Order);
// Payement relation
Payement.belongTo(Order);
Order.belongTo(Payement);
// User relation
User.hasMany(Order);
Order.belongTo(User);
User.hasMany(Event);
Event.belongTo(User);
User.hasMany(Favorites);
Favorites.belongTo(User);
User.hasOne(Adress);
Adress.belongTo(User);
User.hasMany(Comment);
Comment.belongTo(User);
User.hasMany(Like);
Like.belongTo(User);
// Like relations
Like.belongTo(Comment);
Comment.hasMany(Like);
Like.belongTo(User);
User.hasMany(Like);
// Comment relations
Comment.hasMany(Like);
Like.belongTo(Comment);
Comment.belongTo(User);
User.hasMany(Comment);
Comment.belongTo(Event);
Comment.belongTo(Venue);
Event.hasMany(Comment);
Venue.hasMany(Comment);
// Venue relations
Venue.hasMany(Favorites);
Favorites.belongTo(Venue);
Venue.hasMany(Comment);
Venue.hasMany(Event);

// ------------------------------------------------

sequelize.sync({ alter: true });

const db = {
  sequelize,
  Adress,
  Artist,
  ArtistEvent,
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
