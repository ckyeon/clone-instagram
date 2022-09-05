const GENDERS = ['남자', '여자'] as const;
export type GenderType = typeof GENDERS[number];

export interface User {
  name: string;
  userName: string;
  email: string;
  phone: string;
  gender: GenderType;

  auth: string;

  follower: string;
  follow: string;

  post: string;
  comment: string;
  savePost: string;
}
