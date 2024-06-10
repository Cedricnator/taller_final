import { LogEntity, LogSeverityLevel } from "../entity/log.entity";

// Permite llamar métodos que se encuentran en dataSource
export abstract class LogRepository {
   abstract saveLog(log: LogEntity): Promise<void>;
   abstract getLogs(severityLevel: LogSeverityLevel): Promise<LogEntity[]>;
}
