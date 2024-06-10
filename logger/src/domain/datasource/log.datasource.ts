import { LogEntity, LogSeverityLevel } from '../entity/log.entity';

// Implementamos la regla de negocio de nuestro dominio
export abstract class LogDataSource {
   abstract saveLog(log: LogEntity): Promise<void>;
   abstract getLogs(severityLevel: LogSeverityLevel): Promise<LogEntity[]>;
}
