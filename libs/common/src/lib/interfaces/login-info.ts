import { User } from '@clone-instagram/common';
import { Base, Created } from './base';

export interface LoginInfo extends Base, Created {
  refreshToken: string;

  user: string | User;
}
