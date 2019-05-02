// select video.
const $myVideo = $('#vid');

// select all span elements related to video.
const $spanelement = $(".span-element")

// style the video with medis element player plugin.
$myVideo.mediaelementplayer({
    features: ['playpause','progress','volume','fullscreen'],
    stretching: 'responsive'
});

// As the video plays highlight portions of th text.
$myVideo.on('timeupdate', function () {   
    for (let i = 0; i < $spanelement.length; ++i) {
        if ((this.currentTime > parseFloat($spanelement.eq(i).attr("data-start"))) && (this.currentTime < parseFloat($spanelement.eq(i).attr("data-end")))) {
            $spanelement.eq(i).css("color", "blue");
        } else {
            $spanelement.eq(i).css("color", "black");
        }
    }
});

// If a portion of the text is clicked start playing
// the video at that location
for (let j = 0; j < $spanelement.length; ++j) {
    $spanelement.eq(j).click(function() {
        $myVideo[0].currentTime = $(this).attr("data-start");
    });
}