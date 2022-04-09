import { Schema, model } from 'mongoose';
import { IUserDocument } from './user.interface';
const UserSchema = new Schema(
  {
    userName: {
      type: String,
    },
    email: {
      type: String,
      index: true,
    },
    role: {
      type: String,
    },
    enabled: {
      type: Boolean,
    },
  },
  { timestamps: true },
);

UserSchema.methods.toJSON = function () {
  const { __v, ...user } = this.toObject();

  return user;
};
export default model<IUserDocument>('Users', UserSchema);
