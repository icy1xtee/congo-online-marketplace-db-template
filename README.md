## Information
**DrawSQL diagram** of database is located here: [Congo Online Marketplace SQL diagram](https://drawsql.app/teams/singleusage/diagrams/congo-merchshop-2-phase)

## Quick start

1. Git clone this repository
2. Run the command `npm i` in terminal to download all the libraries are used
3. Fix your database config file that located at `./db/config/database.json`

**Example:**
```
{
  "development": {
    "username": "_your username_",
    "password": "_your password_",
    "database": "_your database name_",
    "host": "127.0.0.1",
    "dialect": "_your dialect_"
  }
}
```
4. Run these commands one by one to initiate your database and fill it with tables
```
npx sequelize db:create
npx sequelize db:migrate
```
5. To fill your tables with prearranged seeds run the command
```
npx sequelize db:seed:all
```
