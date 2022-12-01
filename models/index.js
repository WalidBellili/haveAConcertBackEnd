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
Event.belongToMany(Artist, { through: "artist_event" });
Artist.hasMany(Event, { through: "artist_event" });

// Adress relation
Adress.belongTo(User);
Adress.belongTo(Venue);

// Artist relation
Artist.hasMany(Favorites);

// Comment relations
Comment.hasMany(Like);
Comment.belongTo(User);
Comment.belongTo(Event);
Comment.belongTo(Venue);

// Event relations
Event.belongTo(User);
Event.hasMany(Order);
Event.belongTo(Venue);

// Favorites relations
Favorites.belongTo(Artist);
Favorites.belongTo(User);
Favorites.belongTo(Event);
Favorites.belongTo(Venue);

// Like relations
Like.belongTo(Comment);
Like.belongTo(User);

// Order relations
Order.belongTo(Payement);
Order.belongTo(User);
Order.belongTo(Payement);

// Payement relation
Payement.belongTo(Order);

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
Venue.belongTo(Adress);

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
