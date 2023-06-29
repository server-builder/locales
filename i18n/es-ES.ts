import Translation from "../Translation";

const es_ES: Translation = {
	name: "Español",
	emoji: "🇪🇸",
	authors: ["[the0show](https://the0show.com/)"],
	keys: {
		commands: {
			about: {
				description: "Información sobre Server Builder",
			},
			announce: {
				description: "Emitir un anuncio para un canal.",
				options: {
					channel: "The channel to send your announcement in",
					role_to_ping:
						"The role to ping in your announcement. Omit to send an announcement with no pings.",
				},
			},
		},
		embeds: {
			about: {
				changelog_cta: "Ver listo de Cambios",
				credits: {
					bot_developers: "Constructores de bot",
					//translators_header: "Traductores (para Español)",
					translators_header: "Traductores",
					emotional_support: "Gatos Solidarios",
					founder: "Fundador",
				},
			},
			info: {
				user: {
					acc_created: "Creaba",
					serv_join_date: "Unió a esta Servidor",
					booster: "Servidor Mejorado", // can someone review this translation? i'm not too sure how to get this concept across
					top_role: "Rol mas Alta",
				},
			},
		},
		messages: {
			about: {
				ping_test: "Un momento...",
			},
		},
	},
};

export default es_ES;
