import express from 'express';
import sequelize from './models';
import userRoutes from './routes/userRoutes';
import cors from 'cors';

const app = express();
const port = 8000;

app.use(cors());
app.use(express.json());

app.use('/', userRoutes);

sequelize.sync().then(() => {
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
});

export { app };