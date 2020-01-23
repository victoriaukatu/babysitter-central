
# Babysitter Central: A Organizational Tool for Babysitters and Parents
The idea for this project came from an actual need: I babysit many of my friends' children, but with so many kids it can be hard to remember all the specific details for each child. That's why I created this application. Babysitters can use it as a centralized hub for all the information they need, including details on each child they babysit. They can also write and save a report of how babysitting went which parents can logon and view anytime. With this app, it makes the babysitter's life easier and managing lots of information becomes a piece of cake! 

## Prerequisites
In order to run this project, the following software needed to be installed:
- [Node.js](https://nodejs.org/en/)
- [PostrgeSQL](https://www.postgresql.org/)
- [Nodemon](https://nodemon.io/)

After these are installed, make sure to run `npm install` in the terminal.


## Create the database and tables in SQL
I created a new database called `prime_app` and created `user`, `kids_information` and `summaries` tables:

```SQL
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL,
    "role" BOOLEAN NOT NULL
);

CREATE TABLE "kids_information" (
	"id" SERIAL PRIMARY KEY,
	"firstname" VARCHAR (80) NOT NULL,
	"age" INT NOT NULL,
	"picture" VARCHAR(300) NOT NULL,
	"gender" VARCHAR NOT NULL,
	"allergies" VARCHAR(300) NOT NULL,
	"nap" VARCHAR NOT NULL,
	"pottytrained" VARCHAR NOT NULL,
	"notes" VARCHAR (500), 
	"parentname" VARCHAR(100) NOT NULL,
	"phone" VARCHAR(14) NOT NULL,
	"user_id" INT REFERENCES "user"
);

CREATE TABLE "summaries" (
	"id" SERIAL PRIMARY KEY,
	"date" VARCHAR (30),
	"summary" VARCHAR (500),
	"user_id" INT REFERENCES "user"
);
```

## Built With
- React.js
- Javascript
- Redux
- Express
- PostgreSQL
- Passport
- Material UI
- HTML
- CSS    

## Author
Victoria Ukatu

## License
----- -----

## Acknowledgments
- I would like to thank Prime Digital Academy instructors and my cohort. They were instrumental in helping me to refine the scope of my project and providing useful feedback which I used to make my application what it is today.





