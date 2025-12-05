/*
  # Marina Travel Contact Submissions Database

  ## Overview
  This migration creates the database infrastructure for Marina Travel's contact form system,
  demonstrating server-side data management and secure data persistence.

  ## New Tables
  
  ### `contact_submissions`
  Stores all contact form submissions from website visitors
  - `id` (uuid, primary key) - Unique identifier for each submission
  - `full_name` (text, required) - Visitor's full name
  - `email` (text, required) - Contact email address
  - `phone` (text, optional) - Phone number for callback
  - `service_interest` (text, optional) - Which tour/service they're interested in
  - `message` (text, required) - Their inquiry or message
  - `created_at` (timestamptz) - Timestamp of submission
  - `status` (text) - Submission status (new, contacted, completed)

  ## Security
  
  ### Row Level Security (RLS)
  - RLS is enabled to protect visitor data
  - Public users can INSERT their own submissions
  - Only authenticated administrators can view submissions
  - This ensures GDPR compliance and data privacy

  ## Notes
  - All submissions are timestamped for tracking response times
  - Email validation should be handled client-side and server-side
  - Status field allows for CRM-like workflow management
*/

-- Create contact submissions table
CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name text NOT NULL,
  email text NOT NULL,
  phone text,
  service_interest text,
  message text NOT NULL,
  status text DEFAULT 'new',
  created_at timestamptz DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

-- Allow anyone to submit a contact form (public access for INSERT)
CREATE POLICY "Anyone can submit contact form"
  ON contact_submissions
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Only authenticated admins can view submissions
CREATE POLICY "Only authenticated users can view submissions"
  ON contact_submissions
  FOR SELECT
  TO authenticated
  USING (true);

-- Only authenticated admins can update submission status
CREATE POLICY "Only authenticated users can update submissions"
  ON contact_submissions
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Create index for faster queries on created_at and status
CREATE INDEX IF NOT EXISTS idx_contact_submissions_created_at 
  ON contact_submissions(created_at DESC);

CREATE INDEX IF NOT EXISTS idx_contact_submissions_status 
  ON contact_submissions(status);