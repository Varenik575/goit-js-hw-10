
import SlimSelect from 'slim-select';
import 'slim-select/dist/slimselect.css';
import { select, loaderEl, catInfoEl } from './refs';

export function createBreedList(breeds) {
    let breedOptions = breeds.map(({ name, id }) => ({ value: id, text: name }));
    let option = {
        text: 'Select breed',
        placeholder: true,
        value: null
    };

    breedOptions.unshift(option);

    new SlimSelect({
        select: select,
        data: breedOptions
    });

    loaderEl.classList.add('hidden');
    select.classList.remove('hidden');

    // select.insertAdjacentHTML(placeholderOption); 
    // SlimSelect.insertAdjacentHTML(placeholderOption);
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
