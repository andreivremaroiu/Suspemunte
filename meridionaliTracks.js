export class Track {

	constructor(name, location, image, max) {
		this.name = name;
		this.location = location;
		this.image = image;
		this.max = max;

	}

	renderTrack() {
		
		const trackList = document.querySelector('.container');
		trackList.innerHTML += `
			<div class="track">
				<ul>
				    <li>Nume: ${this.name} <br>
				    <strong>Locatie: ${this.location}</strong> <br>
                    <strong>Altitudine maxima: ${this.max} </strong> <br>
				    </li>
				</ul>
			</div>
		`;
	}
}