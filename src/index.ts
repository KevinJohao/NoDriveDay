import express from 'express';
import { router as noDriveDayRouter } from './controllers/noDriveDayController'; 

const app = express();
const port = 3000;

app.use(express.json());
app.use('/api', noDriveDayRouter);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
