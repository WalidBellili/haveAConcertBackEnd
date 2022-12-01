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

Adress.belongsTo(User);
Adress.belongsTo(Venue);

Like.belongsTo(User);
Like.belongsTo(Comment);

User.hasMany(Like);
User.hasMany(Comment);
User.hasMany(Favorites);
User.belongsToMany(Event, { through: "user_event" });
User.hasMany(Order);
User.hasOne(Adress);

Order.belongsTo(User);
Order.belongsTo(Payement);
Order.belongsTo(Event);

Payement.hasMany(Order);

Comment.hasMany(Like);
Comment.belongsTo(User);
Comment.belongsTo(Event);
Comment.belongsTo(Venue);

Artist.belongsToMany(Event, { through: "artist_event" });
Artist.hasMany(Favorites);

Event.belongsToMany(Artist, { through: "artist_event" });
Event.belongsToMany(User, { through: "user_event" });
Event.hasMany(Order);
Event.belongsTo(Venue);
Event.hasMany(Comment);
Event.hasMany(Favorites);

Venue.hasMany(Event);
Venue.hasOne(Adress);
Venue.hasMany(Comment);
Venue.hasMany(Favorites);

Favorites.belongsTo(Artist);
Favorites.belongsTo(User);
Favorites.belongsTo(Event);
Favorites.belongsTo(Venue);
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
