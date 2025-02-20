

const call = async() => {
  const apiCall = await fetch('https://rickandmortyapi.com/api/character');
  const response = await apiCall.json();
  console.log(response.results[0].name, ' - ', response.results[0].status);
}

call();