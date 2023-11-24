USE pizza_tracker;
DROP TABLE IF EXISTS consumptions;
CREATE TABLE consumptions (
      id VARCHAR(255) PRIMARY KEY,
      pizza_id VARCHAR(255),
      user_id VARCHAR(255),
      consumed_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      FOREIGN KEY (pizza_id) REFERENCES pizzas(id) ON DELETE CASCADE,
      FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
    );
