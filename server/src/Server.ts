import express, { Express, Request, Response } from 'express';
import cors from 'cors'
import { NumberToWords } from './NumberToWords';

const app: Express = express();
app.use(cors)
const port = 4000;

app.post('/number-to-words/:number', (req: Request, res: Response) => {
    const { params: { number } } = req
    console.log(`app.get -> number`, number)
    try {
      const result = NumberToWords.convert(parseInt(number))
      console.log(`app.get -> result`, result)
      res.send({
          result
      })
    } catch (error) {
      console.error(error)
    }
    
});

app.listen(port, () => {
  console.log(`Server is running at https://localhost:${port}`);
});