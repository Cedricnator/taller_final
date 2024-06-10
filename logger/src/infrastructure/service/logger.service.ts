import { CustomError, LogEntity, LogRepository, LogSeverityLevel, SaveLogDto } from "../../domain"
export class LoggerService {
   constructor(
      public readonly logRepository: LogRepository,
   ){}

   private handleErrorLog = ( error: unknown ) => {
      let message = typeof error === 'string' ? error : 'Unknown error';
      if( error instanceof CustomError ){
         message = error.message;
      } 
      return {
         message,
         origin: 'LoggerService',
         level: LogSeverityLevel.HIGH
      }
   }

   private handleException = async (error: unknown) => {
      const log = LogEntity.fromObject(this.handleErrorLog(error));
      await this.logRepository.saveLog(log);
      throw error;
   }

   public saveLog = async (saveLogDto: SaveLogDto) => {
      try {
         const log = LogEntity.fromObject(saveLogDto);
         await this.logRepository.saveLog(log);
         return {
            message: 'Log saved successfully',
            log
         }
      } catch (error) {
         await this.handleException(error);
      }
   }

   public getLogsBySeverity = async (typeSeverityLevel: LogSeverityLevel) => {
      try {
         return await this.logRepository.getLogsBySeverityLevel(typeSeverityLevel);
      } catch (error) {
         await this.handleException(error);
      }
   }

   public getLogsByOrigin = async (origin: string) => {
      try {
         return await this.logRepository.getLogsByOrigin(origin);
      } catch (error) {
         await this.handleException(error);
      }
   }

   public getLogs = async () => {
      try {
         return await this.logRepository.getLogs();
      } catch (error) {
         await this.handleException(error);
      }
   }
}