// Best Rock Artist
let selectedcard_rock_artist;
let cardBottom_rock_artist;

// Best Electronica Artist
let selectedcard_electronica_artist;
let cardBottom_electronica_artist;

// Best Music Vide
let selectedcard_music_video;
let cardBottom_music_video;

// Best Young Indie Artist
let selectedcard_young_artist;
let cardBottom_young_artist;


// Best Rock Artist Function
function rockArtistFn(rock_artist_num, card_bottom_value) {
    if (selectedcard_rock_artist) {

        if (selectedcard_rock_artist === rock_artist_num) {
            document.getElementById(selectedcard_rock_artist).classList.remove("card-border");
            document.getElementById(cardBottom_rock_artist).classList.remove("selected-text-block");
            selectedcard_rock_artist = null;
            cardBottom_rock_artist = null;
        } else if (selectedcard_rock_artist !== rock_artist_num) {
            document.getElementById(selectedcard_rock_artist).classList.remove("card-border");
            document.getElementById(cardBottom_rock_artist).classList.remove("selected-text-block");
            selectedcard_rock_artist = rock_artist_num;
            cardBottom_rock_artist = card_bottom_value;
            console.log(selectedcard_rock_artist);
            document.getElementById(selectedcard_rock_artist).classList.add("card-border");
            document.getElementById(cardBottom_rock_artist).classList.add("selected-text-block");
        }
    } else {
        document.getElementById("container-border-rock-artist").classList.remove("container-rock-artist");
        document.getElementById("rock-artist-required-text").classList.remove("required-text-block")
        selectedcard_rock_artist = rock_artist_num;
        cardBottom_rock_artist = card_bottom_value;
        console.log(selectedcard_rock_artist);
        document.getElementById(selectedcard_rock_artist).classList.add("card-border");
        document.getElementById(cardBottom_rock_artist).classList.add("selected-text-block");

    }
}

// Best Electronica Artist Function
function electronicaArtistFn(electronica_artist_num, card_bottom_value) {
    if (selectedcard_electronica_artist) {

        if (selectedcard_electronica_artist === electronica_artist_num) {
            document.getElementById(selectedcard_electronica_artist).classList.remove("card-border");
            document.getElementById(cardBottom_electronica_artist).classList.remove("selected-text-block");
            selectedcard_electronica_artist = null;
            cardBottom_electronica_artist = null;
        } else if (selectedcard_electronica_artist !== electronica_artist_num) {
            document.getElementById(selectedcard_electronica_artist).classList.remove("card-border");
            document.getElementById(cardBottom_electronica_artist).classList.remove("selected-text-block");
            selectedcard_electronica_artist = electronica_artist_num;
            cardBottom_electronica_artist = card_bottom_value;
            document.getElementById(selectedcard_electronica_artist).classList.add("card-border");
            document.getElementById(cardBottom_electronica_artist).classList.add("selected-text-block");
        }
    } else {
        document.getElementById("container-border-electronica-artist").classList.remove("container-rock-artist");
        document.getElementById("electronica-artist-required-text").classList.remove("required-text-block")

        selectedcard_electronica_artist = electronica_artist_num;
        cardBottom_electronica_artist = card_bottom_value;
        document.getElementById(selectedcard_electronica_artist).classList.add("card-border");
        document.getElementById(cardBottom_electronica_artist).classList.add("selected-text-block");

    }
}


// Best Music Video
function musicVideoFn(music_video_num, card_bottom_value) {
    if (selectedcard_music_video) {

        if (selectedcard_music_video === music_video_num) {
            document.getElementById(selectedcard_music_video).classList.remove("card-border");
            document.getElementById(cardBottom_music_video).classList.remove("selected-text-block");
            selectedcard_music_video = null;
            cardBottom_music_video = null;
        } else if (selectedcard_music_video !== music_video_num) {
            document.getElementById(selectedcard_music_video).classList.remove("card-border");
            document.getElementById(cardBottom_music_video).classList.remove("selected-text-block");
            selectedcard_music_video = music_video_num;
            cardBottom_music_video = card_bottom_value;
            document.getElementById(selectedcard_music_video).classList.add("card-border");
            document.getElementById(cardBottom_music_video).classList.add("selected-text-block");
        }
    } else {
        document.getElementById("container-border-music-video").classList.remove("container-rock-artist");
        document.getElementById("music-required-text").classList.remove("required-text-block")

        selectedcard_music_video = music_video_num;
        cardBottom_music_video = card_bottom_value;
        document.getElementById(selectedcard_music_video).classList.add("card-border");
        document.getElementById(cardBottom_music_video).classList.add("selected-text-block");

    }
}


// Best Young Indie Artist
function youngArtistFn(young_artist_num, card_bottom_value) {
    if (selectedcard_young_artist) {

        if (selectedcard_young_artist === young_artist_num) {
            document.getElementById(selectedcard_young_artist).classList.remove("card-border");
            document.getElementById(cardBottom_young_artist).classList.remove("selected-text-block");
            selectedcard_young_artist = null;
            cardBottom_young_artist = null;
        } else if (selectedcard_young_artist !== young_artist_num) {
            document.getElementById(selectedcard_young_artist).classList.remove("card-border");
            document.getElementById(cardBottom_young_artist).classList.remove("selected-text-block");
            selectedcard_young_artist = young_artist_num;
            cardBottom_young_artist = card_bottom_value;
            console.log(selectedcard_young_artist);
            document.getElementById(selectedcard_young_artist).classList.add("card-border");
            document.getElementById(cardBottom_young_artist).classList.add("selected-text-block");
        }
    } else {
        document.getElementById("container-border-young-artist").classList.remove("container-rock-artist");
        document.getElementById("young-artist-required-text").classList.remove("required-text-block")
        selectedcard_young_artist = young_artist_num;
        cardBottom_young_artist = card_bottom_value;
        console.log(selectedcard_young_artist);
        document.getElementById(selectedcard_young_artist).classList.add("card-border");
        document.getElementById(cardBottom_young_artist).classList.add("selected-text-block");
    }
}


//Submit Button Function
function submitButton() {
    if (selectedcard_rock_artist) {
        console.log(selectedcard_rock_artist);
    } else {
        document.getElementById("container-border-rock-artist").classList.add("container-rock-artist");
        document.getElementById("rock-artist-required-text").classList.add("required-text-block")
    }
    if (selectedcard_electronica_artist) {
        console.log(selectedcard_electronica_artist);
    } else {
        document.getElementById("container-border-electronica-artist").classList.add("container-rock-artist");
        document.getElementById("electronica-artist-required-text").classList.add("required-text-block")
    }
    if (selectedcard_music_video) {
        console.log(selectedcard_electronica_artist);
    } else {
        document.getElementById("container-border-music-video").classList.add("container-rock-artist");
        document.getElementById("music-required-text").classList.add("required-text-block")
    }
    if (selectedcard_young_artist) {
        console.log(selectedcard_young_artist);
    } else {
        document.getElementById("container-border-young-artist").classList.add("container-rock-artist");
        document.getElementById("young-artist-required-text").classList.add("required-text-block")
    }
}