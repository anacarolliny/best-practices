import { Injectable, HttpException } from '@nestjs/common';
import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

@Injectable()
export class HttpClientService {
  create(baseURL: string, config?: AxiosRequestConfig): AxiosInstance {
    return axios.create({
      baseURL,
      ...config,
    });
  }

  async request<T>(
    http: AxiosInstance,
    config: AxiosRequestConfig,
  ): Promise<T> {
    try {
      const response = await http.request<T>(config);
      return response.data;
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        const status = error.response?.status ?? 500;

        const data = (error.response?.data as unknown) ?? 'External API error';

        throw new HttpException(data, status);
      }

      throw new HttpException('Unexpected error', 500);
    }
  }
}
