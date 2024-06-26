const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');

const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];






function searchHandler() {
	let inputText = input.value.toLowerCase();		//	retreiving input and setting it to lower case
	suggestions.innerHTML = '' ;			

	if(inputText === ''){			//	if the input is empty, do not display suggestions
		return ;
	}

	const fruitLetters = Array.from(fruit);		//	create an array with the strings of each fruit

	fruitLetters.forEach((str)=>{
		if(str.toLowerCase().includes(inputText)){		//	if str includes input , create new suggestions
			let newSuggestion = document.createElement('LI');
			newSuggestion.textContent = str ;

			suggestions.appendChild(newSuggestion);
		}	
	})
}





function useSuggestion(e) {		//	Ensures when a suggestion is clicked , that suggestion becomes the user input
 	if(e.target.tagName === 'LI'){
		const selectedSuggestion = e.target.textContent ;
		input.value = selectedSuggestion;
	}
}

input.addEventListener('keyup', searchHandler);
suggestions.addEventListener('click', useSuggestion);