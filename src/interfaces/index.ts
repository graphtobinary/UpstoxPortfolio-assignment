export interface Holding {
  symbol: string;
  quantity: number;
  ltp: number;
  avgPrice: number;
  close: number;
}

export interface HoldingItemProps extends Holding {
  pnl: number;
}
