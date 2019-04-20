$('video').mediaelementplayer({
    features: ['playpause','progress','volume','fullscreen'],
    stretching: 'responsive'
});

const myVideo = document.getElementById('vid');
const spanelement = document.querySelectorAll(".span-element");

myVideo.addEventListener('timeupdate', function() {    
    for (let i = 0; i < spanelement.length; i++) {
        if ((myVideo.currentTime > parseFloat($(spanelement[i]).attr("data-start"))) && (myVideo.currentTime < parseFloat($(spanelement[i]).attr("data-end")))) {
            spanelement[i].style.color = "blue";
        } else {
            spanelement[i].style.color = "black";
        }
    }
});

for (let j = 0; j < spanelement.length; ++j) {
    spanelement[j].addEventListener('click', function(e) {
        for (let i = 0; i < spanelement.length; ++i) {
            if ($(e.target).is(spanelement[i])) {
                myVideo.currentTime = parseFloat($(spanelement[i]).attr("data-start"));    
            }
        }
    });
}