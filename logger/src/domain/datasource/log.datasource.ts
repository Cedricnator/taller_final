import { LogEntity } from '../entity/log.entity';
import { LogSeverityLevel } from '../entity/log.enum';


// Implementamos la regla de negocio de nuestro dominio
export abstract class LogDataSource {
   abstract saveLog(log: LogEntity):                                 Promise<void>;
   abstract getLogsByOrigin(origin: string):                         Promise<LogEntity[]>;
   abstract getLogsBySeverityLevel(severityLevel: LogSeverityLevel): Promise<LogEntity[]>;
   abstract getLogs():                                               Promise<LogEntity[]>;
}
