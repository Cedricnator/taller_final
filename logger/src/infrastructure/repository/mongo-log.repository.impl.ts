import { LogRepository, LogDataSource, LogEntity, LogSeverityLevel } from '../../domain';

export class MongoLogRepositoryImpl implements LogRepository {
   constructor(
      private readonly logDataSource: LogDataSource,
   ) { }

   async saveLog(log: LogEntity): Promise<void> {
      return this.logDataSource.saveLog(log);
   }

   async getLogsByOrigin(origin: string): Promise<LogEntity[]> {
      return this.logDataSource.getLogsByOrigin(origin);
   }

   async getLogsBySeverityLevel(severityLevel: LogSeverityLevel): Promise<LogEntity[]> {
      return this.logDataSource.getLogsBySeverityLevel(severityLevel);
   }

   async getLogs(): Promise<LogEntity[]> {
      return this.logDataSource.getLogs();
   }
}