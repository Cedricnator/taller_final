import { LogSeverityLevel } from "../entity/log.entity";

export class SaveLogDto {
   constructor(
      public readonly message: string,
      public readonly level: LogSeverityLevel,
      public readonly origin: string,
   ) { }

   static create(object: { [key: string]: any}): [string?, SaveLogDto?]{
      const { message, level, origin } = object;
      if(!message){
         return ['Missing message'];
      }
      if(typeof message !== 'string'){
         return ['Message must be a string'];
      }
      if(!level){
         return ['Missing level'];
      }
      if(!Object.values(LogSeverityLevel).includes(level)){
         return ['Invalid level'];
      }
      if(!origin){
         return ['Missing origin'];
      }

      return [undefined, new SaveLogDto(message, level, origin)]
   }
}