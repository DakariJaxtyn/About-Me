const artists = ['Lana Del Rey', 'Mother Mother', 'Mitski', 'Lady Gaga', 'Nirvana', 'Billie Eilish'];

// a list songs
const favouriteSongs = [
    {
        artist: 'Lana Del Rey',
        song: 'Cherry'
    },
    {
        artist: 'Lana Del Rey',
        song: 'Born to Die'
    },
    {
        artist: 'Lana Del Rey',
        song: 'Diet Mountain Due'
    },
    {
        artist: 'Mother Mother',
        song: 'Hayloft'
    },
    {
        artist: 'Mother Mother',
        song: 'Burning Pile'
    },
    {
        artist: 'Mother Mother',
        song: 'Verbatim'
    },
    {
        artist: 'Mitski',
        song: 'Me and my Husband'
    },
    {
        artist: 'Mitski',
        song: 'Washing Machine Heart'
    },
    {
        artist: 'Mitski',
        song: 'Nobody'
    },
    // {
    //     artist: 'Lady Gaga',
    //     song: ''
    // },
    // {
    //     artist: 'Nirvana',
    //     song: ''
    // },
    // {
    //     artist: 'Billie Eilish',
    //     song: ''
    // },
    // {
    //     artist: 'Billie Eilish',
    //     song: ''
    // },
    // {
    //     artist: 'Billie Eilish',
    //     song: ''
    // }
];

const maxIndex = favouriteSongs.length - 1;
let currentIndex = 0;
const artistElement = document.getElementById('artistName');
const songElement = document.getElementById('songTitle');
const previousButton = document.getElementById("previousButton");
const nextButton= document.getElementById("nextButton");

previousButton.addEventListener('click', previousFavourite);
nextButton.addEventListener('click', nextFavourite);

function nextFavourite() {
    if ( currentIndex < maxIndex) {
        currentIndex = currentIndex + 1;
    } else {
        currentIndex = 0;
    }
    displayCurrentSong();
}

function previousFavourite() {
    if (currentIndex > 0 ) {
        currentIndex = currentIndex - 1;
        
    } else {
        currentIndex = maxIndex
    }
    displayCurrentSong();
}

function displayCurrentSong() {
    artistElement.textContent = favouriteSongs[currentIndex].artist;
    songElement.textContent = favouriteSongs[currentIndex].song;
}

displayCurrentSong();