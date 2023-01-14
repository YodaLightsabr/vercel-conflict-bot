import Command from '@conflict/beta/commands';
import { Embed } from '@conflict/beta/components';

export default new Command({
    name: 'hello-vercel',
    description: 'Hello there Vercel!',
    options: [],
    execute: async (command, options, utils) => {
        const view =(
            <message>
                <Embed color="#ff3333" image={{ url: "https://conflict.js.org/favicon.png" }}>
                    <title>Hello, Vercel!</title>
                    <description>Welcome to **Conflict**.</description>
                </Embed>
            </message>
        );
        console.log({view});
        command.respond(view);
    }
});
