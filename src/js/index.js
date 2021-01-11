import '../scss/main.scss';
console.log('HELLO 🚀');

fetch('https://api.github.com/users/maciejwojciechowski99/repos?sort=created&direction=asc')
.then((res) => res.json())
.then ((res) => {
    const container = document.querySelector('.projects-grid--js');
    for (let repo of res) {
        console.log(res);
        const{description, homepage, html_url, name} = repo;
        const template = 
            `<article class="project">
            <div class="project__window">
            <span class="project__circle"></span>
            <span class="project__circle"></span>
            <span class="project__circle"></span>
            </div>
            <div class="project__content">
                <img src="img/github.svg" alt="">
                <h3 class="project__grid ">
                <span class="project__label">project:</span><span class="project__title">${name}</span>
                </h3>
                <p class="project__grid project__grid--description">
                <span class="project__label">description:</span>
                <span>${description}</span>
                </p>
                <p class="project__grid" >
                <span class="project__label">demo:</span>
                <span>
                    &lt;<a class="project__link" href="${homepage}" title="${name} - demo" target="_blank">see_here</a>&gt;
                </span>
                </p>
                <p class="project__grid">
                <span class="project__label">github:</span>
                <span>
                    &lt;<a class="project__link" href="${html_url}" title="${name} - code" target="_blank">source_code</a>&gt;
                </span>
                </p>
            </div>
        </article>`;
        if(description){
        container.innerHTML += template;
        }
    }
})
.catch(e => console.log(e));