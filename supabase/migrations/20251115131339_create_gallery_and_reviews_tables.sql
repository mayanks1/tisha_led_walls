/*
  # Create Gallery and Reviews Tables

  1. New Tables
    - `gallery_items` - Stores LED wall event photos
      - `id` (uuid, primary key)
      - `title` (text) - Event/photo description
      - `image_url` (text) - URL to the photo
      - `event_type` (text) - Type of event (wedding, corporate, etc)
      - `order` (integer) - Display order
      - `created_at` (timestamp)
      - `is_active` (boolean) - Whether to display

    - `google_reviews` - Stores embedded Google review data
      - `id` (uuid, primary key)
      - `review_url` (text) - Link to Google reviews page
      - `embed_code` (text) - HTML embed code if available
      - `is_active` (boolean) - Whether to display
      - `created_at` (timestamp)

  2. Security
    - Enable RLS on both tables
    - Allow public read access for gallery and reviews
    - Only admin/service role can write/update
*/

CREATE TABLE IF NOT EXISTS gallery_items (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  image_url text NOT NULL,
  event_type text NOT NULL,
  "order" integer DEFAULT 0,
  is_active boolean DEFAULT true,
  created_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS google_reviews (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  review_url text NOT NULL,
  embed_code text,
  is_active boolean DEFAULT true,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE gallery_items ENABLE ROW LEVEL SECURITY;
ALTER TABLE google_reviews ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Gallery items are publicly readable"
  ON gallery_items FOR SELECT
  TO anon, authenticated
  USING (is_active = true);

CREATE POLICY "Google reviews are publicly readable"
  ON google_reviews FOR SELECT
  TO anon, authenticated
  USING (is_active = true);

INSERT INTO google_reviews (review_url, embed_code, is_active)
VALUES (
  'https://share.google/nrqCa0VtP92OsKW56',
  '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.8856729632384!2d72.8245!3d19.0760!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c92e8b8b8b8b%3A0x8b8b8b8b8b8b8b8b!2sTisha%20LED%20Walls!5e0!3m2!1sen!2sin!4v1234567890" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
  true
);