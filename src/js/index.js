
import { Notify } from 'notiflix';
import { fetchBreeds, fetchCatByBreed } from './cat-api';
import { createBreedList, renderCatInfo } from './cat-card-render';
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
