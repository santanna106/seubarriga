import express, {Request, Response } from "express"

const router = express.Router()

router.post("/register", (req: Request, res: Response, next: Function): void =>{
    if(!req.body.firstName){
       res.status(400).json('You need to pass first name')
    }
    res.status(201).json({message: "User is Created"})
});

router.get('/',(req: Request, res: Response) => {
    res.status(200).json({msg:'server ok'})
})

router.get('/users',(req: Request, res: Response) => {
    const users = [ 
        {name: 'John Doe',email:'john@gmail.com'}
    ]
    res.status(200).json(users);
});



router.post("/users", (req: Request, res: Response, next: Function): void =>{
    if(!req.body.name){
       res.status(400).json('You need to pass  name')
    }
    res.status(201).json(req.body);
});
       

/*
router.post("/register", (req: Request, res: Response, next: Function): void =>{
    if(!req.body.firstName){
       res.status(400).json('You need to pass first name')
    }
    res.status(201).json({message: "User is Created"})
});
*/

export default router;