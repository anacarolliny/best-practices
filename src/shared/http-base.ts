import { HttpException } from '@nestjs/common';
import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

export abstract class HttpBase {
  protected readonly http: AxiosInstance;

  constructor(baseURL: string, config?: AxiosRequestConfig) {
    this.http = axios.create({
      baseURL,
      ...config,
    });
  }

  protected async request<T>(config: AxiosRequestConfig): Promise<T> {
    try {
      const response = await this.http.request<T>(config);
      return response.data;
    } catch (error: any) {
      throw new HttpException(error.response?.data, error.response?.status);
    }
  }
}
