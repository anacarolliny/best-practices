import { Injectable } from '@nestjs/common';
import Redis from 'ioredis';
import { CacheService } from 'src/application/interfaces/cache.interface';

@Injectable()
export class RedisCacheProvider implements CacheService {
  constructor(private readonly redis: Redis) {}

  async get<T>(key: string): Promise<T | null> {
    const value = await this.redis.get(key);

    if (!value) return null;

    try {
      return JSON.parse(value) as T;
    } catch {
      return null;
    }
  }

  async set<T>(key: string, value: T, ttl = 60): Promise<void> {
    await this.redis.set(key, JSON.stringify(value), 'EX', ttl);
  }

  async del(key: string): Promise<void> {
    await this.redis.del(key);
  }
}
