function checkKey(s) {
    let arr = ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'W', 'E', 'T', 'Y', 'U'];
    return arr.indexOf(s.toUpperCase()) > -1;
}
addEventListener('keydown', function(event){
    let klav = event.key;
    if (checkKey(klav)) {
        let audio = new Audio();
        audio.src = `/sounds/${klav}.mp3`;
        audio.play();
    } else {
        console.log('Woring key!');
    }
})