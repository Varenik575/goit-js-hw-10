
import { Notify } from 'notiflix';
import { fetchBreeds, fetchCatByBreed, createBreedList, renderCatInfo } from './cat-api';
import { select } from './refs';

const errorMsg = 'Oops! Something went wrong! Try reloading the page!';
select.addEventListener('change', onChange);

fetchBreeds()
    .then(res => { createBreedList(res.data); })
    .catch(e => { Notify.failure(errorMsg); });
    
function onChange(event) {
    event.preventDefault();

    fetchCatByBreed(event.target.value)
        .then(result => renderCatInfo(result))
        .catch(e => { Notify.failure(errorMsg); });
}
