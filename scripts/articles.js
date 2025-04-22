const container = document.querySelector('#articles');

fetch('/data/articles.json')
.then(res => res.json())
.then(res => {
    renderArticles(res);
})

function renderArticles(articles) {
    container.innerHTML = ''
    articles.forEach(item => {
        const article = document.createElement('article')
        article.className = 'medium-article'
        article.innerHTML = `
            <h3>${item.title}</h3>
            <p>${item.subtitle}</p>
            <p>${item.body.substr(0, 180)}...</p>
            <a class='read-more' target='_blank' href='${item.link}'>
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

