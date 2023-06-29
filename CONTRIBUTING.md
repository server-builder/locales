# Contributing

** CUSTOM TRANSLATIONS ARE NOT SUPPORTED YET **

## Format

To make things easier to read and organize, locale files are made of varying numbers of objects and strings. For example, the key `embeds.generic_error.title` would be defined in the locale file as:

```ts
embeds: {
	generic_error: {
		title: "Something Went Wrong", //embeds.generic_error.title
	}
}
```

There is no minimum or maximum as to how many objects a key needs to be nested under.

```ts
keys: {
	banana: "🍌", // keys.banana
	my_object: {
		banana: "🍌", // keys.my_object.banana
		another_object: {
			banana: "🍌", // keys.another_object.banana
			another_another_object: {
				banana: "🍌", // keys.another_another_object.banana
			}
		}
	}
}
```

However, we do ask you to be reasonable.

## Creating a new translation

When creating a new translation, first bring it up as an **Issue**. This includes both `i18n` and `custom` translations.
If your translation is accepted create your translation file.

### File Format

Please place your new translation in the folder assigned by one of the admins (we will tell you this before closing your issue).

In your file, you'll need to `export default` a `const` with the `Translation` type. An example is provided below.

```ts
import Translation from "../Translation";

// In an actual translation, "my_Locale" should be the 4 letter abbreviation of your locale.
const my_Locale: Translation = {};

export default my_Locale;
```

If done correctly, your code editor should alert you of missing properties.
The `name`, `emoji`, `authors`, and `keys` properties are required. The keys are marked as optional.

### Base Translation

All translations are inhereted from the `Translation` interface, defined in `Translation.ts`. This file defines the format of every translation (even the `en_US` one).

## Attribution

We want everyone who contributes to a translation to receive credit. However, we reserve the right to remove a name from the `authors` field of any translation for any reason, including but not limited to:

- Plagarism
- Removing someone else's name and placing your own
- Doing literally nothing and placing your name
- Poor translation

If you have any questions, please ask them in our [Support Server](https://discord.gg/bYpAbeVwEj).
