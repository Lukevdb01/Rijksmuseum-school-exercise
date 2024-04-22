const apiProvider = {
    get: async (url) => {
        const response = await fetch(url);
        return response.json();
    },

    post: async (url, data) => {
        const response = await fetch(url, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        return response.json();
    },

    put: async (url, data) => {
        const response = await fetch(url, {
            method: 'PUT',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        return response.json();
    }
}
export { apiProvider };