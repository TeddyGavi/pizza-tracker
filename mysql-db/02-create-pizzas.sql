USE pizza_tracker;
DROP TABLE IF EXISTS pizzas;
CREATE TABLE pizzas (id VARCHAR(36) PRIMARY KEY, meat_type VARCHAR(255) NOT NULL);
