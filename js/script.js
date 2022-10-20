import * as data from "./data/dictionary.js";

const output = document.getElementById("output");
const input = document.getElementById("input");
const speedSlider = document.getElementById("speed");
const toneSlider = document.getElementById("tone");
const colourPickerOne = document.getElementById("colourOne");
const colourPickerTwo = document.getElementById("colourTwo");

let speed;
let tone;
let colourOne;
let colourTwo;

const setup = () => {
	speed = speedSlider.value;
	tone = toneSlider.value;
	colourOne = colourPickerOne.value;
	colourTwo = colourPickerTwo.value;
	input.addEventListener("input", inputCharacters);
	speedSlider.addEventListener("input", () => {
		speed = speedSlider.value;
	});
	toneSlider.addEventListener("input", () => {
		tone = toneSlider.value;
	});
	colourPickerOne.addEventListener("input", () => {
		colourOne = colourPickerOne.value;
	});
	colourPickerTwo.addEventListener("input", () => {
		colourTwo = colourPickerTwo.value;
	});
};

const inputCharacters = () => {
	const inputArr = [...input.value.toUpperCase()];
	translate(inputArr);
};

const randomTones = () => {
	const number = Math.floor(Math.random() * 2) + 0.5;
	toneSound(number);

};

const toneSound = (time) => {
	const audioCtx = new window.AudioContext();
	const o = audioCtx.createOscillator();
	const g = audioCtx.createGain();
	o.type = "triangle";

	g.gain.exponentialRampToValueAtTime(0.001, time);

	o.frequency.value = 750;
	o.connect(g);
	g.connect(audioCtx.destination);
	o.start();
};

const translate = (inputArr) => {
	const regex = /^[\.\| -]+$/;
	if (regex.test(input.value)) {
        const outputArr = input.value.trim().split(" ").map((item) => {

            return Object.entries(data.DICTIONARY).find(([key, value]) => item == value)[0]
            
        });
		output.textContent = outputArr.join("");
	} else {
		const outputArr = inputArr.map((item) => {
			return data.DICTIONARY[item];
		});
		output.textContent = outputArr.join(" ");
	}
};

setup();