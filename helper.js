import { Alert } from 'react-native';
import {API_URL} from './Config';

export async function fetchPublishableKey() {
    try {
        const response = await fetch(`${API_URL}/config`);
        const {publishableKey} = await response.json()
        return publishableKey
    } catch (e) {
        console.log(e);
        console.warn('Unable to fetch publishable key. Is your server running?');
        Alert.alert('error', 'Unable to fetch publishable key. Is your server running?')
    }
}