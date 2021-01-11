import '../scss/main.scss';

// uncomment the lines below to enable PWA
// import {registerSW} from './pwa.js';
// registerSW();

/* place your code below */

console.log('HELLO 🚀')

fetch('https://api.github.com/users/maciekwtf/repos?sort=created&direction=asc')
.then( resp => resp.json())
.then( resp =>{
  for (let repo of resp) {
    const {name, html_url} = repo;
    const repositoryList = document.querySelector('.list--js');
    const myTemplate = `<li> ${name} <a href="${html_url}" title="link do repoztorium ${name} na githubie"> link do githuba</a></li>`;
    repositoryList.innerHTML += myTemplate;
  }
})
.catch(error =>{
  console.log('nie udało się pobrać');
})