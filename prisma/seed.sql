-- Enable UUID extension for PostgreSQL
CREATE EXTENSION IF NOT EXISTS pgcrypto;

-- Insert sample users
INSERT INTO "user" (id, username, password, "fullName") VALUES
  (gen_random_uuid(), 'john_doe', '$2a$10$YourHashedPasswordHere1', 'John Doe'),
  (gen_random_uuid(), 'jane_smith', '$2a$10$YourHashedPasswordHere2', 'Jane Smith'),
  (gen_random_uuid(), 'bob_wilson', '$2a$10$YourHashedPasswordHere3', 'Bob Wilson'),
  (gen_random_uuid(), 'alice_johnson', '$2a$10$YourHashedPasswordHere4', 'Alice Johnson'),
  (gen_random_uuid(), 'charlie_brown', '$2a$10$YourHashedPasswordHere5', 'Charlie Brown')
ON CONFLICT (username) DO NOTHING;

-- Insert sample products
INSERT INTO "product" (id, product_name, product_image, product_description, additional_details, product_price, rate_limit_ms) VALUES
  (
    gen_random_uuid(), 
    'Premium Kernels', 
    '/products/premium-kernels.png',
    'Our finest selection of premium corn kernels, carefully selected for maximum flavor and texture.',
    '[{"label": "Origin", "value": "Iowa, USA"}, {"label": "Weight", "value": "500g"}, {"label": "Type", "value": "Yellow Corn"}]'::json,
    12.99,
    60000
  ),
  (
    gen_random_uuid(),
    'Whole Kernels',
    '/products/whole-kernels.png',
    'Complete whole corn kernels perfect for any recipe. Fresh and delicious.',
    '[{"label": "Origin", "value": "Nebraska, USA"}, {"label": "Weight", "value": "750g"}, {"label": "Type", "value": "White Corn"}]'::json,
    9.99,
    45000
  ),
  (
    gen_random_uuid(),
    'Just Kernels',
    '/products/just-kernels.png',
    'Simple, classic corn kernels that deliver consistent quality every time.',
    '[{"label": "Origin", "value": "Kansas, USA"}, {"label": "Weight", "value": "400g"}, {"label": "Type", "value": "Sweet Corn"}]'::json,
    7.99,
    30000
  ),
  (
    gen_random_uuid(),
    'Organic Kernels',
    '/products/premium-kernels.png',
    'Certified organic corn kernels grown without pesticides or synthetic fertilizers.',
    '[{"label": "Origin", "value": "California, USA"}, {"label": "Weight", "value": "600g"}, {"label": "Type", "value": "Organic Yellow Corn"}, {"label": "Certification", "value": "USDA Organic"}]'::json,
    15.99,
    90000
  ),
  (
    gen_random_uuid(),
    'Popcorn Kernels',
    '/products/whole-kernels.png',
    'Special popcorn variety kernels that pop perfectly every time. Great for movie nights!',
    '[{"label": "Origin", "value": "Illinois, USA"}, {"label": "Weight", "value": "1kg"}, {"label": "Type", "value": "Popcorn Variety"}, {"label": "Pop Rate", "value": "99%"}]'::json,
    8.99,
    20000
  ),
  (
    gen_random_uuid(),
    'Sweet Corn Kernels',
    '/products/just-kernels.png',
    'Extra sweet corn kernels with high sugar content. Perfect for salads and side dishes.',
    '[{"label": "Origin", "value": "Florida, USA"}, {"label": "Weight", "value": "550g"}, {"label": "Type", "value": "Super Sweet Corn"}, {"label": "Sweetness", "value": "High"}]'::json,
    11.99,
    40000
  )
ON CONFLICT (id) DO NOTHING;

