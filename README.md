# Next-News

A modern web application built with Next.js for sharing and reading the latest news.

## Features

- 📱 Responsive design for all devices
- 💽 SQLite database for storing news articles
- ⚡ Server-side rendering for optimal performance

## Tech Stack

- [Next.js]
- [SQLite]
- CSS Modules
- React Server Components

## Project Structure

- `/app` - Next.js app router pages and layouts
- `/components` - Reusable React components
- `/lib` - Database and utility functions
- `/public` - Static assets and images
- `/assets` - Source images and icons

## Features

### News Sharing

- Browse a collection of news articles
- View detailed news articles
- Share your own news articles
- Dynamic image loading and optimization

### User Interface

- Responsive grid layout
- Modern and clean design
- Optimized images with `next/image`
- Loading states and error handling

## Database Schema

### News Table

- `id` (INTEGER PRIMARY KEY)
- `slug` (TEXT UNIQUE)
- `title` (TEXT)
- `image` (TEXT)
- `summary` (TEXT)
- `content` (TEXT)
- `author` (TEXT)
- `author_email` (TEXT)
