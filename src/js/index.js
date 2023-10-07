
import { Notify } from 'notiflix';
import { fetchBreeds, fetchCatByBreed } from './cat-api';
import { createBreedList, renderCatInfo } from './cat-card-render';
import { loaderEl, select } from './refs';

const errorMsg = 'Oops! Something went wrong! Try reloading the page!';

select.addEventListener('change', onChange);
pageLoad();

function pageLoad() {
    loaderEl.classList.remove('hidden');

    fetchBreeds()
        .then(res => { createBreedList(res.data); })
        .catch(e => { Notify.failure(errorMsg); console.log(e); })
        .finally(loaderEl.classList.add('hidden'));
 
}
    
function onChange(event) {
    event.preventDefault();
    loaderEl.classList.remove('hidden');

    console.log(event.target.value);

    if (event.target.value !== 'null') {
        
        fetchCatByBreed(event.target.value)
        .then(result => renderCatInfo(result))
        .catch(e => { Notify.failure(errorMsg); })
        .finally(loaderEl.classList.add('hidden'));
    }

   
}
