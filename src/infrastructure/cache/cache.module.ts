import { Module } from '@nestjs/common';
import { RedisCacheProvider as RedisProvider } from './redis.provider';

@Module({
  providers: [
    {
      provide: 'CacheService',
      useClass: RedisProvider,
    },
  ],
  exports: ['CacheService'],
})
export class CacheModule {}
