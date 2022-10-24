import axios, { AxiosInstance } from "axios";

export class HttpClient {
  private axiosInstance: AxiosInstance;
  constructor() {
    this.axiosInstance = axios.create({
      baseURL: `http://localhost:4000`,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  async getNumbersToWords(num: string): Promise<string> {
    console.log(`HttpClient -> getNumbersToWords -> num`, num)
    const response = await this.axiosInstance.post(
      `/number-to-words/${num}`
    );
    console.log(`HttpClient -> getNumbersToWords -> response`, response)
    return response.data.result;
  }
}
