// 1

let text = document.querySelector('.text').textContent;

document.body.addEventListener("keydown", (events) => {
    if (events.key === 'e' && (events.ctrlKey || events.metaKey)) {
        events.preventDefault();
        document.body.innerHTML = '<textarea name="textarea" id="textarea" placeholder="text"></textarea>';
        document.getElementById('textarea').value = text;
        console.log(text);
    } 
    else if (events.key == 'Equal' && (events.ctrlKey || events.metaKey)) {
        events.preventDefault();
        let str = document.getElementById('textarea').value;
        document.body.innerHTML = '<div class="homework1"><p class="text"></p>';
        document.querySelector('.text').textContent=str;
    }
})

// 3

let textHolder = document.querySelector('.textholder');
let ownerDocument;
let domRect = textHolder.ownerDocument;
let mouseLeave = false;

textHolder.addEventListener('mousedown', (e) => {
    move();
});

function move() {
    if (!mouseLeave) {
        document.addEventListener ('mousemove', (e) => {
            textHolder.style.width = e.clientX + 'px';
            textHolder.style.height = e.clientY + 'px';
        });
    }
    mouseLeave = false;
    console.log(mouseLeave);
}

textHolder.addEventListener ('mouseup', (e) => {
    console.log(a);
    mouseLeave = true;
})