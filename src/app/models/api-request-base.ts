import { HttpHeaders, HttpParams } from '@angular/common/http';

export interface IJsonRequestOptions {
  headers?: HttpHeaders;
  body?: any;
  params?: HttpParams;
}

export class JsonRequestOptions implements IJsonRequestOptions {
  headers?: HttpHeaders;
  body?: any;
  params?: HttpParams;
  constructor(headers?: HttpHeaders, body?: any, params?: HttpParams) {
    this.headers = headers;
    this.body = body;
    this.params = params;
  }
}

export interface IRestRequestBase {
  resource: string;
  options?: JsonRequestOptions;
}

export class PostRequest implements IRestRequestBase {
  static readonly method: string = 'Post';
  get method(): string { return PostRequest.method; }
  resource: string;
  options?: JsonRequestOptions;
}

export class GetRequest implements IRestRequestBase {
  static readonly method: string = 'Get';
  get method(): string { return GetRequest.method; }
  resource: string;
  options?: JsonRequestOptions;
}
