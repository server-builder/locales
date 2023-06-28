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

## Base Translation

The `i18n/en-US` translation defines the structure and every key that needs to be included, and their locations. This translation should only recieve re-wordings or re-organizing. Only Server Builder team members should add or remove keys from this file.

All other translations should follow `en-US` as a guide.

## Creating a new translation

When creating a new translation, first bring it up as an **Issue**. This includes both `i18n` and `custom` translations.

Once approved, create the new translation by copying `base.ts` into the correct folder.

Translations that are in Discord's Locale Reference should be placed into the `i18n` folder. All other translations go into `custom`.

## Attribution

We want everyone who contributes to a translation to receive credit. However, we reserve the right to remove a name from the `authors` field of any translation for any reason, including but not limited to:

- Plagarism
- Removing someone else's name and placing your own
- Doing literally nothing and placing your name
- Poor translation

If you have any questions, please ask them in our [Support Server](https://discord.gg/bYpAbeVwEj).
