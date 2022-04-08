import { Schema, model, Types } from 'mongoose';
import { IAuthDocument } from './auth.interface';
const AuthSchema = new Schema(
  {
    userId: {
      type: Types.ObjectId,
    },
    password: {
      type: String,
    },
    email: {
      type: String,
      index: true,
    },
  },
  { timestamps: true },
);

AuthSchema.methods.toJSON = function () {
  const { __v, ...user } = this.toObject();

  return user;
};
export default model<IAuthDocument>('Auth', AuthSchema);
