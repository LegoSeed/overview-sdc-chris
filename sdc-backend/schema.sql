-- this dummydrop database is to provide a database to connect to initially so I can drop the other database I need to drop
-- could also create a new role here, altrole,
-- this would allow anyone to run this command no matter what machine they were on
\c dummydrop altchris

DROP DATABASE IF EXISTS "sdc-legos";

CREATE DATABASE "sdc-legos" OWNER "altchris";

-- GRANT CONNECT ON DATABASE "sdc-legos" TO "altchris";
-- GRANT ALL PRIVILEGES ON DATABASE "sdc-legos" TO "altchris";

\c "sdc-legos" "altchris";

CREATE TABLE "product" (
  "id" serial,
  "name" varchar(50),
  "brand" varchar(50),
  "price" real,
  "reviewTotal" smallint,
  "reviewAvg" real,
  "quantity" smallint,
  "ageRec" smallint,
  "pieceCount" smallint,
  "vipPoints" smallint,
  "itemNum" smallint,
  PRIMARY KEY ("id")
);

CREATE TABLE "picture" (
  "id" serial,
  "url" varchar(400),
  -- "product_id" integer,
  "product_id" integer references product(id),
  PRIMARY KEY ("id")
);

-- INSERT INTO "picture"("product_id") VALUES ('3');

\copy product(name, brand, price, "reviewTotal", "reviewAvg", quantity, "ageRec", "pieceCount", "vipPoints", "itemNum") FROM 'sdc-backend/products.csv' DELIMITER ',' CSV HEADER;

\copy picture(url, product_id) FROM 'sdc-backend/pictures.csv' DELIMITER ',' CSV HEADER;

SELECT * from picture WHERE id BETWEEN 1 AND 5;
SELECT * FROM product WHERE id BETWEEN 1 AND 5;

