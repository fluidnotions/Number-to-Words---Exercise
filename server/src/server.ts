import express, { Express, Request, Response } from 'express';
import converter from 'number-to-words'

const app: Express = express();
const port = 3001;

app.get('/number-to-words/:number', (req: Request, res: Response) => {
    const { params: { number } } = req
    res.send({
        result: converter.toWords(number)
    })
    
});

app.listen(port, () => {
  console.log(`Server is running at https://localhost:${port}`);
});