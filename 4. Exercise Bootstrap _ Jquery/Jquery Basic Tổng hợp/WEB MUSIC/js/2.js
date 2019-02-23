/**
 * Created by ASUS on 7/12/2017.
 */
$('.nav-toggle-btn').click(function (e) {
    e.preventDefault();
    $('#wrapper').toggleClass('active-nav');
});
// chon hieu ung cho class .active-nav + (thanh phan muon thay doi)

// -------------------------------------------------
// play button

// function audioPlayer(){
//     var currentSong = 0;
//
//     $("#audioPlayer")[0].src = 0;
//     $("#audioPlayer")[0].pause();
//     $(".songs a").click(function(e){
//         e.preventDefault();
//         $("#audioPlayer")[0].src = this;
//         $("#audioPlayer")[0].play();
//         currentSong = $(this).parent().index();
//     });
//
//     // $("#audioPlayer")[0].addEventListener("ended", function(){
//     //     currentSong++;
//     //     if(currentSong == $(".songs a").length)
//     //         currentSong = 0;
//     //     $("#audioPlayer")[0].src = $(".songs a")[currentSong].href;
//     //     $("#audioPlayer")[0].play();
//     // });
// }


//----------------------------------------------------

function audioPlayer(){
    $(".playbtn").click(function(e){
        e.preventDefault();
        $("#audioPlayer")[0].src = this;
        $("#audioPlayer")[0].play();


    });
}
