import { Types } from 'mongoose';
export class User {
  id: Types.ObjectId;
  firstName: string;
  lastName: string;
  userName: string;
  email: string;
  enabled: boolean;
  role: string[];
  constructor(user: any) {
    this.id = user.id || '';
    this.firstName = user.firstName || '';
    this.lastName = user.lastName || '';
    this.userName = user.userName || '';
    this.email = user.email || '';
    this.enabled = user.enabled || true;
    this.role = user.role || ['user'];
  }
}
