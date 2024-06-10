import { CustomError, LogEntity, LogRepository, LogSeverityLevel, SaveLogDto } from "../../domain"

export class LoggerService {
   constructor(
      public readonly logRepository: LogRepository,
   ){}

   public saveLog = async (saveLogDto: SaveLogDto) => {
      try {
         const log = LogEntity.fromObject( saveLogDto );
         this.logRepository.saveLog( log )
         return {
            message: 'Log saved successfully',
            log
         }
      } catch (error) {
         throw error;
      }
   }

   public getLogs = async () => {
      try {
         const logs = await this.logRepository.getLogs( LogSeverityLevel.LOW );
         if(!logs) CustomError.internalServer('No logs found');
      } catch (error) {
         throw error;
      }
   }
}