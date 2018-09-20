import { Pipe, PipeTransform } from '@angular/core';
import { ITickerSymbol } from '../models/ticker-symbol';

@Pipe({
  name: 'tickerFilter'
})

export class TickerFilterPipe implements PipeTransform {
  transform(tickers?: Array<ITickerSymbol>, searchText?: string): Array<ITickerSymbol> {
    if (!tickers || !searchText) { return new Array<ITickerSymbol>(); }
    return tickers.filter((ticker: ITickerSymbol) => ticker.symbol.includes(searchText.toUpperCase()));
  }
}
