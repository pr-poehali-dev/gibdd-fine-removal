CREATE TABLE fines (
    id SERIAL PRIMARY KEY,
    fine_number VARCHAR(50) UNIQUE NOT NULL,
    driver_name VARCHAR(255) NOT NULL,
    driver_phone VARCHAR(20),
    license_plate VARCHAR(20) NOT NULL,
    violation_date DATE NOT NULL,
    fine_amount DECIMAL(10, 2) NOT NULL,
    violation_type VARCHAR(255),
    status VARCHAR(50) DEFAULT 'active',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    removed_at TIMESTAMP,
    removed_by VARCHAR(255)
);

CREATE TABLE removal_logs (
    id SERIAL PRIMARY KEY,
    fine_id INTEGER REFERENCES fines(id),
    fine_number VARCHAR(50) NOT NULL,
    removed_by VARCHAR(255) NOT NULL,
    removal_reason TEXT,
    removed_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);