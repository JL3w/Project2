require("dotenv").config();
module.exports = 
{
  "development": {
    "username": "root",
    "password": process.env.CONFIG_PASSWORD,
    "database": "loadout_DB",
    "host": "localhost",
    "dialect": "mysql"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "testdb",
    "host": "localhost",
    "dialect": "mysql",
    "logging": false
  },
  "production": {
    "use_env_variable": "JAWSDB_URL",
    "dialect": "mysql"
  }
};
