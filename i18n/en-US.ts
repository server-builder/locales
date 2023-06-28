const en_US = {
	name: "English (US)",
	emoji: "🇺🇸",
	authors: ["[rugs](https://rugs.dev/)", "[the0show](https://the0show.com/)"],
	keys: {
		commands: {
			announce: {
				description: "Send a formatted announcement to a channel.",
				options: {
					channel: "The channel to send your announcement in",
					role_to_ping:
						"The role to ping in your announcement. Omit to send an announcement with no pings.",
				},
			},
			info: {
				description: "Get valuable insight on any user, server, or invite code",
				subCommands: {
					server: {
						description: "Get information about this server",
					},
					user: {
						description: "Get information about a user",
						options: {
							user: "The user you want to view",
						},
					},
					invite: {
						description: "Get information about an invite code",
						options: {
							code: "The invite you want to view",
						},
					},
					avatar: {
						description: "Get the full avatar of a user",
						options: {
							user: "The user you want to view {0} YESSSS {1} HAHAHAHAH {2} HEHEHEHE",
						},
					},
					// emoji: {
					//     description: "Get information about an emoji",
					//     options: {
					//         emoji_name_or_id: 'The emoji, emoji name, or emoji ID',
					//     }
					// }
				},
			},
			about: {
				ping_test: "One sec...",
				changelog_cta: "View Changelog",
				credits: {
					bot_developers: "Bot Developers",
					//translators_header: "Translators (for English)",
					translators_header: "Translators",
				},
			},
		},
		components: {
			modals: {
				announcement_builder: {
					title: "Your Announcement",
					title_field_label: "Announcement Title",
					title_field_placeholder: "Title your announcement...",
					content_field_label: "Announcement Content",
					content_field_placeholder_1: "Write your announcement...",
					content_field_placeholder_2:
						"We will ping @{0} automatically for you.",
				},
			},
		},
		embeds: {
			generic_error: {
				title: "Something Went Wrong",
			},
			announcement_model: {
				context:
					"Here is an example of an announcement. Follow the instructions in the modal to make your own!",
				title: "Announcement Title",
				from_line: "From {0}",
				description: "Your announcement will go here",
			},
		},
		messages: {},
		global: {
			join_support_server_cta: "Join our Support Server",
		},
	},
};

export default en_US;
