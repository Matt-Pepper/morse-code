import { DICTIONARY } from "../data/dictionary";

export const translate = (input) => {
	const regex = /^[\.\| -]+$/;

	if (regex.test(input)) {
		return morseToEnglish(input).join("");
	} else {
		return englishToMorse(input).join(" ");
	}
};

const morseToEnglish = (input) => {
	return input
		.trim()
		.split(" ")
		.map((item) => {
			return Object.entries(DICTIONARY).find(([key, value]) => item == value)[0];
		});
};

const englishToMorse = (input) => {
	return input
		.toUpperCase()
		.split("")
		.map((item) => {
			return DICTIONARY[item];
		});
};
