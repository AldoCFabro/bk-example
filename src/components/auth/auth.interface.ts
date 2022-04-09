import { Types, Document } from 'mongoose';
export interface IAuth {
  userId: Types.ObjectId;
  email: string;
  password: string;
}

export interface IAuthDocument extends Document {
  _id: Types.ObjectId;
  userId: Types.ObjectId;
  email: string;
  password: string;
}
