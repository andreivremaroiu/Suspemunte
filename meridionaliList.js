import * as APP from './meridionali.js'
import * as Track from './meridionaliTracks'


export function render(trackArray) {
    renderTrackList(trackArray);
};

function renderTrackList (trackArray) {
    const trackList = document.querySelector('.container');

    trackList.innerHTML = '';

    for (let track of trackArray) {
        let newTrack = Track;

        track = new newTrack.Track(track.name, track.location, track.max, track.image);

        track.renderTrack();
    }
}

function startRendering () {
    if(APP.getTracksOver2000() === null ) {
        APP.addTracksOver2000(APP.addTracksOver2000);
    }

    renderTrackList(APP.getTracksOver2000());
}

window.addEventListener('load', startRendering);