export const DISCORD_CONSTANTS = {
  MIDJOURNEY_BOT_ID: "936929561302675456",
  MIDJOURNEY_COMMAND_ID: "938956540159881230",
  MIDJOURNEY_COMMAND_VERSION: "1237876415471554623",
  GATEWAY_VERSION: '10',
  GATEWAY_ENCODING: 'json',
  MAX_RECONNECT_ATTEMPTS: 5,
  INTENTS: 1 << 9 | 1 << 15, // GUILD_MESSAGES (1 << 9) | MESSAGE_CONTENT (1 << 15)
  OPCODES: {
    DISPATCH: 0,
    HEARTBEAT: 1,
    IDENTIFY: 2,
    RECONNECT: 7,
    INVALID_SESSION: 9,
    HELLO: 10,
    HEARTBEAT_ACK: 11
  },
  EVENTS: {
    MESSAGE_CREATE: 'MESSAGE_CREATE',
    MESSAGE_UPDATE: 'MESSAGE_UPDATE',
    READY: 'READY'
  }
} as const;

// Export des constantes individuelles pour la rétrocompatibilité
export const BOT_ID = DISCORD_CONSTANTS.MIDJOURNEY_BOT_ID;
export const DISCORD_GATEWAY_URL = `wss://gateway.discord.gg/?v=${DISCORD_CONSTANTS.GATEWAY_VERSION}&encoding=${DISCORD_CONSTANTS.GATEWAY_ENCODING}`;

// Export des commandes Discord
export const COMMAND_IDS = {
  IMAGINE: DISCORD_CONSTANTS.MIDJOURNEY_COMMAND_ID,
  VARIATION: DISCORD_CONSTANTS.MIDJOURNEY_COMMAND_ID,
  UPSCALE: DISCORD_CONSTANTS.MIDJOURNEY_COMMAND_ID,
  DESCRIBE: DISCORD_CONSTANTS.MIDJOURNEY_COMMAND_ID,
  BLEND: DISCORD_CONSTANTS.MIDJOURNEY_COMMAND_ID,
  REROLL: DISCORD_CONSTANTS.MIDJOURNEY_COMMAND_ID
};
