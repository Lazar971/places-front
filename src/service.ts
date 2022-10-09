import axios from 'axios'
import { Place } from './types';

export async function searchPlaces(search: string) {
  try {
    const res = await axios.get('http://localhost:9000/api/places/' + search);
    return res.data as Place;
  } catch (error: any) {
    throw new Error(error.response.data.message);
  }
}