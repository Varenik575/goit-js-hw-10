import SlimSelect from 'slim-select';
import 'slim-select/dist/slimselect.css';
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

export function createBreedList(breeds) {
    const breedOptions = breeds.map(({ name, id }) => ({ value: id, text: name }));
    
    new SlimSelect({
        select: select,
        data: breedOptions,
    });

    loaderEl.classList.add('hidden');
    select.classList.remove('hidden');
}

export function renderCatInfo(breedData) {
    
    loaderEl.classList.add('hidden');
    catInfoEl.classList.remove('hidden');

    console.log(breedData);

    const { name, description, reference_image_id, temperament } = breedData.data[0].breeds[0];
    
    catInfoEl.innerHTML = `
   <div class="card-flex-container">
    <img class="card-image" alt="${name}" src="${breedData.data[0].url}">
    <div class="card-inner-container">
    <h2 class="name"> ${name} </h2>
    <p class="description"> ${description} </p>
    <p class="additional-info"><span class="bolder-font">Temperament: </span> ${temperament} </p>
    </div>
    </div>`

}
