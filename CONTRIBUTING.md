**[README](README.md)** | **[License](LICENSE.md)**

<hr />

# Contributing

> ### ⚠ Warning
>
> Custom Translations are not yet supported. They will be in a future release.

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

Once approved, create the new translation in the correct folder (we'll tell you which one to put it in :D)

The translation should export a `const` as `default` that inherits the `Translation` interface. An example is below.

```ts
import Translation from "../Translation";

const my_Amazing_Translation: Translation = {
	// your code editor of choice should alert you of missing attributes from Translation :D
};

export default my_Amazing_Translation;
```

## Attribution

We want everyone who contributes to a translation to receive credit. However, we reserve the right to remove a name from the `authors` field of any translation for any reason, including but not limited to:

- Plagarism
- Removing someone else's name and placing your own
- Doing literally nothing and placing your name
- Poor translation

> ### ℹ Info
>
> Learn more by reading the [license](LICENSE.md).

If you have any questions, please ask them in our [Support Server](https://discord.gg/bYpAbeVwEj).
