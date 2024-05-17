import { apiProvider } from './api.js';

const helper = {
    fetchData: async (id) => {
        try {
            const response = await apiProvider.get(`https://www.rijksmuseum.nl/api/${localStorage.getItem('language')}/collection/${id}?key=${import.meta.env.VITE_RIJKSDATA_API_KEY}`);
            if (response && response.artObject) {
                return response.artObject;
            } else {
                return null;
            }
        } catch (error) {
            alert('Error fetching data: ' + error.message);
            return null;
        }
    },

    shareLink: (url, title, description) => {
        if (navigator.share) {
            navigator.share({
                title: title,
                text: description,
                url: url,
            })
                .then(() => console.log('Successful share'))
                .catch((error) => console.log('Error sharing:', error));
        } else {
            // Fallback for browsers that do not support the Web Share API
            alert("Your browser doesn't support the Web Share API");
        }
    }
}
export { helper };
