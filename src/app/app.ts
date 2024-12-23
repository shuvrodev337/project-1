import express, { NextFunction, Request, Response } from "express";
const app = express();

//parsers
app.use(express.json());
app.use(express.text());

// middleware
const logger = (req: Request, res: Response, next: NextFunction) => {
  console.log(req.url, req.method, req.hostname);
  next();
};

// creating routers
const userRouter = express.Router();
const courseRouter = express.Router();
// creating base route
app.use("/app/v1/users", userRouter);
app.use("/app/v1/courses", courseRouter);

// using routers
userRouter.post("/create-user", (req: Request, res: Response) => {
  const user = req.body;
  res.json({
    success: true,
    message: "User is created successfully",
    data: user,
  });
});
courseRouter.post("/create-course", (req: Request, res: Response) => {
  const course = req.body;
  res.json({
    success: true,
    message: "course is created successfully",
    data: course,
  });
});

// normal / get
app.get("/", (req: Request, res: Response, next: NextFunction) => {
  try {
    res.send(something);
  } catch (error) {
    // we can send normal error status and json here, but sending the error to global error handler middleware.
    next(error);
  }
});

//param
// app.get('/:id', (req: Request, res:Response) => {
//     console.log(req.params);
//   res.send('Hello developers!')
// })

//multiple params
// app.get('/:id/:subId', (req: Request, res:Response) => {
//     console.log(req.params.id, req.params.subId);
//   res.send('Hello developers!')
// })

// query
// app.get('/', (req: Request, res:Response) => {
//   console.log(req.query);
//   res.send('Hello developers!')
// })

// use of middleware

// app.get('/',logger,  (req: Request, res:Response) => {
//     res.send('Hello developers!')
//   })

// normal / post
app.post("/", (req: Request, res: Response) => {
  console.log(req.body);
  // res.send('response data')
  res.json({
    message: "successfully receivd data",
  });
});

//  route error handle // has to be at the end of all route controllers
app.all("*", (req: Request, res: Response) => {
  res.status(400).json({
    success: false,
    message: "Route not found",
  });
});
//  global error handler controller
app.use((error: any, req: Request, res: Response, next: NextFunction) => {
  if (error) {
    res.status(400).json({
      success: false,
      message: "Something went wrong (from global error handler )",
    });
  }
});
export default app;
