export const URL_API = process.env.URL_API || 'https://api.sportsdata.io/';
export const VERSION = process.env.VERSION || 'v4';

export const Options = {
    method: 'GET',
    headers: {
        'accept': 'application/json',
        "X-Auth-Token": process.env.API_KEY || '',
    },
    next: {
        revalidate: 3600,
        tags: ['countries', '/*'],
    }
};
