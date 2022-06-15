// 1

let playList = [
    {author: "LED ZEPPELIN",
     song:"STAIRWAY TO HEAVEN"},
    
    {author: "QUEEN",
     song:"BOHEMIAN RHAPSODY"},
    
    {author: "LYNYRD SKYNYRD",
     song:"FREE BIRD"},
    
    {author: "DEEP PURPLE",
     song:"SMOKE ON THE WATER"},
    
    {author: "JIMI HENDRIX",
     song:"ALL ALONG THE WATCHTOWER"},
    
    {author: "AC/DC",
     song:"BACK IN BLACK"},
    
    {author: "QUEEN",
     song:"WE WILL ROCK YOU"},
    
    {author: "METALLICA",
     song:"ENTER SANDMAN"}
    ];

    // let container = document.querySelector('.first');
    // let playlistLenght = playList.length;
    // let songList = document.createElement('<ol>');
    // songList.innerHTML = '<p> Playlist </p>';
    
    // for (let i = 0; i < playlistLenght; i++) {
    //     container.createElement "<li>" + playList[i].author + " - " + playList[i].song + "</li>";
    // }
    

// 2

let modal = document.querySelector('.modal');

function modalOpen() {
    modal.classList.add('active');
}

function modalClose() {
    modal.classList.remove('active');
}






