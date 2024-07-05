import React, { useState } from 'react';
import { View, Text, Pressable } from 'react-native';
import { HoldingItemProps } from '../../interfaces';
import { HoldingItemStyles } from './HoldingItemStyles';
import HoldingListFooter from '../holdingListFooter/HoldingListFooter';

const HoldingItem: React.FC<HoldingItemProps> = ({
  symbol,
  quantity,
  ltp,
  avgPrice,
  close,
  pnl,
}) => {
  const [expanded, setExpanded] = useState(false);
  const individualStockData = [{ symbol, quantity, ltp, avgPrice, close }];
  return (
    <Pressable style={HoldingItemStyles.container} onPress={() => setExpanded(!expanded)}>
      <View style={HoldingItemStyles.itemContainer}>
        <View>
          <Text style={HoldingItemStyles.boldText}>{symbol}</Text>
          <Text style={HoldingItemStyles.normalText}>Qty: {quantity}</Text>
        </View>
        <View>
          <Text>
            LTP: <Text style={HoldingItemStyles.boldText}>₹ {ltp?.toFixed(2) || '0.00'}</Text>
          </Text>
          <Text>
            P/L: <Text style={HoldingItemStyles.boldText}>₹ {pnl?.toFixed(2) || '0.00'}</Text>
          </Text>
        </View>
      </View>
      {expanded && (
        <View style={HoldingItemStyles.statsContainer}>
          <HoldingListFooter holdingData={individualStockData} />
        </View>
      )}
    </Pressable>
  );
};

export default HoldingItem;
