# Deployment Guide for Marina Travel Website

This guide explains how to deploy the Marina Travel website to Netlify.

## Prerequisites

1. A Netlify account (free tier available)
2. The built project files (already generated in the `dist` folder)

## Deploy to Netlify

### Option 1: Deploy with Netlify CLI (Recommended)

1. Install Netlify CLI globally:
   ```bash
   npm install -g netlify-cli
   ```

2. Login to your Netlify account:
   ```bash
   netlify login
   ```

3. Deploy the site:
   ```bash
   netlify deploy --prod
   ```
   
   When prompted:
   - Select "Create & configure a new site"
   - Choose your team (or create one)
   - Enter a site name (or leave blank for auto-generated)
   - Set the publish directory to `dist`

### Option 2: Deploy via Git (GitHub/GitLab/Bitbucket)

1. Push your code to a Git repository (GitHub, GitLab, or Bitbucket)
2. Login to your Netlify account
3. Click "New site from Git"
4. Select your Git provider and repository
5. Configure the build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
6. Click "Deploy site"

### Option 3: Manual Drag & Drop

1. Login to your Netlify account
2. Simply drag and drop the `dist` folder to the Netlify deployment area
3. Netlify will automatically deploy your site

## Environment Variables

If you're using Supabase for the contact form functionality, you'll need to set the following environment variables in Netlify:

1. Go to your site settings in Netlify
2. Navigate to "Environment variables"
3. Add the following variables:
   - `VITE_SUPABASE_URL` - Your Supabase project URL
   - `VITE_SUPABASE_ANON_KEY` - Your Supabase anonymous key

## Optimization Notes

This project has been optimized for production with:

1. **Image Handling**:
   - All images are loaded from CDNs (Unsplash) for optimal delivery
   - Images are properly sized and compressed
   - Lazy loading is enabled for the map iframe

2. **Bundle Optimization**:
   - Code splitting for vendor and utility libraries
   - Minified CSS and JavaScript
   - Efficient chunking to reduce load times

3. **Routing**:
   - Proper SPA routing configuration for Netlify redirects
   - All routes redirect to index.html for client-side routing

4. **Performance**:
   - Assets are gzipped
   - Efficient caching strategies
   - Minimal bundle sizes

## Troubleshooting

If you encounter issues:

1. Make sure all environment variables are set correctly
2. Check that the Supabase credentials are valid
3. Ensure the build command is set to `npm run build`
4. Verify the publish directory is set to `dist`

For any issues with the contact form, verify that your Supabase database has the correct table structure for contact submissions.