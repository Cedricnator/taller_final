import { Attachement } from '.';

export interface SendMailOptions {
   to:            string | string[];
   subject:       string;
   htmlBody:      string;
   attachements?: Attachement[];
}