import { Request, Response } from 'express'

export class AuthController {
   constructor(){

   }

   register = async(req: Request, res: Response ) =>  {
      res.json({ message: 'register' });
   }

   login = (req: Request, res: Response ) =>  {
      res.json({message: 'login'});
   }

   validateEmail = async(req: Request, res: Response ) =>  {
      res.status(200).json({message: 'validate-email'});
   }
}