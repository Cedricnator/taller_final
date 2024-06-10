import { LogRepository } from "../../domain"

export class LoggerService {
   constructor(
      public readonly logRepository: LogRepository,
   ){}

   public saveLog = async () => {

   }

   public getLogs = async () => {

   }
}