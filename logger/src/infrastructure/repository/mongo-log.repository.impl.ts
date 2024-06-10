import { LogRepository, LogDataSource, LogEntity, LogSeverityLevel } from '../../domain';

export class MongoLogRepositoryImpl implements LogRepository {
   constructor(
      private readonly logDataSource: LogDataSource,
   ) { }

   async saveLog(log: LogEntity): Promise<void> {
      return this.logDataSource.saveLog(log);
   }

   async getLogs(severityLevel: LogSeverityLevel): Promise<LogEntity[]> {
      return this.logDataSource.getLogs(severityLevel);
   }
}