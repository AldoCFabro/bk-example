import { Types } from 'mongoose';
export class AuthDTO {
  userId?: Types.ObjectId;
  email?: string;
  password?: string;
  constructor() {}
}
