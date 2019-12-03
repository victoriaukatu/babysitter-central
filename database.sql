
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
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