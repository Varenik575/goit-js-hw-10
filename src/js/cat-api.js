
import axios from 'axios';
import { select, loaderEl, catInfoEl } from './refs';

axios.defaults.headers.common["x-api-key"] = "live_7NpEKHEMWLCan6eEiPLD5bNfBoR2Ivp8Wt7FWPX5uavnCRU9UTekFT5qiYhFuDsj";
axios.defaults.baseURL = 'https://api.thecatapi.com/v1';

export function fetchBreeds() {
     select.classList.add('hidden');
    loaderEl.classList.remove('hidden');
    return axios.get('/breeds');
}

export function fetchCatByBreed(breedId) {
    loaderEl.classList.remove('hidden');
    catInfoEl.classList.add('hidden');
    return axios.get('/images/search?breed_ids=' + breedId);
}

