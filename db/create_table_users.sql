CREATE TABLE users(
    id serial primary key,
    email text,
    auth_id text,
    isadmin varchar(150)
)