import express, {Request, Response } from "express"

const userRouter = express.Router()


userRouter.get('/',(req: Request, res: Response) => {
    const users = [ 
        {name: 'John Doe',email:'john@gmail.com'}
    ]
    res.status(200).json(users);
});



userRouter.post("/", (req: Request, res: Response, next: Function): void =>{
    if(!req.body.name){
       res.status(400).json('You need to pass  name')
    }
    res.status(201).json(req.body);
});
       
export default userRouter;