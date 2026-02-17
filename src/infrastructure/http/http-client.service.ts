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
    } catch (error: any) {
      throw new HttpException(error.response?.data, error.response?.status);
    }
  }
}
