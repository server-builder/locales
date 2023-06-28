// The const name SHOULD match the file name.
const base = {
	name: "Translation Name", // This should be in the language. For example, "Spanish" would be "Español"
	emoji: "🍌", // This should really be a country flag, but if there is none use an emoji that represents the locale.
	authors: ["you!"], // (Markdown is supported - feel free to add links)
	keys: {
		// Put the keys here! any keys that aren't defined will fallback to en-US
	},
};

export default base; // Ensure that your const is exported!
