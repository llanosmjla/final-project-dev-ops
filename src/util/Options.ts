export const Options = {
    method: 'GET',
    headers: {
        'accept': 'application/json',
        "X-Auth-Token": '1958718b1a5941e3896e06b52c8c85f9'
    },
    next: {
        revalidate: 3600,
        tags: ['countries', '/*'],
    }
};
