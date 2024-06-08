import { Request, Response } from 'express'
import { CustomError, RegisterUserDto } from '../../domain';
import { AuthService } from '../services/auth/auth.service';

export class AuthController {
   constructor(
      public readonly authService: AuthService
   ){}

   private handleError = ( error: unknown, res: Response ) => {
      if( error instanceof CustomError ){
         return res.status(error.statusCode).json({
            error: error.message
         });
      }

      console.log(`${ error }`)
      return res.status(500).json({
         error: 'Internal Server Error'
      });
   }

   register = async(req: Request, res: Response ) =>  {
      const [error, registerDto ] = RegisterUserDto.create(req.body);
      if( error ) return res.status(400).json({message: error});
      this.authService
         .registerUser(registerDto!)
         .then( (user) => res.json(user) )
         .catch( (error) => this.handleError(error, res) );
   }

   login = (req: Request, res: Response ) =>  {
      res.json({message: 'login'});
   }

   validateEmail = async(req: Request, res: Response ) =>  {
      res.status(200).json({message: 'validate-email'});
   }
}