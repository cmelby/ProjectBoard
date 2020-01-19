DROP DATABASE IF EXISTS project_db;

CREATE DATABASE project_db;

USE project_db;

CREATE TABLE tasks (
    id int NOT NULL AUTO_INCREMENT,
    task_name VARCHAR(100),
    completed BOOLEAN DEFAULT false,
    PRIMARY KEY(id)
);