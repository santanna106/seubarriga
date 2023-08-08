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



/*
router.post("/register", (req: Request, res: Response, next: Function): void =>{
    if(!req.body.firstName){
       res.status(400).json('You need to pass first name')
    }
    res.status(201).json({message: "User is Created"})
});
*/

export default router;