/**

   createdAt?: Date;
   level:      LogSeverityLevel; // enum
   message:    string;
   origin:     string;

**/

import mongoose from "mongoose";

const logSchema = new mongoose.Schema({
   createdAt: {
      type: Date,
      default: new Date()
   },
   level: {
      type: String,
      enum: ['LOW', 'MEDIUM', 'HIGH'],
      default: 'LOW'
   },
   message: {
      type: String,
      required: true
   },
   origin: {
      type: String,
   }
})

export const LogModel = mongoose.model('Log', logSchema);