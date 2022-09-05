import { User } from '@clone-instagram/common';

export interface Base {
  _id: string;
}

export interface Created {
  creator?: string | User;
  createdAt: Date;
}

export interface Updated {
  updater?: string | User;
  updatedAt: Date;
}
