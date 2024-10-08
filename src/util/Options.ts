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
