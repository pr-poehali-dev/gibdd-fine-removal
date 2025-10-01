CREATE TABLE search_logs (
    id SERIAL PRIMARY KEY,
    search_type VARCHAR(50) NOT NULL,
    search_value VARCHAR(255) NOT NULL,
    results_count INTEGER DEFAULT 0,
    admin_id VARCHAR(100) DEFAULT 'admin',
    searched_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);