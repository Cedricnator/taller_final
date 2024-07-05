import { LogSeverityLevel } from "./log.enum";

export interface LogEntityOptions {
   createdAt?: Date;
   level:      LogSeverityLevel; // enum
   message:    string;
   origin:     string;
}