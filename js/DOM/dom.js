import { translate } from "../logic/translate.js";

const output = document.getElementById("output");
const input = document.getElementById("input");

const getInput = () => {
	const inputArr = [...input.value.toUpperCase()];
	const outputString = translate(inputArr);
	console.log(inputArr);
	output.textContent = outputString;
};

export const inputEvent = () => {
	input.addEventListener("input", getInput);
};
