function make_album(artist: string, title: string, tracks?: number): { artist: string, title: string, tracks?: number } {
    const album: { artist: string, title: string, tracks?: number } = {
        artist: artist,
        title: title
    };

    if (tracks) {
        album.tracks = tracks;
    }

    return album;
}


const album1 = make_album('Artist 1', 'Album Title 1');
const album2 = make_album('Artist 2', 'Album Title 2', 12); 
const album3 = make_album('Artist 3', 'Album Title 3');

console.log(album1); 
console.log(album2); 
console.log(album3); 
