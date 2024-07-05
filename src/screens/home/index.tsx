// src/App.tsx
import React, { useEffect, useState } from 'react';
import { View, FlatList, ActivityIndicator, Text } from 'react-native';
import { HomeScreenStyles } from './Home.styles';
import { fetchPortfolioData } from '../../services/portfolioService';
import { Holding } from '../../interfaces';
import HoldingItem from '../../components/holdingItem/HoldingItem';
import { Colors } from '../../constans';
import HoldingListFooter from '../../components/holdingListFooter/HoldingListFooter';

const Home: React.FC = () => {
  const [data, setData] = useState<Holding[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      const portfolioData = await fetchPortfolioData();
      setData(portfolioData);
      setLoading(false);
    } catch (error) {
      console.error('Error loading data:', error);
      setLoading(false);
    }
  };

  const renderListHeader = () => {
    return (
      <View style={HomeScreenStyles.listHeaderStyle}>
        <Text style={HomeScreenStyles.listHeaderTextStyle}>Upstox Holdings</Text>
      </View>
    );
  };

  const renderListFooter = () => {
    return <HoldingListFooter holdingData={data} />;
  };

  const renderListEmptyComponent = () => {
    return (
      <View style={HomeScreenStyles.loadingView}>
        <Text>No data available</Text>
      </View>
    );
  };

  if (loading) {
    return (
      <View style={HomeScreenStyles.loadingView}>
        <ActivityIndicator size={'large'} color={Colors.primaryColor} />
      </View>
    );
  }

  return (
    <View style={HomeScreenStyles.container}>
      <FlatList
        data={data}
        extraData={data}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={renderListHeader}
        ListFooterComponent={renderListFooter}
        ListEmptyComponent={renderListEmptyComponent}
        renderItem={({ item }) => (
          <HoldingItem
            symbol={item.symbol}
            quantity={item.quantity}
            ltp={item.ltp}
            avgPrice={item.avgPrice}
            close={item.close}
            pnl={item.ltp * item.quantity - item.avgPrice * item.quantity}
          />
        )}
        keyExtractor={(item) => item.symbol}
      />
    </View>
  );
};

export default Home;
