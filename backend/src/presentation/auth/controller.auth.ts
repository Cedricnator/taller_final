import { Request, Response } from 'express'
import { CustomError, RegisterUserDto } from '../../domain';
import { AuthService } from '../services/auth/auth.service';
import { LoginUserDto } from '../../domain/dto/auth/login-user.dto';

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

   public register = async(req: Request, res: Response ) =>  {
      const [error, registerDto ] = RegisterUserDto.create(req.body);
      if( error ) return res.status(400).json({message: error});
      this.authService
         .registerUser(registerDto!)
         .then( (user) => res.json(user) )
         .catch( (error) => this.handleError(error, res) );
   }

   public login = (req: Request, res: Response ) =>  {
      const [ error, loginUserDto] = LoginUserDto.create(req.body);
      if( error ) return res.status(400).json({message: error});
      this.authService
         .loginUser(loginUserDto!)
         .then( (token) => res.json(token) )
         .catch( (error) => this.handleError(error, res) );
   }

   public validateEmail = async(req: Request, res: Response ) =>  {
      res.status(200).json({message: 'validate-email'});
   }
}