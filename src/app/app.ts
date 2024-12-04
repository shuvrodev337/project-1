import express, { Request, Response } from 'express'
const app = express()
app.use(express.json())
app.use(express.text())



//param
app.get('/:id', (req: Request, res:Response) => {
    console.log(req.params);
  res.send('Hello developers!')
})
//multiple params
// app.get('/:id/:subId', (req: Request, res:Response) => {
//     console.log(req.params);
//   res.send('Hello developers!')
// })

// query
// app.get('/', (req: Request, res:Response) => {
//   console.log(req.query);
//   res.send('Hello developers!')
// })



app.post('/', (req: Request, res:Response) => {
    console.log(req.body);
 // res.send('response data') 
 res.json({
    message: "successfully receivd data"
 })
})

export default app;