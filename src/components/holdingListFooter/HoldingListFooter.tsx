import React from 'react';
import { View, Text } from 'react-native';
import { Holding } from '../../interfaces';
import { HoldingListFooterStyles } from './HoldingListFooterStyles';
import { calculateValues } from '../../utils';

const HoldingListFooter: React.FC<{ holdingData: Holding[] }> = ({ holdingData }) => {
  const { currentValueTotal, totalInvestment, totalPNL, todayPNL } = calculateValues(holdingData);

  return (
    <View style={HoldingListFooterStyles.footerContainer}>
      <View style={HoldingListFooterStyles.itemContainer}>
        <Text style={HoldingListFooterStyles.boldText}>Current Value</Text>
        <Text style={HoldingListFooterStyles.normalText}>
          ₹ {currentValueTotal?.toFixed(2) || '0'}
        </Text>
      </View>
      <View style={HoldingListFooterStyles.itemContainer}>
        <Text style={HoldingListFooterStyles.boldText}>Total Investment</Text>
        <Text style={HoldingListFooterStyles.normalText}>
          ₹ {totalInvestment?.toFixed(2) || '0'}
        </Text>
      </View>
      <View style={HoldingListFooterStyles.itemContainer}>
        <Text style={HoldingListFooterStyles.boldText}>Today's Profit & Losse:</Text>
        <Text style={HoldingListFooterStyles.normalText}>₹ {todayPNL?.toFixed(2) || '0'}</Text>
      </View>
      <View
        style={[HoldingListFooterStyles.itemContainer, HoldingListFooterStyles.extraFooterMargin]}
      >
        <Text style={HoldingListFooterStyles.boldText}>Profit & Losse:</Text>
        <Text style={HoldingListFooterStyles.normalText}>₹ {totalPNL?.toFixed(2) || '0'}</Text>
      </View>
    </View>
  );
};

export default HoldingListFooter;
