const container = document.querySelector('.container')
const button = document.querySelector('button')

const addJoke = () => {
    const url = 'https://api.chucknorris.io/jokes/random1';
    fetch(url)
        .then(response =>{
        if (response) {
            return response.json()
        }
         })
        .then(joke =>{
            container.innerHTML = joke.value;
        })
        .catch(error =>{
            
            container.innerHTML = `<span>${error.message}</span>`;
        })
}
button.addEventListener('click', addJoke)