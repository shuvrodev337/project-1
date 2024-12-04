"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(express_1.default.text());
//param
app.get('/:id', (req, res) => {
    console.log(req.params);
    res.send('Hello developers!');
});
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
app.post('/', (req, res) => {
    console.log(req.body);
    // res.send('response data') 
    res.json({
        message: "successfully receivd data"
    });
});
exports.default = app;
