function loadResult(response) {
    const result = document.querySelector('#result');
    result.innerHTML = response;
}


async function loadPage(el) {
    const href = el.getAttribute('href');
    
    try {
        const response = await fetch(href);
        if(!((response.status >= 200) && (response.status < 300))) throw new Error(`${response.status} - ${response.statusText}`);
    
        const html = await response.text();
        loadResult(html)
    } catch(e) {
        console.error(e);
    }
}


document.addEventListener('click', e => {
    const tag = e.target.tagName.toLowerCase();

    if (tag === 'a') {
        e.preventDefault();
        loadPage(e.target)
    }
});