import { RegisterUserDto, UserDataSource, UserEntity, UserRepository } from "../../../domain";

export class UserRepositoryImpl implements UserRepository {
   constructor(
      private readonly datasource: UserDataSource
   ) { }

   async saveUser(registerUserDto: RegisterUserDto): Promise<UserEntity> {
      return await this.datasource.saveUser(registerUserDto);
   }

   async getAll(): Promise<UserEntity[]> {
      return await this.datasource.getAll();
   }

   async findById(id: number): Promise<UserEntity> {
      return await this.datasource.findById(id);
   }

   async findByEmail(email: string): Promise<UserEntity> {
      return await this.datasource.findByEmail(email);
   }

   async isUserFoundByEmail(email: string): Promise<boolean> {
      return await this.datasource.isUserFoundByEmail(email);
   }

   async validateUserEmail(user: UserEntity): Promise<UserEntity> {
      return await this.datasource.validateUserEmail(user);
   }
}