import { mergeConfig, type UserConfig } from 'vite';

export default (config: UserConfig) => {
  return mergeConfig(config, {
    server: {
      allowedHosts: ['admin.swiatnews.pl', 'www.admin.swiatnews.pl']
    }
  });
};
