import { Base, Updated } from './base';

const PROVIDERS = ['local', 'facebook'] as const;
export type ProviderType = typeof PROVIDERS[number];

export interface Auth extends Base, Updated {
  providerId: string;
  provider: ProviderType;
  password: string;

  user: string;
}
