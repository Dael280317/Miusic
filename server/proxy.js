import express from 'express';
import cors from 'cors';
import axios from 'axios';

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

const DEEZER_API_URL = 'https://api.deezer.com';

app.get('/api/*', async (req, res) => {
  try {
    const endpoint = req.path.replace('/api', '');
    const response = await axios.get(`${DEEZER_API_URL}${endpoint}${req.url.includes('?') ? req.url.substring(req.url.indexOf('?')) : ''}`);
    res.json(response.data);
  } catch (error) {
    console.error('Proxy error:', error.message);
    res.status(error.response?.status || 500).json({
      error: error.message
    });
  }
});

app.listen(port, () => {
  console.log(`Proxy server running at http://localhost:${port}`);
});