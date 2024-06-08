import { prisma } from "../../../data";
import { RegisterUserDto, UserDataSource, UserEntity } from "../../../domain";

export class UserDataSourceImpl implements UserDataSource {
   async saveUser(registerUserDto: RegisterUserDto): Promise<UserEntity> {
      const createUser = await prisma.user.create({
         data: registerUserDto
      })
      return UserEntity.fromObject(createUser);
   }

   async getAll(): Promise<UserEntity[]> { 
      const users = await prisma.user.findMany();
      return users.map( user => UserEntity.fromObject(user));
   }

   async findById(id: number): Promise<UserEntity> {
      const user = await prisma.user.findFirst({
         where: {id}
      }) 
      if(!user) throw `User with id: ${id} not found`
      return UserEntity.fromObject(user);
   }

   async findByEmail(email: string): Promise<UserEntity> {
      const user = await prisma.user.findFirst({
         where: {
            email
         }
      })
      return UserEntity.fromObject(user!);      
   }
}