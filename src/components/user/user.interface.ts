import { Types, Document } from 'mongoose';
export interface IUser {
  _id: Types.ObjectId;
  userName: string;
  email: string;
  enabled: boolean;
  role: string;
}
export interface IUserDocument extends Document<any> {
  _id: Types.ObjectId;
  userName: string;
  email: string;
  enabled: boolean;
  role: string;
}

export interface IUserCreate {
  _id: Types.ObjectId;
  userName: string;
  email: string;
  enabled: boolean;
  role: string;
  password: string;
  confirmPassword: string;
}
