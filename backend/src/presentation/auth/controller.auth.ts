import { Request, Response } from 'express'
import { RegisterUserDto, LoginUserDto } from '../../domain';
import { AuthService } from '../../infrastructure';
import { handleError } from '../error/handleError.error';

export class AuthController {
   constructor(
      public readonly authService: AuthService
   ){}

   public register = async(req: Request, res: Response ) =>  {
      const [error, registerDto ] = RegisterUserDto.create(req.body);
      if( error ) return res.status(400).json({message: error});
      this.authService
         .registerUser(registerDto!)
         .then( (user) => res.json(user) )
         .catch( (error) => handleError(error, res) );
   }

   public login = (req: Request, res: Response ) =>  {
      const [ error, loginUserDto] = LoginUserDto.create(req.body);
      if( error ) return res.status(400).json({message: error});
      this.authService
         .loginUser(loginUserDto!)
         .then( (token) => res.json(token) )
         .catch( (error) => handleError(error, res) );
   }

   public validateEmail = async(req: Request, res: Response ) =>  {
      const { token } = req.params;
      this.authService.validateEmail(token)
         .then( () => res.json({message: 'Email validated'}) )
         .catch( (error) => handleError(error, res) );
   }
}