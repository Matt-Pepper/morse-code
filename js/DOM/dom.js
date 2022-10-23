import { translate } from "../logic/translate.js";

const output = document.getElementById("output");
const input = document.getElementById("input");

const getInput = () => {
	const inputString = input.value.toUpperCase();
	const outputString = translate(inputString);
	output.textContent = outputString;
};

export const inputEvent = () => {
	input.addEventListener("input", getInput);
};
