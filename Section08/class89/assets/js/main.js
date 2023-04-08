const request = obj => {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open(obj.method, obj.url, true);
        xhr.send();
    
        xhr.addEventListener('load', (e) => {
            if((xhr.status >= 200) && (xhr.status < 300)) resolve(xhr.responseText);
            else reject(`${xhr.status} - ${xhr.statusText}`);
        });
    });
};


function loadResult(response) {
    const result = document.querySelector('#result');
    result.innerHTML = response;
}


async function loadPage(el) {
    const href = el.getAttribute('href');
    
    const objConfig = {
        method: 'GET',
        url: href
    };

    try {
        const response = await request(objConfig);
        loadResult(response);
    } catch(error) {
        console.log(error);
    }
}


document.addEventListener('click', e => {
    const tag = e.target.tagName.toLowerCase();

    if (tag === 'a') {
        e.preventDefault();
        loadPage(e.target)
    }
});
