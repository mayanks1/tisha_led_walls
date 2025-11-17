/*
  # Add Video Support to Gallery

  1. Changes
    - Add `video_url` column to gallery_items for video files
    - Add `media_type` column to distinguish between photo and video
    - Existing photos will default to 'photo' type
    - Update display ordering
*/

DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'gallery_items' AND column_name = 'video_url'
  ) THEN
    ALTER TABLE gallery_items ADD COLUMN video_url text;
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'gallery_items' AND column_name = 'media_type'
  ) THEN
    ALTER TABLE gallery_items ADD COLUMN media_type text DEFAULT 'photo';
  END IF;
END $$;
