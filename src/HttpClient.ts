import axios, { AxiosInstance } from "axios";

export class HttpClient {
  private axiosInstance: AxiosInstance;
  constructor() {
    this.axiosInstance = axios.create({
      baseURL: `http://localhost:3001`,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  async getNumbersToWords(num: number): Promise<string> {
    const response = await this.axiosInstance.get(
      `/number-to-words/${num}`
    );
    return response.data.result;
  }
}
