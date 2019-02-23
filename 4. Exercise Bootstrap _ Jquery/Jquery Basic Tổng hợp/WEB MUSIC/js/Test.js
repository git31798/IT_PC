songList = [
    {
        "id":"0",
        "name":"Archangel",
        "src":"songs/Archangel.mp3",
        "img":"images/2/archangel.jpg",
        "caption":"Archangel - Two steps from hell",
        "author":"Two steps from hell"
    },
    {
        "id":"1",
        "name":"Dragon Rider",
        "src":"songs/DragonRider.mp3",
        "img":"images/2/dynasty.jpg",
        "caption":"Dragon Rider - Two steps from hell",
        "author":"Two steps from hell"
    },
    {
        "id":"2",
        "name":"Heart Of Courage",
        "src":"songs/HeartOfCourage.mp3",
        "img":"images/2/invincible.jpg",
        "caption":"Heart Of Courage - Two steps from hell",
        "author":"Two steps from hell"
    },
    {
        "id":"3",
        "name":"Victory",
        "src":"songs/Victory.mp3",
        "img":"images/2/battlecry.jpg",
        "caption":"Victory - Two steps from hell",
        "author":"Two steps from hell"
    },
    {
        "id":"4",
        "name":"Winterspell",
        "src":"songs/Winterspell.mp3",
        "img":"images/2/Skyworld.jpg",
        "caption":"Winterspell - Two steps from hell",
        "author":"Two steps from hell"
    },
    {
        "id":"5",
        "name":"Army of angel 1",
        "src":"songs/ArmyOfAngels1.mp4",
        "img":"images/2/ArmyOfAngel1.jpg",
        "caption":"Army of angel 1 - Johannes Bornlöf",
        "author":"Johannes Bornlöf"
    },
    {
        "id":"6",
        "name":"Star Sky",
        "src":"songs/Star Sky.mp4",
        "img":"images/2/battlecry.jpg",
        "caption":"Star sky - Two steps from hell",
        "author":"Two steps from hell"
    }
];



//----------------------------------------------------


function _(id){
    return document.getElementById(id);
}
function TrackCreate() {
    var i=0;
    var trackbox = _("trackbox");

    for (var song in songList) {
        var thumbnail = document.createElement("li");
        var img = document.createElement("img");
        var overlay = document.createElement("div");
        var playbtn = document.createElement("a");
        var name = document.createElement("div");
        var author = document.createElement("div");
        var caption = document.createElement("div");
        thumbnail.className = "col-md-4 songs";
        overlay.className = "overlay";
        img.className = 'img-responsive thumbnail';
        playbtn.className = 'playbtn';
        name.className = "song-name";
        author.className = "author";
        caption.className = "caption";

        playbtn.href = songList[i].src;
        playbtn.id = songList[i].id;
        img.src = songList[i].img;
        name.innerHTML = songList[i].name;
        author.innerHTML = songList[i].author;
        caption.innerHTML = songList[i].caption;
        playbtn.innerHTML = "<i class='glyphicon glyphicon-play'></i>";


        thumbnail.appendChild(img);
        thumbnail.appendChild(overlay);
        thumbnail.appendChild(caption);
        overlay.appendChild(name);
        overlay.appendChild(author);
        overlay.appendChild(playbtn);
        trackbox.appendChild(thumbnail);
        i++;
    }



}




// ---------------------------------------------------

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

function audioPlayer(){
    TrackCreate();
    $(".songs a").click(function(e){
        e.preventDefault();
        $("#audioPlayer")[0].src = this;
        $("#audioPlayer")[0].play();
    });
    $(".songs a").click(function(e){
        e.preventDefault();
        var pause = "<i class='glyphicon glyphicon-pause'></i>";
        var stt = songList[this.id].name + ' - ' + songList[this.id].author;
        document.getElementById("playing-song").innerHTML = stt;
        document.getElementById("playing-song").className = "animated fadeIn";
        $('#playing-song').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
            $('#playing-song').removeClass('animated fadeIn');
        });


        $('#wrapper').addClass("active-nowplaying");
        $('#showHide-nowplaying').addClass('glyphicon-chevron-down');
        $('#showHide-nowplaying').removeClass('glyphicon-chevron-up');
    });
}

// ------------------------------------------------------

// now playing anime------------------
$('#showHide-nowplaying').click(function (e) {
    e.preventDefault();
    $('#wrapper').toggleClass('active-nowplaying');
    var h = document.getElementById("now-playing").offsetHeight;

    if(h == 80){
        $('#showHide-nowplaying').removeClass('glyphicon-chevron-down');
        $('#showHide-nowplaying').addClass('glyphicon-chevron-up');
    }
    if(h == 4){
        $('#showHide-nowplaying').removeClass('glyphicon-chevron-up');
        $('#showHide-nowplaying').addClass('glyphicon-chevron-down');
    }

})

// ---------------------------------




