import { Filters } from './coutryType';

export type DataRequest = {
    endpoint: string;
    filters?: Filters;
    matchday?: number;
}