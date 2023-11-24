## Description

- A basic pizza-tracking API that meets the following requirements:

```shell
API
The domain
The API will track pizzas as they are created and consumed by people.

Pizzas
An individual pizza that has one topping and can be consumed by one person
People
A person that has a name

Requirements
If the database is empty, populate it with the data from the sample .csv file.
Expose CRUD routes for Pizzas and People
Expose a route to record the consumption of a pizza by a person
Expose routes to return the following reports:
all pizza consumptions
all streaks of days when more and more pizzas were eaten than the day before (you can ignore days with no consumption, nobody eats pizza on Sundays). For example, people ate 1 pizza on 03/02, 2 on 03/05, and 4 on 03/06. That is a streak
for a given month, which day of the month people ate the most pizzas on
The actual schema of the returned JSON doesn't really matter as long as it's something you believe would be comfortably usable by a client.
```

# Getting Started

- It is recommended to run this app using Docker

- Clone the repo
```
git clone git@github.com:TeddyGavi/pizza-tracker.git
cd pizza-tracker
npm i
```
- create a copy of the `.env-template`

```bash
cp .env-template .env
```

- To connect to a remote DB head to `./db/db.module.ts` and modify the required configuration `env` variables and `./env` as needed. 

- To run locally:

```bash
npm run start:docker

# OR if you have built the container

docker-compose up 
```
- Head to `localhost:8080/api-docs` to try out the API after building and running with Docker.

- Alternatively you can run the DB in Docker independently 

```bash
npm run start:db
```
- Head to the `.env` and double check the following:

```bash
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=root
DB_DATABASE=pizza_tracker
DB_PORT=3306
```

- Now run  standard Nestjs commands:
```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```
## Test

```bash
# unit tests
$ npm run test

## License

Nest is [MIT licensed](LICENSE).
```
