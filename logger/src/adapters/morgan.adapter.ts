import morgan from "morgan"

export class MorganAdapter{
   constructor(){}

   static morganMiddleware = () => {
      return morgan(':method :url :status :res[content-length] - :response-time ms');
   }
}