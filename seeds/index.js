const seedArtists = require('./artist-seeds');
const seedPaintings = require('./painting-seeds');
const seedSculptures = require('./sculpture-seeds');
const seedOthers = require('./other-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');
  await seedArtists();
  console.log('\n----- ARTISTS SEEDED -----\n');

  await seedPaintings();
  console.log('\n----- PAINTINGS SEEDED -----\n');

  await seedSculptures();
  console.log('\n----- TAGS SEEDED -----\n');

  await seedOthers();
  console.log('\n----- TAGS SEEDED -----\n');

  process.exit(0);
};

seedAll();