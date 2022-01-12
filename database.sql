
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
CREATE TABLE "user" (
    id SERIAL PRIMARY KEY,
    username character varying(80) NOT NULL UNIQUE,
    password character varying(1000) NOT NULL,
    role character varying(10) DEFAULT 'user'::character varying
);

CREATE TABLE contact_info (
    id SERIAL PRIMARY KEY,
    first_name character varying(80) NOT NULL,
    last_name character varying(80),
    phone_number character varying(15) NOT NULL,
    email character varying(255),
    user_id integer REFERENCES "user"(id)
);


CREATE TABLE menu (
    id SERIAL PRIMARY KEY,
    item character varying(255),
    image_url character varying(1000),
    price numeric(19,2),
    description character varying(1000)
);

CREATE TABLE orders (
    id SERIAL PRIMARY KEY,
    user_id integer,
    fulfilled boolean DEFAULT false,
    notes character varying(255) DEFAULT ''::character varying,
    total_price numeric(19,2),
    time_of_order character varying(100)
);

CREATE TABLE order_item (
    id SERIAL PRIMARY KEY,
    menu_id integer REFERENCES menu(id),
    order_id integer REFERENCES orders(id),
    quantity integer
);

CREATE TABLE default_ingredients (
    id SERIAL PRIMARY KEY,
    "Shell" character varying(20),
    "Meat" character varying(20),
    "Cheese" character varying(20),
    "Lettuce" character varying(20),
    "Salsa" character varying(20),
    "SourCream" character varying(20),
    "PicodeGallo" character varying(20),
    "Cilantro" character varying(20),
    "DicedOnions" character varying(20),
    "Sauce" character varying(20),
    "Lime" character varying(20),
    menu_id integer REFERENCES menu(id),
    "Beans" character varying(20),
    "Corn" character varying(20),
    "Rice" character varying(20)
);

INSERT INTO "menu" ("item", "image_url", "price", "description")
VALUES ('Carne Asada Taco', 'https://gimmedelicious.com/wp-content/uploads/2019/11/Carne-Asada-Tacos-8.jpg', 4.99, 
'Carne Asada steak tacos are loaded with juicy  grilled steak packed into warm tortillas and topped with tangy fresh tomato salsa and a light drizzle of sour cream and lime. ');

INSERT INTO "default_ingredients" (
    "Shell",
    "Meat",
    "Cheese",
    "Lettuce",
    "Salsa",
    "Sour Cream",
    "Pico de Gallo",
    "Cilantro",
    "Diced Onions",
    "Sauce",
    "Lime",
    "Beans",
    "Corn",
    "Rice"
    "menu_id"
)
VALUES ('Soft', 'Steak', 'None', 'None', 'None', 'Normal', 'Normal', 'Normal', 'None', 'None', 'Normal', 'None', 'None', 'None' 1);

CREATE TABLE about_us (
    id SERIAL PRIMARY KEY,
    image_url character varying(1000),
    about_us character varying(10000),
    owner_name character varying(25),
    truck_number character varying(15),
    email character varying(30),
    instagram character varying(30),
    twitter character varying(30),
    current_location character varying(100),
    next_location character varying(100),
    schedule character varying(100)
);

CREATE TABLE favorites (
    id integer GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    user_id integer REFERENCES "user"(id),
    order_id integer REFERENCES orders(id),
    menu_id integer REFERENCES menu(id),
    quantity integer DEFAULT 1
);