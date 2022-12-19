const jokeEl = document.getElementById('jokeEl');
const jokeBtn = document.getElementById('jokeBtn');

generateJoke()
jokeBtn.addEventListener('click',generateJoke)
async function generateJoke(){
const config = {
    headers:{
        Accept:'application/json',
    }
}

const res = await fetch('https://icanhazdadjoke.com/',config);
const data = await res.json()
jokeEl.innerHTML = data.joke
//  console.log(data)

// fetch('https://icanhazdadjoke.com/',config).then(res=>
//     res.json()
// ).then(data=>
//     // console.log(data)
//     jokeEl.innerHTML = data.joke
// )
}