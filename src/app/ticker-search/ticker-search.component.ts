import { Component, OnInit, OnDestroy } from '@angular/core';
import { TickerService } from '../services/ticker.service';
import { ITickerSymbol } from '../models/ticker-symbol';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'ticker-search',
  templateUrl: './ticker-search.component.html',
  styleUrls: ['./ticker-search.component.less']
})
export class TickerSearchComponent implements OnInit, OnDestroy {
  public tickerToSearch: string;
  public tickerList: Array<ITickerSymbol>;
  public tickersAreLoaded: boolean;

  private tickerSubscription: Subscription;
  private tickersAreLoadedSubscription: Subscription;
  private allComponentSubscription: Subscription;

  constructor(
      private tickerService: TickerService
    ) {
      this.allComponentSubscription = new Subscription();
    }

  ngOnInit() {
    this.tickerSubscription = this.tickerService.allTickers
      .subscribe((tickers: Array<ITickerSymbol>) => this.tickerList = tickers);
    this.allComponentSubscription.add(this.tickerSubscription);

    this.tickersAreLoadedSubscription = this.tickerService.tickersAreLoaded
      .subscribe((tickersAreLoaded: boolean) => this.tickersAreLoaded = tickersAreLoaded);
    this.allComponentSubscription.add(this.tickersAreLoadedSubscription);
  }

  ngOnDestroy() {
    if (!this.allComponentSubscription.closed) { this.allComponentSubscription.unsubscribe(); }
  }

}
