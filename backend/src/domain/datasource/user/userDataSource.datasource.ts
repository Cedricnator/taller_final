import { UserEntity } from "../../entities";

export interface UserDataSource {
   saveUser( user: UserEntity ): Promise<void>
}