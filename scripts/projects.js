const container = document.querySelector('#projects');
const dialog = document.querySelector('dialog');
dialog?.addEventListener('click', () => dialog.close())

fetch('/data/projects.json')
.then(res => res.json())
.then(res => {
    renderProjects(res);
    const modalTriggers = document.querySelectorAll('.show-modal');
    for (let i = 0; i < modalTriggers.length; i++) {
        modalTriggers[i].addEventListener('click', () => {
            if (dialog) {
                dialog.showModal();
                dialog.innerHTML = `<img src="${modalTriggers[i].src}"/>`
            }
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
            <ul class='links'>
                ${item.links.map(link => {
                    return `<li>
                                <a target="_blank" href="${link.url}">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-link-45deg" viewBox="0 0 16 16">
                                        <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1 1 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4 4 0 0 1-.128-1.287z"/>
                                        <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243z"/>
                                    </svg>
                                    ${link.name}
                                </a>
                            </li>`
                }).join('')}
            </ul>
            <a class='read-more' href='/projects.html#${item.slug}'>
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

