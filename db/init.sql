CREATE DATABASE models_server_db;
use models_server_db;

CREATE TABLE User (
  id INT,
  username VARCHAR(64),
  email VARCHAR(120),
  password_hash VARCHAR(128)
);

