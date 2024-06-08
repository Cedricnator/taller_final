import { UserDataSource } from "../../domain/datasource";
import { UserEntity } from "../../domain/entities";



export class PostgresUserDataSource implements UserDataSource {
   saveUser(user: UserEntity): Promise<void> {
      throw new Error("Method not implemented.");
   }


}