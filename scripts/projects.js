const container = document.querySelector('#projects');
const dialog = document.querySelector('dialog');
dialog.addEventListener('click', () => dialog.close())

fetch('/data/projects.json')
.then(res => res.json())
.then(res => {
    renderProjects(res);
    const modalTriggers = document.querySelectorAll('.show-modal');
    for (let i = 0; i < modalTriggers.length; i++) {
        modalTriggers[i].addEventListener('click', () => {
            dialog.showModal();
            dialog.innerHTML = `<img src="${modalTriggers[i].src}"/>`
        });   
    }

})

function renderProjects(projects) {
    container.innerHTML = ''
    projects.forEach(item => {
        const article = document.createElement('article')
        article.classList.add('project');
        article.id = item.slug
        if (container.classList.contains('summary')) article.classList.add('summary');
        article.innerHTML = `
            <h3>${item.title}</h3>
            <img src="${item.image}" class="show-modal"/>
            <p>${item.subtitle}</p>
            <p>${item.description}</p>
            <ul class='technologies'>
                ${item.technologies.map(tech => ('<li>' + tech + '</li>')).join('')}
            </ul>
            <ul class='links'>${item.links.map(link => ('<li><a target="_blank" href="' + link.url+ '">' + link.name + '</a></li>')).join('')}</ul>
            <a class='read-more' target='_blank' href='/projects.html#${item.slug}'>
                Read More
                <svg xmlns='http://www.w3.org/2000/svg' width='10' height='10' fill='currentColor' viewBox='0 0 16 16'>
                    <path fill-rule='evenodd' d='M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5" />
                    <path fill-rule='evenodd' d='M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0z" />
                </svg>
            </a>
        `
        container.appendChild(article)
    })
}

