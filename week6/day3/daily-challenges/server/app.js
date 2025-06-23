import express from 'express';
import router from './routes/userRoute.js';

const app = express();
app.use(express.json());

app.use('/api', router);

app.listen(5000, () => {
  console.log('Server running!');
});
