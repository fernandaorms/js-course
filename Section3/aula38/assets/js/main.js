const body = document.querySelector('body');

const paragraphs = document.querySelectorAll('.paragrafos > p');

const bodyBackground = getComputedStyle(body).backgroundColor;

for (let p of paragraphs) {
    p.style.backgroundColor = bodyBackground;
    p.style.color = '#FFFFFF';
}
