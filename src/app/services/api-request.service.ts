import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IJsonRequestOptions, JsonRequestOptions, PostRequest, GetRequest } from '../models/api-request-base';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';


@Injectable()
export abstract class ApiRequestService {
  constructor(private http: HttpClient) { }

  protected executeJsonRestRequest<T>(request: PostRequest | GetRequest): Observable<T> {
    const resourceUri: string = request.resource;
    const options: IJsonRequestOptions = request.options ? new JsonRequestOptions(new HttpHeaders(), request.options.body, request.options.params) : new JsonRequestOptions(new HttpHeaders());
    const response: Observable<T> = this.getReturnFromHttpCall<T>(request.method, resourceUri, options);
    response.catch((error: Error) => Observable.throw(error));
    return response;
  }

  private getReturnFromHttpCall<T>(method: string, resourceUri: string, requestOptions: IJsonRequestOptions): Observable<T> {
    return this.http.request(method, resourceUri, requestOptions).map((response: Object) => response as T);
  }
}
