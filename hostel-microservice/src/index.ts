import express, { Request, Response } from 'express';

const app = express();
const port = 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/hostel/test', (_req: Request, res: Response) => {
  return res.status(201).json({
    message: 'Hostel MicroService',
  });
});


app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
