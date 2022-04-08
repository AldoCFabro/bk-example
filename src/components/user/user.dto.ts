import { Types } from 'mongoose';
export class UserDTO {
  _id?: Types.ObjectId;
  userName?: string;
  email?: string;
  enabled?: boolean;
  role?: string[];
  constructor() {}
}

export class UserCreateDTO {
  _id?: Types.ObjectId;
  userName?: string;
  email?: string;
  role?: string[];
  password?: string;
  confirmPassword?: string;
  enabled?: boolean;
  constructor() {}
}
