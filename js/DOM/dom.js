import { translate } from "../logic/translate.js";

const output = document.getElementById("output");
const input = document.getElementById("input");

/**
 * Gets input from dom elements translates it and updates the output element
 */
const getInput = () => {
	const inputString = input.value.toUpperCase();
	const outputString = translate(inputString);
	output.textContent = outputString;
};

// creates the input event
export const inputEvent = () => {
	input.addEventListener("input", getInput);
};
