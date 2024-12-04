"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
//parsers
app.use(express_1.default.json());
app.use(express_1.default.text());
// middleware
const logger = (req, res, next) => {
    console.log(req.url, req.method, req.hostname);
    next();
};
// creating routers
const userRouter = express_1.default.Router();
const courseRouter = express_1.default.Router();
// creating base route
app.use("/app/v1/users", userRouter);
app.use("/app/v1/courses", courseRouter);
// using routers
userRouter.post("/create-user", (req, res) => {
    const user = req.body;
    res.json({
        success: true,
        message: "User is created successfully",
        data: user,
    });
});
courseRouter.post("/create-course", (req, res) => {
    const course = req.body;
    res.json({
        success: true,
        message: "course is created successfully",
        data: course,
    });
});
// normal / get
// app.get('/', (req: Request, res:Response) => {
//     console.log(req.params);
//   res.send('Hello developers!')
// })
//param
// app.get('/:id', (req: Request, res:Response) => {
//     console.log(req.params);
//   res.send('Hello developers!')
// })
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
// use of middleware
// app.get('/',logger,  (req: Request, res:Response) => {
//     res.send('Hello developers!')
//   })
// normal / post
app.post("/", (req, res) => {
    console.log(req.body);
    // res.send('response data')
    res.json({
        message: "successfully receivd data",
    });
});
exports.default = app;
