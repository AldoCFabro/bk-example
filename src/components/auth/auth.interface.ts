import { Types, Document } from 'mongoose';
export interface IAuth {
  userId: Types.ObjectId;
  email: string;
  password: string;
}

export interface IAuthDocument extends Document {
  userId: Types.ObjectId;
  email: string;
  password: string;
}
