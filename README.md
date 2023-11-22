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

# Development

- It is recommended to run this app using Docker

This app connects to a planetscale account

- Head to `/api-docs` to try out the API after building and running with Docker.
- Alternatively you can run the DB locally

```bash
#Build
docker build -t <your_image_name> .

#Run
docker run -p 8080:8080 -d <your_image_name>
```

## Installation

```bash
$ npm install
```

## Running the app

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
