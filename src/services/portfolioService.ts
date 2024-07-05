import axios from 'axios';
import { Holding } from '../interfaces';

const API_URL = 'https://35dee773a9ec441e9f38d5fc249406ce.api.mockbin.io/';

export const fetchPortfolioData = async (): Promise<Holding[]> => {
  try {
    const response = await axios.get(API_URL);
    return response.data?.data?.userHolding;
  } catch (error) {
    console.error('Error fetching portfolio data:', error);
    throw error;
  }
};
