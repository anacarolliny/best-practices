import { Module } from '@nestjs/common';
import Redis from 'ioredis';
import { RedisCacheProvider } from './redis.provider';
import { CACHE_SERVICE } from './cache.tokens';

@Module({
  providers: [
    {
      provide: Redis,
      useFactory: () => {
        return new Redis({
          host: 'localhost',
          port: 6379,
        });
      },
    },
    {
      provide: CACHE_SERVICE,
      useClass: RedisCacheProvider,
    },
  ],
  exports: [CACHE_SERVICE],
})
export class CacheModule {}
