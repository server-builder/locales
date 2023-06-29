export default interface Translation {
	/**
	 * The name of the language this translation is made for.
	 * This should be written in the language you're translating for.
	 */
	name: string;
	/**
	 * An emoji that represents this localization. This will appear in the credits screen and in the language selector (for custom locales)
	 *
	 * Usually this is set to a country flag, but if that isn't possible any other emoji that represents this locale works just fine.
	 */
	emoji: string;
	/**
	 * A string array with the authors of this translation.
	 * Markdown is supported, so feel free to add links if desired.
	 */
	authors: string[];
	/**
	 * The object containing the keys. How groundbreaking.
	 */
	keys: {
		/**
		 * Keys for command metadata.
		 */
		commands?: {
			announce?: {
				description?: string;
				options?: {
					channel?: string;
					role_to_ping?: string;
				};
			};
			info?: {
				description?: string;
				subCommands?: {
					server?: {
						description?: string;
					};
					user?: {
						description?: string;
						options?: {
							user?: string;
						};
					};
					invite?: {
						description?: string;
						options?: {
							code?: string;
						};
					};
					avatar?: {
						description?: string;
						options?: {
							user?: string;
						};
					};
					// emoji?: {
					//     description?: "Get information about an emoji",
					//     options?: {
					//         emoji_name_or_id?: 'The emoji, emoji name, or emoji ID',
					//     }
					// }
				};
			};
			about?: {
				description?: string;
			};
		};
		/**
		 * Keys for text that appear in components.
		 */
		components?: {
			/**
			 * Keys for text that appear in modals.
			 */
			modals?: {
				announcement_builder?: {
					title?: string;
					title_field_label?: string;
					title_field_placeholder?: string;
					content_field_label?: string;
					content_field_placeholder_1?: string;
					content_field_placeholder_2?: string;
				};
			};
			/**
			 * Keys for text that appear in select menus.
			 */
			select_menus?: {
				about?: {
					options?: {
						status?: {
							label?: string;
							description?: string;
						};
						server?: {
							label?: string;
							description?: string;
						};
						credits?: {
							label?: string;
							description?: string;
						};
					};
				};
			};
		};
		/**
		 * Keys for text that appear in embeds.
		 */
		embeds?: {
			generic_error?: {
				title?: string;
			};
			announcement_model?: {
				title?: string;
				from_line?: string;
				description?: string;
			};
			about?: {
				changelog_cta?: string;
				credits?: {
					bot_developers?: string;
					founder?: string;
					translators_header?: string;
					translators_description?: string;
					emotional_support?: string;
				};
				interaction_expired_cta?: string;
				ping_header?: string;
				shard_header?: string;
			};
			info?: {
				user?: {
					acc_created?: string;
					serv_join_date?: string;
					booster?: string;
					top_role?: string;
				};
			};
		};
		/**
		 * Keys that appear in traditional message or interaction replies.
		 */
		messages?: {
			interactions?: {
				cannot_interact?: string;
				expired?: string;
			};
			about?: {
				ping_test?: string;
			};
			announce?: {
				announcement_model_context?: string;
			};
		};
		/**
		 * Global keys that appear in a lot of places.
		 */
		global?: {
			join_support_server_cta?: string;
		};
	};
}
