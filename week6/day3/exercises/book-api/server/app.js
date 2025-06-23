
import express from 'express';
import bookRoutes from './routes/bookRoutes.js';

const app = express();

app.use(express.json());
app.use('/api', bookRoutes);

app.listen(5000, () => {
  console.log('Server running ');
});
