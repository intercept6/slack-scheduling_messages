import { App } from '@slack/bolt';

const app = new App({
    signingSecret: process.env.SLACK_SIGNING_SECRET,
    token: process.env.SLACK_BOT_TOKEN
});

app.command('/scheduled_msg', async ({ command, ack, say }) => {
    ack();
    say(`${command.text}`);
});

(async () => {
    await app.start(process.env.PORT || 3000);
    console.log('⚡️ Bolt app is running!');
})();
