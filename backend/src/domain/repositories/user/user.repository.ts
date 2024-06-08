import { UserEntity } from "../../entities";
import { RegisterUserDto } from '../../dto/auth/register-user.dto';

export abstract class UserRepository {
   abstract saveUser( registerUserDto: RegisterUserDto ): Promise<UserEntity>
   abstract getAll(): Promise<UserEntity[]>;
   abstract findById(id: Number): Promise<UserEntity>
   abstract findByEmail(email: string):                   Promise<UserEntity>
   abstract isUserFoundByEmail(email: string):            Promise<boolean>;
   abstract validateUserEmail(user: UserEntity):             Promise<UserEntity>;
}