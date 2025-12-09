declare module '@apiverve/urlunshortener' {
  export interface urlunshortenerOptions {
    api_key: string;
    secure?: boolean;
  }

  export interface urlunshortenerResponse {
    status: string;
    error: string | null;
    data: URLUnshortenerData;
    code?: number;
  }


  interface URLUnshortenerData {
      source:      string;
      destination: string;
      unshortened: boolean;
      reason:      null;
  }

  export default class urlunshortenerWrapper {
    constructor(options: urlunshortenerOptions);

    execute(callback: (error: any, data: urlunshortenerResponse | null) => void): Promise<urlunshortenerResponse>;
    execute(query: Record<string, any>, callback: (error: any, data: urlunshortenerResponse | null) => void): Promise<urlunshortenerResponse>;
    execute(query?: Record<string, any>): Promise<urlunshortenerResponse>;
  }
}
