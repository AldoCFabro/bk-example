import { Types } from 'mongoose';
export class AuthDTO {
  _id?: Types.ObjectId;
  userId?: Types.ObjectId;
  email?: string;
  password?: string;
  constructor() {}
}
export class LoginDTO {
  email?: string;
  password?: string;
  constructor() {}
}
