const audioMusic = new Audio('./assets/audio/music/prototypek.mp3');
const headerBlock = document.getElementById("block-header");
const headerClose = document.getElementById("close-header");
const mainBlock = document.getElementById("block-main");
const closeMainElements = document.querySelectorAll(".close-main");
const baseTypeSpeed = 300;
const baseDeleteSpeed = 200;
const deleteDelay = 2000;
const text = "mozyonee";
let typing = true;
let index = 0;
let pageOpen = false;

const projects = document.querySelector('.projects');
const education = document.querySelector('.education');
const columns = document.querySelectorAll('.column');
const mediaQuery = window.matchMedia('(max-width: 800px)');

const headings = document.querySelectorAll('h3');
const audioClick = new Audio('./assets/audio/sfx/click.ogg');

const getRandomSpeed = (baseSpeed) => {
	const radius = baseSpeed;
	const randomSpeed = Math.floor(baseSpeed - radius + Math.random() * (2 * radius));
	return randomSpeed;
};

const typeText = () => {
	if (typing) {
		if (index < text.length) {
			headerClose.textContent += text[index];
			index++;
			setTimeout(typeText, getRandomSpeed(baseTypeSpeed));
		} else {
			typing = false;
			setTimeout(typeText, deleteDelay);
		}
	} else {
		if (index > 0) {
			headerClose.textContent = text.substring(0, index - 1);
			index--;
			setTimeout(typeText, getRandomSpeed(baseDeleteSpeed));
		} else {
			typing = true;
			setTimeout(typeText, getRandomSpeed(baseTypeSpeed));
		}
	}
};
typeText();


const handleMediaChange = (event) => {
	if (event.matches) {
		columns[0].appendChild(projects);
		columns[1].insertBefore(education, columns[1].firstChild);
	} else {
		columns[1].insertBefore(projects, columns[1].firstChild);
		columns[0].appendChild(education);
	}
};
handleMediaChange(mediaQuery);

mediaQuery.addEventListener('change', handleMediaChange);

headerBlock.addEventListener('click', () => {
	if (!pageOpen) {
		headerBlock.classList.add('fade-out');
		mainBlock.classList.remove('fade-out');
		audioMusic.play();
		pageOpen = true;
	}
});

closeMainElements.forEach(element => {
	element.addEventListener('click', () => {
		if (pageOpen) {
			headerBlock.classList.remove('fade-out');
			mainBlock.classList.add('fade-out');
			audioMusic.loop = true;
			audioMusic.pause();
			pageOpen = false;
		}
	});
});

headings.forEach(heading => {
	heading.addEventListener('click', () => {
		const paragraph = heading.parentElement;
		paragraph.classList.toggle('active');
		audioClick.play();
	});
});
