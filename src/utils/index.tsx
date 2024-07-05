import { Holding } from '../interfaces';

export const calculateValues = (holdings: Holding[]) => {
  let currentValueTotal = 0;
  let totalInvestment = 0;
  let totalPNL = 0;
  let todayPNL = 0;

  holdings.forEach((holding) => {
    const currentValue = holding.ltp * holding.quantity;
    const investmentValue = holding.avgPrice * holding.quantity;
    const pnl = currentValue - investmentValue;
    const todayPnl = (holding.close - holding.ltp) * holding.quantity;

    currentValueTotal += currentValue;
    totalInvestment += investmentValue;
    totalPNL += pnl;
    todayPNL += todayPnl;
  });

  return { currentValueTotal, totalInvestment, totalPNL, todayPNL };
};
