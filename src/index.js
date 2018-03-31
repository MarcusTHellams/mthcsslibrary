import axios from 'axios';
import { version } from '../package.json';

console.log(`version  ${version}`);

export const instance = axios.create({
    baseURL: 'https://some-domain.com/api/',
    timeout: 1000,
    headers: {'X-Custom-Header': 'foobar'}
});

