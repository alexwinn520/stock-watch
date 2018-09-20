import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiRequestService } from './api-request.service';
import { ITickerSymbol } from '../models/ticker-symbol';
import { GetRequest } from '../models/api-request-base';
import { iexApiBase } from '../globals';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class TickerService extends ApiRequestService {
  private allTickerBehaviorSubject: BehaviorSubject<Array<ITickerSymbol>>;
  private tickersAreLoadedBehaviorSubject: BehaviorSubject<boolean>;

  constructor(http: HttpClient) {
    super(http);
    this.allTickerBehaviorSubject = new BehaviorSubject<Array<ITickerSymbol>>(new Array<ITickerSymbol>());
    this.tickersAreLoadedBehaviorSubject = new BehaviorSubject<boolean>(false);
  }

  public get allTickers(): Observable<Array<ITickerSymbol>> {
    if (!this.allTickerBehaviorSubject.value.length) { this.getTickersOnInit(); }
    return this.allTickerBehaviorSubject.asObservable();
  }

  public get tickersAreLoaded(): Observable<boolean> {
    return this.tickersAreLoadedBehaviorSubject.asObservable();
  }

  private async getTickersOnInit(): Promise<void> {
    const tickerSymbols: Array<ITickerSymbol> = await this.getAllTickerSymbolsFromApi();
    this.allTickerBehaviorSubject.next(tickerSymbols);
    this.tickersAreLoadedBehaviorSubject.next(true);
  }

  private async getAllTickerSymbolsFromApi(): Promise<Array<ITickerSymbol>> {
    const request: GetRequest = {
      resource: `${iexApiBase}ref-data/symbols`,
      method: GetRequest.method
    };

    return await super.executeJsonRestRequest<Array<ITickerSymbol>>(request).toPromise();
  }
}
