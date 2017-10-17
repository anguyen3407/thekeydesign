INSERT INTO orders 
( firstName, lastName, email_address, billing_address, phone_number, basic_staging_package, standard_photography, twilight_photography, drone_photography, house_cleaning, city, state, zip, street_address)
VALUES
($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14);