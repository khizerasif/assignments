function make_album(artist, title, tracks) {
    var album = {
        artist: artist,
        title: title
    };
    if (tracks) {
        album.tracks = tracks;
    }
    return album;
}
var album1 = make_album('Artist 1', 'Album Title 1');
var album2 = make_album('Artist 2', 'Album Title 2', 12);
var album3 = make_album('Artist 3', 'Album Title 3');
console.log(album1);
console.log(album2);
console.log(album3);
