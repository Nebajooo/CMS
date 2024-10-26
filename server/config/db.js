// module.exports = {
//   db: "mongodb://127.0.0.1:27017/collage",
// };
// module.exports = {
//   db: process.env.MONGO_URI || "mongodb://localhost:27017/yourDatabaseName",
// };
// db.js
// const dbconfig = {
//   connectionString: "mongodb://127.0.0.1:27017/collage", // Update this string as needed
// };

// export default dbconfig;
// config/db.js
// const db = process.env.MONGO_URI || "mongodb://127.0.0.1:27017/collage"; // Fallback to local MongoDB

// export default { db };
const dbconfig = {
  connectionString: "mongodb://127.0.0.1:27017/collage", // Update this string as needed
};

export default dbconfig;
