//dad jokes
const url = 'https://icanhazdadjoke.com/';
const btn = document.querySelector('.btn');
const result = document.querySelector('.result');

btn.addEventListener('click', () => {
  fetchDadJoke();
});

//setup async fx
const fetchDadJoke = async () => {
  result.textContent = 'Loading...';
  try {
    const resposne = await fetch(url, {
      headers: {
        Accept: 'application/json',
        'User-Agent': 'learning App',
      },
    });
    if (!resposne.ok) {
      throw new Error('There was an error...');
    }
    const data = await resposne.json();
    result.textContent = data.joke;
  } catch (error) {
    result.textContent = 'There was an error...';
  }
};

fetchDadJoke();
