import { DICTIONARY } from "../data/dictionary.js";

/**
 *  Takes a string of either english or morse code and translates it to the other
 * @param {string} input 
 * @returns string of translated text
 */
export const translate = (input) => {
	const regex = /^[\.\| -]+$/;

	if (regex.test(input)) {
		return morseToEnglish(input).join("");
	} else {
		return englishToMorse(input).join(" ");
	}
};

/**
 * Translates morse code into english
 * @param {string} input 
 * @returns english string
 */
const morseToEnglish = (input) => {
	return input
		.trim()
		.split(" ")
		.map((item) => {
			return Object.entries(DICTIONARY).find(([key, value]) => item == value)[0];
		});
};

/**
 * Translates english string into morse code
 * @param {string} input 
 * @returns morse code string
 */
const englishToMorse = (input) => {
	console.log(input);
	return input.split("").map((item) => {
		return DICTIONARY[item];
	});
};
