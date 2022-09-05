const PROVIDERS = ['local', 'facebook'] as const;
export type ProviderType = typeof PROVIDERS[number];

export interface Auth {
  providerId: string;
  provider: ProviderType;
  password: string;

  user: string;
}
