INSERT INTO orders 
(basic_staging_package, standard_photography, twilight_photography, drone_photography, house_cleaning, city, state, zip, street_address)
VALUES
($1, $2, $3, $4, $5, $6, $7, $8, $9);