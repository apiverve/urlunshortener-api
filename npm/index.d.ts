declare module '@apiverve/urlunshortener' {
  export interface urlunshortenerOptions {
    api_key: string;
    secure?: boolean;
  }

  /**
   * Describes fields the current plan does not unlock. Locked fields arrive as null
   * in `data`; `locked_fields` names them, using dot paths for nested fields.
   * Absent when the plan unlocks everything.
   */
  export interface PremiumInfo {
    message: string;
    upgrade_url: string;
    locked_fields: string[];
  }

  export interface urlunshortenerResponse {
    status: string;
    error: string | null;
    data: URLUnshortenerData;
    code?: number;
    premium?: PremiumInfo;
  }


  interface URLUnshortenerData {
      source:            null | string;
      destination:       null | string;
      unshortened:       boolean | null;
      reason:            null;
      redirectCount:     number | null;
      destinationDomain: null | string;
      redirectChain:     (null | string)[];
  }

  export default class urlunshortenerWrapper {
    constructor(options: urlunshortenerOptions);

    execute(callback: (error: any, data: urlunshortenerResponse | null) => void): Promise<urlunshortenerResponse>;
    execute(query: Record<string, any>, callback: (error: any, data: urlunshortenerResponse | null) => void): Promise<urlunshortenerResponse>;
    execute(query?: Record<string, any>): Promise<urlunshortenerResponse>;
  }
}
