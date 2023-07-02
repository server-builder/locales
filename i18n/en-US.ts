import Translation from "../Translation";

const en_US: Translation = {
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
				description: "Learn about Server Builder",
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
						"We will ping {0} automatically for you.",
				},
			},
			select_menus: {
				about: {
					options: {
						status: {
							label: "Status",
							description: "View the bot's current status",
						},
						server: {
							label: "Server",
							description: "View bot information related to your server.",
						},
						credits: {
							label: "Credits",
							description: "View bot credits",
						},
					},
				},
			},
			buttons: {
				join_support_server_cta: "Join the Support Server",
			}
		},
		embeds: {
			generic_error: {
				title: "Something Went Wrong",
			},
			announcement_model: {
				title: "Announcement Title",
				from_line: "From {0}",
				description: "Your announcement will go here",
			},
			about: {
				changelog_cta: "View Changelog",
				credits: {
					bot_developers: "Bot Developers",
					//translators_header: "Translators (for English)",
					founder: "Founder",
					translators_header: "Translators",
					translators_description:
						"Thank you for making Server Builder accessible for everyone",
					emotional_support: "Emotional Support Cats",
				},
				interaction_expired_cta: "Run /about again to use this menu",
				ping_header: "Ping (as of {0})",
				shard_header: "Shard",
			},
			info: {
				user: {
					acc_created: "Created",
					serv_join_date: "Joined This Server",
					booster: "Booster",
					top_role: "Highest Role",
				},
			},
			autorole: {
				overview: {
					header: "AutoRole Settings",
					status: "AutoRole is",
					roles_header: "Roles",
					default: "Default",
					acc_age: "Account Age Requirement",
					must_contain: "Display Name must contain"
				}
			},
		},
		messages: {
			interactions: {
				cannot_interact: "This interaction doesn't belong to you",
				expired: "This interaction has expired",
			},
			about: {
				ping_test: "One sec...",
			},
			announce: {
				announcement_model_context:
					"Here is an example of an announcement. Follow the instructions in the modal to make your own!",
			},
		},
		global: {
			enabled: "Enabled",
			disabled: "Disabled",
			on: "On",
			off: "Off",
			yes: "Yes",
			no: "No",
			none: "None",
			true: "True",
			false: "False"
		},
	},
};

export default en_US;
