import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// For development: proxy requests to Vite dev server
if (process.env.NODE_ENV !== 'production') {
  console.log('Server running in development mode');
  
  // Forward API requests to the API handler in development
  app.use('/api/send-email', (req, res) => {
    // This will be handled by the api/send-email.js file in production
    // For development, you can import and use that handler directly if needed
    res.status(200).json({ success: true, message: 'Email endpoint available (development mode)' });
  });
} else {
  // Production: serve static files
  app.use(express.static(join(__dirname, 'dist')));

  app.get('*', (req, res) => {
    res.sendFile(join(__dirname, 'dist', 'index.html'));
  });
}

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`API endpoint available at http://localhost:${PORT}/api/send-email`);
});