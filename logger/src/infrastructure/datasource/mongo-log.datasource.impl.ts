import { LogModel } from "../../data";
import { LogDataSource, LogEntity, LogSeverityLevel  } from "../../domain";

export class MongoLogDataSourceImpl implements LogDataSource {
    
    async saveLog(log: LogEntity): Promise<void> {
        const newLog = await LogModel.create(log);
        await newLog.save();
        console.log('Mongo Log created: ', newLog.id );
    }

    async getLogsByOrigin(origin: string): Promise<LogEntity[]>{
        const logs = await LogModel.find({
            origin
        })

        return logs.map( mongoLog => LogEntity.fromObject(mongoLog));
    }

    async getLogsBySeverityLevel(severityLevel: LogSeverityLevel): Promise<LogEntity[]> {
        const logs = await LogModel.find({
            level: severityLevel
        })

        return logs.map( mongoLog => LogEntity.fromObject(mongoLog));
    }

    async getLogs(): Promise<LogEntity[]>{
        const logs = await LogModel.find();
        return logs.map( mongoLog => LogEntity.fromObject(mongoLog));
    }
}